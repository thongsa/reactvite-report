import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const EditableDataGrid = () => {
  const [rows, setRows] = useState([
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'React', col2: 'Data Grid' },
  ]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'col1',
      headerName: 'Column 1',
      editable: true,
      width: 150,
    },
    {
      field: 'col2',
      headerName: 'Column 2',
      editable: true,
      width: 150,
    },
  ];

  const handleProcessRowUpdate = (newRow) => {
    const updatedRows = rows.map((row) => (row.id === newRow.id ? newRow : row));
    setRows(updatedRows);
    return newRow;
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        onProcessRowUpdate={handleProcessRowUpdate}
        editMode="row" // Set edit mode to 'row' or 'cell'
      />
    </div>
  );
};

export default EditableDataGrid;
