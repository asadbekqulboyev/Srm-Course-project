import { useState } from 'react'
import { GenericTable } from "../../Generics/Table"
import { Action, Container } from "./style"
import BreadCrumbs from "../../Generics/BreadCrumbs";
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";

export const Hodimlar = () => {
    const [open, setOpen] = useState(false)
    const [modalOpen, setModal] = useState(false)
    const [modalProps, setModalProps] = useState({})

    const onEdit = (e, res) => {
        e.stopPropagation()
        setModal(!modalOpen)
        setModalProps(res)
    }
    const onMove = (e) => {

    }
    const headCells = [
        { id: 'name', label: 'To’liq ismi' },
        { id: 'brithDate', label: "Tug'gulgan sana" },
        { id: 'jinsi', label: 'Jinsi' },
        { id: 'role', label: 'Vazifasi' },
        { id: 'tel', label: 'Telefon raqami'},
        { id: 'filial', label: 'Filial'},
        { id: 'action', label:'',render:(res)=>( 
        <Action>
        <Action.Edit onClick={(e)=>onEdit(e,res)}/>
        </Action>
        )},
        

    ]
    const rows = [
        {
            id: 1, 
            name: 'Aktam Zaripov', 
            brithDate:'12.07.2003', 
            jinsi:'erkak', 
            role:'Adminstrator', 
            tel:'+998991234567',
            filial: 'Chilonzor',
        },
        {
            id: 2, 
            name: 'Sherali Jurayev', 
            brithDate:'12.07.1991', 
            jinsi:'erkak', 
            role:"O'qtuvchi", 
            tel:'+998991234567',
            filial: 'Namangan',
        },
        {
            id: 3, 
            name: 'Jonni', 
            brithDate:'12.07.1982', 
            jinsi:'erkak', 
            role:"O'qtuvchi", 
            tel:'+998991230567',
            filial: 'Beruniy',
        },
     
    ];
    const onToggleModal = () => {
        setModal(!modalOpen)
        setModalProps(null)
    }
    const onSave = () => {
    }
    const data1 = [

    ]
    return (

        <Container>
            <AllLidsModal open={modalOpen} data={modalProps} onClose={onToggleModal} onSave={onSave} />
            <BreadCrumbs>
                {/* <GenericButton type='filter' onClick={() => setOpen(!open)} >Filter</GenericButton> */}
                {/* <GenericButton type='import'>import</GenericButton> */}
                <GenericButton type='add' onClick={onToggleModal} >Ro'l Qo'shish</GenericButton>
            </BreadCrumbs>
            <GenericTable open={open} headCells={headCells} rows={rows} checkbox={false}>
               
            </GenericTable>
        </Container>
    )
}
export default Hodimlar