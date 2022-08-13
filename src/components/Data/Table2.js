import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.css'

const rows = [
    { id: 1, lastName: 'Snow', date: 'Apr 23, 2021', amount: "$2300" , status:'Completed'},
    { id: 2, lastName: 'Lannister', date: 'Apr 23, 2021', amount: "-$670" , status:'Completed' },
    { id: 3, lastName: 'Lannister', date: 'Apr 18, 2021', amount: "$234" , status:'Cancelled'},
    { id: 4, lastName: 'Stark', date: 'Apr 15, 2021', amount: "$5000" ,status:'In progress' },
    { id: 5, lastName: 'Targaryen', date: 'Apr 15, 2021', amount: "$2300" , status:'In progress' },
    { id: 6, lastName: 'Melisandre', date: "Apr 11, 2021", amount: "$280" , status:'Completed'},
];
function Table2(props) {
    return (
        <div className={'tab'}>
            <TableContainer component={Paper} className={'table'}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={'tableCell'}>TRANSACTION</TableCell>
                            <TableCell className={'tableCell'}>DATE & TIME</TableCell>
                            <TableCell className={'tableCell'}>AMOUNT</TableCell>
                            <TableCell className={'tableCell'}>STATUS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                >
                                    <TableCell className={'tableCell'}>Payment {row.id}</TableCell>
                                    <TableCell className={'tableCell'}>{row.date}</TableCell>
                                    <TableCell className={'tableCell'}>{row.amount}</TableCell>
                                    <TableCell className={'tableCell'}>
                                        <span className={`status ${row.status.replace(/ /g,'')}`}>{row.status}</span>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Table2;
