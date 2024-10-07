import { useState } from 'react'
import { GenericTable } from "../../Generics/Table"
import { Action, Container } from "./style"
import BreadCrumbs from "../../Generics/BreadCrumbs";
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";

export const Fields = () => {
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
        { id: 'rooms', label: 'Xona' },
        { id: 'capcity', label: "O'rinlar soni" },
        { id: 'freetime', label: "Bo'sh vaqti",render:({freetime})=>(
            <span>
                {freetime?.map((val)=>(
                    <span style={{background:'whitesmoke',padding:'4px',margin:'2px',borderRadius:'4px'}} key={val}>{val}</span>
                ))}
            </span>
        )},
        { id: 'wifi', label: 'WiFi' },
        { id: 'monitor', label: 'Monitor' },
        { id: 'blackboard', label: 'Blackboard'},
        { id: 'status', label: 'Status'},
        { id: 'action', label:'',render:(res)=>( 
        <Action>
        <Action.Edit onClick={(e)=>onEdit(e,res)}/>
        </Action>
        )},
        

    ]
    const rows = [
        {
            id: 1, 
            rooms: 'Front End Team', 
            capcity:20, 
            freetime: ['14-00~16:00','21:00'], 
            wifi:'bor', 
            monitor:'yoq',
            blackboard: 'bor', 
            status:'Ishlayabdi',
        },
        {
            id: 2, 
            rooms: 'Back End Team', 
            capcity:20, 
            freetime: ['11-00~13:00','21:00'], 
            wifi:'yoq', 
            monitor:'bor',
            blackboard: 'bor', 
            status:'Remontda',
        },
        {
            id: 3, 
            rooms: 'Mobile Team', 
            capcity:12, 
            freetime: ['11-00~13:00','21:00'], 
            wifi:'bor', 
            monitor:'bor',
            blackboard: 'bor', 
            status:'Ishlayabdi',
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
export default Fields