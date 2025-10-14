import { useState } from 'react'
import { GenericTable } from "../../Generics/Table"
import { Action, Container } from "./style"
import BreadCrumbs from "../../Generics/BreadCrumbs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";
import GenericSelect from '../../Generics/Select';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
export const NewStudent = () => {
    const [open, setOpen] = useState(false)
    const [modalOpen, setModal] = useState(false)
    const [modalProps, setModalProps] = useState({})
    const rows = [
        {
            id:1, name: 'Webbrain', group: 'front-end', date: '21.21.2002', addedDate: '21.04.2404', admin: 'Admin', label: 'O’quvchining ismi',
            days: 'Toq Kunlar', lavel: 'Beginner',
            phone:'+998 99 555-55-55'
        },
        {
            id:2 , name: 'Webbrain', group: 'front-end', date: '21.21.2002', addedDate: '21.04.2404', admin: 'Admin', label: 'Telefon raqam',
            days: 'Toq Kunlar', lavel: 'Beginner',
            phone:'+998 99 555-55-55'
        },
        {
            id:3 , name: 'Webbrain', group: 'front-end', date: '21.21.2002', addedDate: '21.04.2404', admin: 'Admin', label: 'Guruh / Fan',
            days: 'Toq Kunlar',
            phone:'+998 99 555-55-55'
        },
        {
            id:4 , name: 'Webbrain', group: 'front-end', date: '21.21.2002', addedDate: '21.04.2404', admin: 'Admin', label: 'Dars kuni va vaqti',
            days: 'Juft Kunlar', lavel: 'Junior',
            phone:'+998 99 555-55-55'
        },
        {
            id: 5, name: 'Webbrain', group: 'front-end', date: '21.21.2002', addedDate: '21.04.2404', admin: 'Admin', label: 'Qo’shilgan sana',
            days: 'Juft Kunlar', lavel: 'Beginner',
            phone:'+998 99 555-55-55'
        },
        {
            id:6 , name: 'Webbrain', group: 'front-end', date: '21.21.2002', addedDate: '21.04.2404', admin: 'Admin', label: 'Moderator',
            days: 'Toq Kunlar', lavel: 'Advanced',
            phone:'+998 99 555-55-55'
        }
    ];
    const onEdit = (e, res) => {
        e.stopPropagation()
        setModal(!modalOpen)
        setModalProps(res)

    }
    const onMove = (e) => {

    }
    const headCells = [
        { id: 'name', label: 'O’quvchining ismi' },
        { id: 'group', label: 'Guruh / Fan' },
        { id: 'date', label: 'Dars kuni va vaqti' },
        { id: 'addedDate', label: 'Qo’shilgan sana' },
        { id: 'admin', label: 'Moderator'},
        { id: 'action', label:'',render:(res)=>( 
        <Action>
        <Action.Edit onClick={(e)=>onEdit(e,res)}/>
        <Action.Move onClick={onMove}/>
        </Action>
        )}
    ]
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
                <GenericButton type='filter' onClick={() => setOpen(!open)} >Filter</GenericButton>
                <GenericButton type='import'>import</GenericButton>
                <GenericButton type='add' onClick={onToggleModal} >Talaba Qo'shish</GenericButton>
            </BreadCrumbs>
            <GenericTable open={open} headCells={headCells} rows={rows}>
                <LocalizationProvider dateAdapter={AdapterDayjs} style={{ top: '-16px' }}>
                    <DatePicker
                        style={{ padding: '0', width: '270px', flex: '0 0 auto' }}
                    />
                </LocalizationProvider>
                <GenericSelect data={data1} />
                <GenericSelect data={data1} />
                <GenericSelect data={data1} />
            </GenericTable>
        </Container>
    )
}
export default NewStudent