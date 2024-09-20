import BreadCrumbs from "../../Generics/BreadCrumbs";
import GenericButton from "../../Generics/Button";
import { GenericTable } from "../../Generics/Table"
import { Container } from "./style"
import {useState}from 'react'

export const Allids = () => {
    const rows = [
        { id: 'name',name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404',admin:'Admin',  label: 'O’quvchining ismi' },
        { id: 'group',name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404',admin:'Admin',  label: 'Guruh / Fan' },
        { id: 'date',name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404', admin:'Admin', label: 'Dars kuni va vaqti' },
        { id: 'addedDate', name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404',admin:'Admin', label: 'Qo’shilgan sana' },
        { id: 'admin', name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404',admin:'Admin', label: 'Moderator' }
      ];

    const headCells = [
        { id: 'name', label: 'O’quvchining ismi mknolkm; m' },
        { id: 'group', label: 'Guruh / Fan' },
        { id: 'date', label: 'Dars kuni va vaqti' },
        { id: 'addedDate', label: 'Qo’shilgan sana' },
        { id: 'admin', label: 'Moderator' }
    ]
    const [open, setOpen]= useState(false)
    return (

        <Container>
            <BreadCrumbs>
            <GenericButton type='filter' onClick={()=>setOpen(!open)} >Filter</GenericButton>
            <GenericButton type='import'>import</GenericButton>
            {/* <GenericButton type='primary'>import</GenericButton>
            <GenericButton type='save'>Saqlash</GenericButton>
            <GenericButton type='delete'>O'chirish</GenericButton> */}
            <GenericButton type='add'>Buyurtma Qo'shish</GenericButton>
            </BreadCrumbs>
            <GenericTable open={open}  headCells={headCells} rows={rows} />
        </Container>
    )
}
