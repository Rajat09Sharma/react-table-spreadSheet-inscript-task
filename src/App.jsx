import { Navbar } from "./components/Navbar/Navbar";
import { columns, data } from "./components/Data-and-Colum/DataColum";
import { Table } from "./components/Table/Table";
import { TableRibbon } from "./components/TableRibbon/TableRibbon";
import { Ribcolumns, Ribdata } from "./components/Ribbon-Data-Col/RibbonDataCol";
import { RibbonTableTwo } from "./components/TableRibbonTwo/TableRibbonTwo";


function App() {

  return (
    <>
      <Navbar />
      <TableRibbon />
      <RibbonTableTwo data={Ribdata} columns={Ribcolumns} />
      <Table data={data} columns={columns} />
    </>
  )
}

export default App
