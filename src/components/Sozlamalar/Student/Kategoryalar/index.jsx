import { useState } from 'react'
import GenericTable from '../../../Generics/Table';
import GenericButton from '../../../Generics/Button';
import { Container } from './style';
import BreadCrumbs from '../../BreadCrumbs';
import KategoryModal from './modal';
export const Kategorya = () => {
    const [open, setOpen] = useState(false);
    const headCells = [
        { id: 'type', label: 'Kategoriya turi (Jinsi)' },
        {id:'soni',label:'Soni'},
        {
            id: 'foiz', label: 'Foiz', align: 'right'
        }
    ]
    const headCellsTeacheer = [
        { id: 'type', label: 'Kategoriya turi' },
        {id:'soni',label:'Soni'},
        {
            id: 'foiz', label: 'Foiz', align: 'right'
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
            type: 'O’gil bolalar',
            soni: "20",
            foiz:'20%'
        },
        {
            id: 2,
            type: 'Qizlar',
            soni: "12",
            foiz:'20%'
        }
    ];
    const rowsTeacheer = [
        {
            id: 1,
            type: 'O’quvchi bolalar',
            soni: "40",
            foiz:'20%'
        },
        {
            id: 2,
            type: 'Abturient',
            soni: "112",
            foiz:'20%'
        }
    ];
    return (
        <Container>
            <KategoryModal open={open} onClose={onClose} onSave={onSave} />
            <BreadCrumbs>
            <GenericButton type='add' onClick={()=>setOpen(true)}>Kategoriya qo’shish</GenericButton>
            </BreadCrumbs>
            
            <GenericTable width='100%' headCells={headCells} rows={rows} checkbox={false} >
            </GenericTable>
            <GenericTable width='100%' headCells={headCellsTeacheer} rows={rowsTeacheer} checkbox={false} >
            </GenericTable>
        </Container>
    )
}
export default Kategorya