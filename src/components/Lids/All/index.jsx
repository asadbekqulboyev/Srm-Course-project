import {useContext, useEffect, useState}from 'react'
import { GenericTable } from "../../Generics/Table"
import { Action, Container } from "./style"
import BreadCrumbs from "../../Generics/BreadCrumbs";
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";
import GenericSelect from '../../Generics/Select';
import { useFetch } from '../../../hooks/useFetch';
import { StudentsContext } from '../../../context/students';
export const Allids = () => {
    const [open, setOpen]= useState(false)
    const [modalOpen, setModal]= useState(false)
    const [modalProps,setModalProps]=useState({})
    const [state,dispatch]=useContext(StudentsContext)
    const request = useFetch()
    const getStudent = async ()=>{
        let res = await request('/tabs/students');
        dispatch({type:"get",payload:res})
    }
    useEffect(()=>{
        getStudent()
    },[])
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
    const onMove = (e,value)=>{
        e.stopPropagation();
        request(`/tabs/studentd/id/*${value.id}*`,{method:"DELETE"}).then((rs)=>{
            console.log(rs)
            getStudent()
        })
    }
    const headCells = [
        { id: 'name', label: 'O’quvchining ismi' },
        { id: 'field', label: 'Guruh / Fan' },
        { id: 'days', label: 'Dars kuni va vaqti' },
        { id: 'added_date', label: 'Qo’shilgan sana' },
        { id: 'admin', label: 'Moderator'},
        { id: 'action', label:'',render:(res)=>( 
        <Action>
        <Action.Edit onClick={(e)=>onEdit(e,res)}/>
        <Action.Move onClick={(e)=>onMove(e,res)}/>
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
            <GenericTable open={open}  headCells={headCells} rows={state}>
            <GenericSelect data={data1}/>
            </GenericTable>
        </Container>
    )
}
