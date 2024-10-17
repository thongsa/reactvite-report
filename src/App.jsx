import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ReportComponent from './Report'
// import ExportToExcelWithImage from './Newexcel'
// import ReportComponent1 from './Report1'
import ExportExcelWithImage from './ReportImg'
// import MyComponent from './PDFaddimage'
import PdfViewer from './PDFViewer'
// import ExportDefaultToolbar from './Datagrid'
// import DataGridComponent from './DatagridConDB'
// import MyDataGrid from './Datagridtest'
// import EditableDataGrid from './DatagridEditable'
// import ExportToPDF from './Pdf'
// import ExportXMLToExcel from './ReportbyXML'
function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <ReportComponent/>
      {/* <hr/><br></br> */}
      {/* <ReportComponent1/> */}
      <hr/><br></br>
      <ExportExcelWithImage/>
      <hr/><br></br>
      {/* <MyComponent/> */}
      {/* <hr></hr><br></br>
      <ExportDefaultToolbar/>
      <hr></hr><br></br>
      <DataGridComponent/>
      <hr></hr><br></br>
      <MyDataGrid/>
      <hr></hr><br></br>
      <EditableDataGrid/>
      <hr></hr><br></br>
      <ExportToPDF/> */}
      <hr></hr>
      <PdfViewer/>
    </>
  )
}

export default App
