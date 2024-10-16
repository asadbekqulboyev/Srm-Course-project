import { useState } from 'react'
import GenericTable from '../../../Generics/Table';
// import BreadCrumbs from "../../../Generics/BreadCrumbs";
// import GenericButton from "../../../Generics/Button";
import { Container } from './style';
export const CallConfig = () => {
    const [open,setOpen]=useState(false);
    const headCells = [
        { id: 'type', label: 'Belgilash turi' },
        { id: 'color', label: 'Ranglar', align:'right',render:(props)=>{
            return(
                <input type='color' style={{border:0, outline:`8px solid ${props?.border}`,width:'32px',height:'32px',borderRadius:'50%',WebkitAppearance:'none'}} defaultValue={props?.color}/> 
            )
        }},    
    ]
    const rows = [
        {
            id: 1, 
            type: 'Qayta telefon qilish kerak',
            color:'#B7EB8F',
            border:'#52C41A'
        },
        {
            id: 2, 
            type: 'Telefonini ko’tarmadi', 
            color:'#FFFB8F',
            border:'#FADB14'

        },
        {
            id: 3, 
            type: 'Ko’proq ma’lumot berish kerak', 
           color:'#87E8DE',
           border:'#13C2C2'
        },
    ];

    return (
        <Container>
         <GenericTable width='100%'  open={open} headCells={headCells} rows={rows} checkbox={false} >
            </GenericTable>
        </Container>
    )
}
export default CallConfig