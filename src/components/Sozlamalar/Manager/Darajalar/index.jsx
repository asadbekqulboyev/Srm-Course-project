import { useState } from 'react'
import GenericTable from '../../../Generics/Table';
import GenericButton from '../../../Generics/Button';
import { Container } from './style';
import BreadCrumbs from '../../BreadCrumbs';
import DarajalarModal from './modal';
export const Darajalar = () => {
    const [open, setOpen] = useState(false);
    const headCells = [
        { id: 'lavozim', label: 'Lavozim' },
        {
            id: 'yarim', label: 'Yarim stavka'
        },
        {
            id: 'bir', align: 'right', label: 'Bir stavka'
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
            lavozim: 'Bosh manager',
            yarim: "2 150 000 so’m",
            bir: "4 150 000 so’m",
            status: true
        },
        {
            id: 2,
            lavozim: 'Servis manager',
            yarim: "2 150 000 so’m",
            bir: "4 000 000 so’m",
            status: true

        },
        {
            id: 3,
            lavozim: 'Qoravul',
            yarim: '2 100 000 so’m',
            bir: "5 150 000 so’m",

            status: false

        },
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
export default Darajalar