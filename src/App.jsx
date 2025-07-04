import { Navbar } from "./components/Navbar/Navbar";
import { columns, data } from "./components/Table/Data-and-Colum/DataColum";
import { Table } from "./components/Table/Table";
import { TableRibbon } from "./components/TableRibbon/TableRibbon";


function App() {

  return (
    <>
      <Navbar />
      <TableRibbon />
      <Table data={data} columns={columns} />
    </>
  )
}

export default App
