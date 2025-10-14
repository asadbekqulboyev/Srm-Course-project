import { useState } from 'react'
import GenericTable from '../../Generics/Table';
import { Action, Container } from "./style"
import BreadCrumbs from "../../Generics/BreadCrumbs";
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";
export const Guruhlar = () => {
    const [modalOpen, setModal] = useState(false)
    const [modalProps, setModalProps] = useState({})
    const onEdit = (e, res) => {
        e.stopPropagation()
        setModal(!modalOpen)
        setModalProps(res)

    }
    const headCells = [
        { id: 'group', label: 'Guruh' },
        { id: 'kurs', label: 'Kurs' },
        { id: 'lavel', label: 'Daraja' },
        { id: 'start', label: 'Boshlanishi' },
        { id: 'end', label: 'Tugashi' },
        { id: 'turi', label: 'Turi' },     
        { id: 'completed', label:'Status',render:(res)=>( 
            <span>{res.completed?"Tugallangan":'Tugallanmagan'}</span>
            )},   
        { id: 'action', label:'',render:(res)=>( 
        <Action>
        <Action.Edit onClick={(e)=>onEdit(e,res)}/>
        <Action.Delete onClick={()=>{}}/>
        </Action>
        )},
        
        

    ]
    const rows = [
        {
            id: 1, 
            group: 'front-end', 
            start: '15:00', 
            end: '17:00', 
            addedDate: '21.04.2404', 
            admin: 'Admin', 
            label: 'O’quvchining ismi',
            days: 'Toq Kunlar', 
            lavel: 'Beginner',
            phone: '+998 99 555-55-55',
            turi:'ofline',
            kurs:'JavaScript',
            completed:false,
        },
        {
            id: 2, 
            group: 'front-end', 
            start: '15:00', 
            end: '17:00', 
            addedDate: '21.04.2404', 
            admin: 'Admin', 
            label: 'O’quvchining ismi',
            days: 'Toq Kunlar', 
            lavel: 'Beginner',
            phone: '+998 99 555-55-55',
            turi:'ofline',
            kurs:'JavaScript',
            completed:false,

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
            turi:'online',
            kurs:'JavaScript',
            completed:true,
        },
      
    ];
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
            <GenericTable headCells={headCells} rows={rows} checkbox={false} url='/guruhlar/guruhlar/checking'>
            </GenericTable>
        </Container>
    )
}