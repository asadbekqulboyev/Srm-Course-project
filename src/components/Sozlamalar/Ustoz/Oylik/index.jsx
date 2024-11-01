import { useState } from 'react'
import GenericTable from '../../../Generics/Table';
import GenericButton from '../../../Generics/Button';
import { Container } from './style';
import BreadCrumbs from '../../BreadCrumbs';
import DarajalarModal from './modal';
export const Oylik = () => {
    const [open, setOpen] = useState(false);
    const headCells = [
        { id: 'type', label: 'Qo’shimcha foiz turi' },
        {
            id: 'foiz', label: 'Foiz miqdori', align: 'right'
        }
    ]
    const onClose=()=>{
        setOpen(false)
    }
    const onSave=()=>{
        setOpen(false)
    }
    const rows = [
        {
            id: 1,
            type: 'Odatiy foiz',
            foiz: "10%"
        },
        {
            id: 2,
            type: '1 yillik tajribaga ega o’qituvchi uchun',
            foiz: "50%",
        }
    ];

    return (
        <Container>
            <DarajalarModal open={open} onClose={onClose} onSave={onSave} />
            <BreadCrumbs>
            <GenericButton type='add' onClick={()=>setOpen(true)}>Daraja qo'shish</GenericButton>
            </BreadCrumbs>
            
            <GenericTable width='100%' headCells={headCells} rows={rows} checkbox={false} >
            </GenericTable>
        </Container>
    )
}
export default Oylik