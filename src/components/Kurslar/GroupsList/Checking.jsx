import GenericTable from '../../Generics/Table';
import { Container, Icon } from "./style"
import BreadCrumbs from "../../Generics/BreadCrumbs";
import GenericButton from "../../Generics/Button";
import { students } from '../../../mock/students';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import Status from './Status';


export const Checking = () => {
    const [rows, setRows] = useState(students)
    const headCells = [
        { id: 'name', label: 'Ismi'},
        { id: 'phone', label: 'Telefoni'},
        { id: '25-09', label: '25-09', render:(props)=>{
            return <Status value={props['25-09']}/>    } ,align:'center'},
        { id: '26-09', label: '26-09', render:(props)=>{
            return <Status value={props['26-09']}/>    } ,align:'center'},
        { id: '27-09', label: '27-09', render:(props)=>{
            return <Status value={props['27-09']}/>    } ,align:'center'},
        { id: '28-09', label: '28-09', render:(props)=>{
            return <Status value={props['28-09']}/>    } ,align:'center'},
        { id: '29-09', label: '29-09', render:(props)=>{
            return <Status value={props['29-09']}/>    } ,align:'center'},
        { id: '30-09', label: '30-09', render:(props)=>{
            return <Status value={props['30-09']}/>    } ,align:'center'},
    ]
    // const onStatusClick = ()=>{
    // }
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