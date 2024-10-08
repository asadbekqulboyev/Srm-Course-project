import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Delete, Edit, Status, TimelineWrapper, Title } from './tableStyle';

function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} onClick={()=>setOpen(!open)}>
                <TableCell component="th" scope="row">
                    {row.title}
                </TableCell>
                <TableCell align='right'>
                    <Edit />
                    <Delete />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableBody>
                                    {row.groups?.map((rw) =>{ 
                                        
                                        return(
                                        <TableRow sx={{
                                            display:'flex',
                                            border:'1px solid red',background: '#FFFFFF',
                                            border: '1px solid #e5f2ff',
                                            padding:'10px 24px',
                                            width:'100%',
                                            margin:'5px',
                                        }} key={rw.date}>
                                            <TableCell  sx={{borderBottom:'0',flex:'1',display:'flex',flexDirection:"column",gap:'5px'}}>
                                            <Title>{rw.level}</Title>
                                            <Status active={rw.started}>{rw.started ? 'Active':'Soon'}</Status>
                                            </TableCell>
                                            <TableCell sx={{borderBottom:'0',flex:'1',display:'flex',flexDirection:"column",gap:'5px'}}>
                                            <Title>{rw?.filial}</Title>
                                            <Title color='#1890FF'>{rw?.location}</Title>
                                            </TableCell>
                                            <TableCell sx={{borderBottom:'0',flex:'1',display:'flex',flexDirection:"column",gap:'5px'}}>
                                            <TimelineWrapper time>
                                               {rw.timeline}</TimelineWrapper>
                                                
                                                <TimelineWrapper >{rw.time}</TimelineWrapper>
                                                {rw.amount}</TableCell>
                                            <TableCell sx={{borderBottom:'0',flex:'1',display:'flex',flexDirection:"column",gap:'5px'}}>
                                                <Title color='#BBC3CD' font='12'>O'qituvchilar</Title>
                                                <Title color='#929FAF' >{rw.students.length}</Title>
                                            </TableCell>
                                            <TableCell sx={{borderBottom:'0',display:'flex',
                                            gap:'20px',
                                            alignItems:'center',
                                            justifyContent:'center'
                                            }}>
                                                <Edit/>
                                                <Delete/>
                                            </TableCell>
                                        </TableRow>
                                    )})}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function CollapsibleTable(props) {
    const { row, cells } = props
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset' },width:'100%' }}>
                        <TableCell colSpan={2} width={{width:'100%'} }>Kurslar turi</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {row?.map((row) => (
                        <Row key={row.id} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export { CollapsibleTable }