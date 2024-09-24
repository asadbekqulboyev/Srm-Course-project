import GenericTable from '../../Generics/Table';
import {  Container } from "./style"
import BreadCrumbs from "../../Generics/BreadCrumbs";
import GenericButton from "../../Generics/Button";
import { students } from '../../../mock/students';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
export const Checking = () => {
    const [rows,setRows]=useState(students)
    const headCells = [
        { id: 'name', label: 'Ismi' },
        { id: 'phone', label: 'Telefoni' }
    ]

    const data1 = []
    return (
        <Container>
           <BreadCrumbs>
           <LocalizationProvider dateAdapter={AdapterDayjs} style={{ top: '-16px' }}>
                    <DatePicker
                        style={{ padding: '0', width: '270px', flex: '0 0 auto' }}
                    />
                </LocalizationProvider>
            </BreadCrumbs>
            <GenericTable headCells={headCells} rows={rows} checkbox={false} >
            </GenericTable>
        </Container>
    )
}
export default Checking