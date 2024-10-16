import { useState } from 'react'
import GenericTable from '../../../Generics/Table';
// import BreadCrumbs from "../../../Generics/BreadCrumbs";
// import GenericButton from "../../../Generics/Button";
import { Container } from './style';
import { CustomSwitch } from './style';
import { Status } from './style';
export const Sorovnoma = () => {
    const [open,setOpen]=useState(false);
    const headCells = [
        { id: 'sorovnoma', label: 'So’rovnoma turi' },
        { id: 'all', label: 'Barcha Lidlar',render:(props)=> <Status >{props?.all}</Status>},
        { id: 'accepted' ,label: 'Konversiya' ,render:(props)=><Status >{props.accepted}</Status>},
        { id: 'foiz'  ,label: 'Foiz' ,render:(props)=><Status >{parseInt((props.accepted / props.all)*100)}%</Status>} 
    ]
    const rows = [
        {
            id: 1, 
            sorovnoma:'Telegram', 
            all:234,
            accepted:56,
            status:true
        },
        {
            id: 2, 
            sorovnoma:'Youtube', 
            all:284,
            accepted:56,
            status:true

        },
        {
            id: 3, 
            sorovnoma:'Instagram',
            all:534,
            accepted:56,
            status:true
            
        },
    ];

    return (
        <Container>
         <GenericTable width='100%'  open={open} headCells={headCells} rows={rows} checkbox={false} >
            </GenericTable>
        </Container>
    )
}
export default Sorovnoma