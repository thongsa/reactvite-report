import * as React from 'react';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
  { field: 'col3', headerName: 'Column 3', width: 150 },
  { field: 'col4', headerName: 'Column 4', width: 150 },
];

const rows = [
  { id: 1, col1: 'Hello', col2: 'World',col3: 'Hellowww', col4: 'Wowwwrld' },
  { id: 2, col1: 'React', col2: 'Data Grid' },
  { id: 3, col1: 'fff', col2: 'Data Gffffrid' },
  { id: 4, col1: 'React', col2: 'Data Grid' },
  { id: 5, col1: 'fff', col2: 'Data Gffffrid' },
  { id: 6, col1: 'React', col2: 'Data Grid' },
  { id: 7, col1: 'fff', col2: 'Data Gffffrid' },
  { id: 8, col1: 'React', col2: 'Data Grid' },
  { id: 9, col1: 'fff', col2: 'Data Gffffrid' },
  { id: 10, col1: 'React', col2: 'Data Grid' },
  { id: 11, col1: 'fff', col2: 'Data Gffffrid' },
  { id: 12, col1: 'React', col2: 'Data Grid' },
  { id: 13, col1: 'fff', col2: 'Data Gffffrid' },
];

const MyDataGrid = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} 
      checkboxSelection
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[10]}
      slots={{ toolbar: GridToolbar}}/>
    </div>
  );
};

export default MyDataGrid;
