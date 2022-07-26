import TableScrollArea from "../Compnent/Table";
import data from "../../TemData/Tabledata";
function DatasetsScreen() {
  return (
    <div className="bg-lightGrey w-full">
      <TableScrollArea data={data} />
    </div>
  );
}

export default DatasetsScreen;
