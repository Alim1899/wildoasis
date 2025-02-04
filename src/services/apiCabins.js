import supabase from "./subapase";
const supabaseUrl = "https://qelbbwwgowyxbgzojfww.supabase.co";
const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
};

export default getCabins;

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
};

export const createCabins = async (newCabin) => {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //https://qelbbwwgowyxbgzojfww.supabase.co/storage/v1/object/public/cabin-images//cabin-003.jpg
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // Delete cabin if there are an error
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and new cabin isn't created"
    );
  }
  return data;
};

export const editCabins = async (newCabin, id) => {
  const hasOldImage =
    typeof newCabin.image === "string" &&
    newCabin.image.startsWith(supabaseUrl);

  let imagePath = newCabin.image; // Keep old image if unchanged
  let imageName = "";

  if (!hasOldImage) {
    imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  }

  const { data, error } = await supabase
    .from("cabins")
    .update({ ...newCabin, image: imagePath })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be updated");
  }

  if (!hasOldImage) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      console.error(storageError);
      throw new Error("Cabin image could not be uploaded");
    }
  }

  return data;
};
