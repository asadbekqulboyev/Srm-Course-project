import {useState}from 'react'
import { GenericTable } from "../../Generics/Table"
import { Action, Container } from "./style"
import BreadCrumbs from "../../Generics/BreadCrumbs";
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";
import GenericSelect from '../../Generics/Select';
export const Allids = () => {
    const [open, setOpen]= useState(false)
    const [modalOpen, setModal]= useState(false)
    const [modalProps,setModalProps]=useState({})
    const rows = [
        { id: 'name',name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404',admin:'Admin',  label: 'O’quvchining ismi',
        days:'Toq Kunlar',lavel:'Beginner'
         },
        { id: 'group',name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404',admin:'Admin',  label: 'Guruh / Fan',
        days:'Toq Kunlar'
         },
        { id: 'date',name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404', admin:'Admin', label: 'Dars kuni va vaqti',
        days:'Juft Kunlar',lavel:'Junior'
         },
        { id: 'addedDate', name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404',admin:'Admin', label: 'Qo’shilgan sana',
        days:'Juft Kunlar',lavel:'Beginner'
         },
        { id: 'admin', name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404',admin:'Admin', label: 'Moderator',
        days:'Toq Kunlar',lavel:'Advanced'
         }
      ];
    const onEdit = (e,res)=>{
        e.stopPropagation()
        setModal(!modalOpen)
        setModalProps(res)
        
    }
    const onMove = (e)=>{
        console.log('jknknmknknkjnk',e);
        
    }
    const headCells = [
        { id: 'name', label: 'O’quvchining ismi' },
        { id: 'group', label: 'Guruh / Fan' },
        { id: 'date', label: 'Dars kuni va vaqti' },
        { id: 'addedDate', label: 'Qo’shilgan sana' },
        { id: 'admin', label: 'Moderator',render:(res)=>( 
        <Action>
        <Action.Edit onClick={(e)=>onEdit(e,res)}/>
        <Action.Move onClick={onMove}/>
        </Action>
        )}
    ]
   
    const onToggleModal = ()=>{
        setModal(!modalOpen)
        setModalProps(null)
    }
    const onSave = ()=>{
    }
    const data1=[
        
    ]
    return (

        <Container>
            <AllLidsModal open={modalOpen} data={modalProps} onClose={onToggleModal} onSave={onSave}/>
            <BreadCrumbs>
            <GenericButton type='filter'  onClick={()=>setOpen(!open)} >Filter</GenericButton>
            <GenericButton type='import'>import</GenericButton>
            {/* <GenericButton type='primary'>import</GenericButton>
            <GenericButton type='save'>Saqlash</GenericButton>
            <GenericButton type='delete'>O'chirish</GenericButton> */}
            <GenericButton type='add' onClick={onToggleModal} >Buyurtma Qo'shish</GenericButton>
            </BreadCrumbs>
            <GenericTable open={open}  headCells={headCells} rows={rows}>
            <GenericSelect data={data1}/>
            </GenericTable>
        </Container>
    )
}
