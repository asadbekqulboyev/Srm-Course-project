import { useState } from 'react'
import GenericTable from '../../../Generics/Table';
// import BreadCrumbs from "../../../Generics/BreadCrumbs";
// import GenericButton from "../../../Generics/Button";
import { Container } from './style';
import { Status } from './style';
import { CustomSwitch } from './style';
export const Xabarnoma = () => {
    const [open,setOpen]=useState(false);
    const headCells = [
        { id: 'xabar', label: 'Xabarnoma turi' },
        {id:'time', label:'Vaqt',render:(props)=>{
            return(
                <Status>{props?.time}</Status> 
            )
        }},
        { id: 'status', align:'right' ,label: 'Faollashtirish' ,render:(props)=>{
            return(
                <CustomSwitch  defaultChecked={props.status}/>
            )
        }}  
    ]
    const rows = [
        {
            id: 1, 
            xabar: 'Dars vaqtini eslatish', 
            time:"18-00",
            status:true
        },
        {
            id: 2, 
            xabar: 'Qoldirilgan vazifalar', 
            time:"21-00",
            status:true

        },
        {
            id: 3, 
            xabar: 'Qoldirilgan darslar', 
            time: '15:00', 
            status:false
            
        },
    ];

    return (
        <Container>
         <GenericTable width='100%'  open={open} headCells={headCells} rows={rows} checkbox={false} >
            </GenericTable>
        </Container>
    )
}
export default Xabarnoma