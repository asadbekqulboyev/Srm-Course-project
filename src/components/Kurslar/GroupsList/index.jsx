import { useState } from 'react'
import GenericTable from '../../Generics/Table';
import { Action, Container } from "./style"
import BreadCrumbs from "../../Generics/BreadCrumbs";
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";
import { rows } from '../../../mock/groups';
import CollapsibleTable from './Table';
export const GroupsList = () => {
    const [modalOpen, setModal] = useState(false)
    const [modalProps, setModalProps] = useState({})
    const onEdit = (e, res) => {
        e.stopPropagation()
        setModal(!modalOpen)
        setModalProps(res)

    }
    const headCells = [
        { id: 'title', label: 'Kurslar Turi ' },
        { id: 'action', label:'',render:(res)=>( 
        <Action>
        <Action.Edit onClick={(e)=>onEdit(e,res)}/>
        <Action.Delete onClick={()=>{}}/>
        </Action>
        )},
        
        

    ]
    const onToggleModal = () => {
        setModal(!modalOpen)
        setModalProps(null)
    }
    const onSave = () => {
    }
    const onMove = () => {
    }
    const data1 = []
    return (
        <Container>
            <AllLidsModal open={modalOpen} data={modalProps} onClose={onToggleModal} onSave={onSave} />
            <BreadCrumbs>
                <GenericButton type='add' onClick={()=> onToggleModal()}>Gururh Qo'shish</GenericButton>
            </BreadCrumbs>
            {/* <GenericTable headCells={headCells} rows={rows} checkbox={false} url='/guruhlar/guruhlar/checking'>
            </GenericTable> */}
            <CollapsibleTable row={rows} cells={headCells}/>
        </Container>
    )
}