import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
const CabinTable = () => {
  const { isLoading, cabins, error } = useCabins();
  if (isLoading) return <Spinner />;
  if (error) throw new Error("Error during loading data");
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div> <div>Cabin</div> <div>Capacity</div> <div>Price</div>{" "}
          <div>Discount</div> <div></div>
        </Table.Header>

        <Table.Body
          data={cabins}
          render={(cabin) => {
            return <CabinRow key={cabin.id} cabin={cabin} />;
          }}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
