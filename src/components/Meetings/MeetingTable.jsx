import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Meetings from '../../store/Meetings';
import { observer } from 'mobx-react';

  function createData(index, meeting) {
    const date = meeting.dateTime;
    const service = meeting.service;
    const name = meeting.name;
    const phone = meeting.phone;
  return { index, date, service, name, phone }; }
const BasicTable =(observer(()=>{

  const rows = Array.from({length: Meetings.meetingsList.length }, (_, index) => {
    return createData(index, Meetings.meetingsList[index]); });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> טל' ליצירת קשר</TableCell>
            <TableCell align="right">שם הלקוח</TableCell>
            <TableCell align="right">שרות מבוקש</TableCell>
            <TableCell align="right">תאריך</TableCell>
            <TableCell align="right">מס' פגישה</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='right'>
                {row.phone}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.service}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.index}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
 }))
 export default  BasicTable;
