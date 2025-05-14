'use client'

import * as React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'

const columns: GridColDef[] = [
  { field: 'connectionName', headerName: 'Tên kết nối', minWidth: 200 },
  { field: 'source', headerName: 'Nguồn', width: 130 },
  { field: 'distination', headerName: 'Điểm đến', width: 130 },
  { field: 'sync', headerName: 'Đồng bộ', width: 90 },
  { field: 'lastSync', headerName: 'Đồng bộ hóa lần cuối', width: 90 },
  { field: 'status', headerName: 'Trạng thái', width: 90 },
  { field: 'action', headerName: 'Đồng bộ', width: 90 }
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
]

const paginationModel = { page: 0, pageSize: 5 }

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        //checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  )
}
