// ReportComponent.js
import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ReportComponent1 = () => {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
    const imgLocal = 'data:image/png;base64,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'; // Replace with your base64-encoded image
  const reportData = [
    { id: 1, name: 'John Doe', age: 28, job: 'Engineer',img:imgLocal },
    { id: 2, name: 'Jane Smith', age: 34, job: 'Designer',img:imgLocal  },
    { id: 3, name: 'Sam Green', age: 45, job: 'Manager',img:imgLocal  },
  ];

  const headers = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
    { label: 'Job', key: 'job' },
    { label: 'img', key: 'img' },
  ];

  const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase();
    setFilter(value);
    setFilteredData(
      reportData.filter((item) =>
        item.name.toLowerCase().includes(value)
      )
    );
  };

  // Function to export data to Excel
  const exportToExcel = () => {
    const dataToExport = filter ? filteredData : reportData;
    // const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    // Adding image (logo)
    //const logoBase64 = 'data:image/png;base64,INSERT_YOUR_BASE64_IMAGE_HERE'; // Replace with actual base64 image
    const imgb = new Image();
    imgb.src = imgLocal;
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
    // XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
   // XLSX.writeFile(workbook, 'employee_report.xlsx');
    // Export the workbook
    const excelBuffer = XLSX.writeFile(workbook);
     // Save the Excel file
     const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
     saveAs(blob, 'DataWithLogo.xlsx');
    
  };

  // Function to export data to PDF
  const exportToPDF = () => {
    const dataToExport = filter ? filteredData : reportData;
    const doc = new jsPDF();
    
    doc.text('Employee Report', 14, 10);
    
    const tableColumn = ['ID', 'Name', 'Age', 'Job','img'];
    const tableRows = [];

    dataToExport.forEach((item) => {
      const rowData = [item.id, item.name, item.age, item.job];
      tableRows.push(rowData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save('employee_report.pdf');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Employee Report</h2>

      <input
        type="text"
        placeholder="Search by Name"
        value={filter}
        onChange={handleFilterChange}
        style={{ padding: '10px', marginBottom: '20px' }}
      />

      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
            <th>img</th>
          </tr>
        </thead>
        <tbody>
          {(filter ? filteredData : reportData).map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.job}</td>
              <td><img width={50} height={50} alt={employee.img} src={employee.img}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginBottom: '20px' }}>
        {/* Export to CSV */}
        <CSVLink
          data={filter ? filteredData : reportData}
          headers={headers}
          filename={"employee_report.csv"}
          className="btn btn-primary"
          target="_blank"
          style={{
            padding: '10px 20px',
            backgroundColor: 'blue',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            marginRight: '10px',
          }}
        >
          Export to CSV
        </CSVLink>

        {/* Export to Excel */}
        <button
          onClick={exportToExcel}
          style={{
            padding: '10px 20px',
            backgroundColor: 'green',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            marginRight: '10px',
          }}
        >
          Export to Excel
        </button>

        {/* Export to PDF */}
        <button
          onClick={exportToPDF}
          style={{
            padding: '10px 20px',
            backgroundColor: 'red',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Export to PDF
        </button>
      </div>
    </div>
  );
};

export default ReportComponent1;
