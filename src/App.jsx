import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ReportComponent from './Report'
import ReportComponent1 from './Report1'
import ExportExcelWithImage from './ReportImg'
// import ExportXMLToExcel from './ReportbyXML'
function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <ReportComponent/>
      <hr/><br></br>
      <ReportComponent1/>
      <hr/><br></br>
      <ExportExcelWithImage/>
    </>
  )
}

export default App
