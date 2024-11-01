import GenericTable from '../../../Generics/Table';
import { Container } from './style';
import { CustomSwitch } from './style';
import BreadCrumbs from '../../BreadCrumbs';
import GenericButton from '../../../Generics/Button';
import TolovlarModal from './modal';
import { useState } from 'react';
export const TolovlarStudent = () => {
    const [open, setOpen] = useState(false);
    const headCells = [
        { id: 'tolov', label: 'Tolov turi' },
        { id: 'price', align:'right', label:(<div>Bonusni o’chirish <CustomSwitch/></div> )}
    ]
    const rows = [
        {
            id: 1, 
            tolov: 'Ikkita guruhga kelsa bonus miqdori', 
            price:"10 000 sum",
        },
        {
            id: 2, 
            tolov: 'Uchta guruhga kelsa bonus miqdori', 
            price:"30 000",

        }
    ];
    const onClose=()=>{
        setOpen(false)
    }
    const onSave=()=>{
        setOpen(false)
    }
    return (
        <Container>
        <TolovlarModal open={open} onClose={onClose} onSave={onSave} />
        <BreadCrumbs>
        <GenericButton type='add' onClick={()=>setOpen(true)}>Bonus qo’shish</GenericButton>
        </BreadCrumbs>
         <GenericTable width='100%'  headCells={headCells} rows={rows} checkbox={false} >
        </GenericTable>
        </Container>
    )
}
export default TolovlarStudent