import { useState } from 'react'
import GenericTable from '../../../Generics/Table';
// import BreadCrumbs from "../../../Generics/BreadCrumbs";
// import GenericButton from "../../../Generics/Button";
import { Container } from './style';
import BreadCrumbs from '../../BreadCrumbs';
import GenericButton from '../../../Generics/Button';
import FiliallarModal from './modal';
export const Filiallar = () => {
    const [open, setOpen] = useState(false);
    const headCells = [
        { id: 'filial', label: 'Filiallar' },
        {
            id: 'manzil', label: 'Manzil', align: 'right', render: (props) => {
                return (
                    <a href={props?.href}>{props?.manzil}</a>
                )
            }
        },
    ]
    const rows = [
        {
            id: 1,
            filial: 'Chilonzor filial',
            manzil: "Chilonzor tumani, Bunyodkor shox ko’chasi, 65",
            href: 'https://maps.app.goo.gl/FYXU4DEmJTeT2ZUq5'
        },
        {
            id: 2,
            filial: 'Namangan filial',
            manzil: "Namangan viloyati, Uchqo’rg’on tumani",
            href: 'https://maps.app.goo.gl/FYXU4DEmJTeT2ZUq5'

        },
        {
            id: 3,
            group: 'front-end',
            start: '15:00',
            end: '17:00',
            addedDate: '21.04.2404',
            admin: 'Admin',
            label: 'O’quvchining ismi',
            days: 'Toq Kunlar',
            lavel: 'Beginner',
            phone: '+998 99 555-55-55',
            turi: 'online',
            kurs: 'JavaScript',
            completed: true,
        },
    ];
    const onSave = ()=>{setOpen(false)}
    const onClose = ()=>{setOpen(false)}
    return (
        <Container>
            <FiliallarModal open={open} onSave={onSave} onClose={onClose}/>
            <BreadCrumbs>
                <GenericButton type='add' onClick={()=>setOpen(true)} >Filial Qo'shish</GenericButton>
            </BreadCrumbs>
            <GenericTable width='100%' headCells={headCells} rows={rows} checkbox={false} >
            </GenericTable>
        </Container>
    )
}
export default Filiallar