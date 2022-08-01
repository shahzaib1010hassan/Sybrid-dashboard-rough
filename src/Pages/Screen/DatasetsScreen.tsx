import TableScrollArea from "../../component/Table";
import data from "../../temporaryData/Tabledata";
function DatasetsScreen() {
  return (
    <div className="bg-lightGrey w-full">
      <TableScrollArea data={data} />
    </div>
  );
}

export default DatasetsScreen;
