import { useState } from 'react'
import { GenericTable } from "../../Generics/Table"
import { Action, Container } from "./style"
import BreadCrumbs from "../../Generics/BreadCrumbs";
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";

export const Roles = () => {
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
        { id: 'daraja', label: 'Daraja' },
        { id: 'izoh', label: "Daraja Izohi " },
        {id:'action',label:'',render:(res)=>(
            <Action>
        <Action.Edit onClick={(e)=>onEdit(e,res)}/>
        </Action>
        )}
    ]
    const rows = [
        
        {
            id: 1, 
            daraja:'Filial direktori',
            izoh:'Faqat bitta filialni ko’rib boshqaradi',
        },
        {
            id: 2, 
            daraja:'Adminstrator',
            izoh:'O’quvchi qabul qiladi',
        },
        {
            id: 3, 
            daraja:'O’qituvchi',
            izoh:'Dars beradi, ustoz',
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
                <GenericButton type='add' onClick={onToggleModal} >Hona Qo'shish</GenericButton>
            </BreadCrumbs>
            <GenericTable open={open} headCells={headCells} rows={rows} checkbox={false}>
               
            </GenericTable>
        </Container>
    )
}
export default Roles