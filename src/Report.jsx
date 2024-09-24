// ReportComponent.js
import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ReportComponent = () => {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const reportData = [
    { id: 1, name: 'John Doe', age: 28, job: 'Engineer' },
    { id: 2, name: 'Jane Smith', age: 34, job: 'Designer' },
    { id: 3, name: 'Sam Green', age: 45, job: 'Manager' },
  ];

  const headers = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
    { label: 'Job', key: 'job' },
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
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
    XLSX.writeFile(workbook, 'employee_report.xlsx');
  };

  // Function to export data to PDF
  const exportToPDF = () => {
    const dataToExport = filter ? filteredData : reportData;
    const doc = new jsPDF();
    
    doc.text('Employee Report', 14, 10);
    
    const tableColumn = ['ID', 'Name', 'Age', 'Job'];
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
          </tr>
        </thead>
        <tbody>
          {(filter ? filteredData : reportData).map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.job}</td>
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

export default ReportComponent;
