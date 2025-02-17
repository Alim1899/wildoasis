import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

const useEditCabin = () => {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => editCabinApi(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin succesfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editCabin, isEditing };
};

export default useEditCabin;
