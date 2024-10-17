// src/DataGridComponent.js
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const DataGridComponent = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    { field: 'user_id', headerName: 'ID', width: 90 },
    { field: 'user_code', headerName: 'Code', width: 150 },
    { field: 'user_name', headerName: 'Name', width: 150 }
    // Add more columns based on your data
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get('http://localhost:5000/users/all')
        .then((response)=>{
            setRows(response.data.data[0][1])
            console.log(response.data.data[0]);
            
        })
        .catch((error)=>{
            console.log(error);           
        })       
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5} // Adjust based on your data structure
      />
    </div>
  );
};

export default DataGridComponent;
