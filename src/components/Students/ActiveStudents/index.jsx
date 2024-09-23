import { useState } from 'react'
import { GenericTable } from "../../Generics/Table"
import { Action, Container } from "./style"
import BreadCrumbs from "../../Generics/BreadCrumbs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";
import GenericSelect from '../../Generics/Select';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
export const ActiveStudents = () => {
    const [open, setOpen] = useState(false)
    const [modalOpen, setModal] = useState(false)
    const [modalProps, setModalProps] = useState({})
    const onEdit = (e, res) => {
        e.stopPropagation()
        setModal(!modalOpen)
        setModalProps(res)

    }
    const headCells = [
        { id: 'name', label: 'O’quvchining ismi' },
        { id: 'phone', label: 'Telefon' },
        {id:'completed' ,label:'Status',render:(res)=><span style={{color:res?.completed?'#52C41A':'#F5222D'}}>{res?.completed?'Tugallagan':'Tugallamagan'}
        </span>},
        { id: 'group', label: 'Guruh / Fan' },
        { id: 'balance', label: 'Balans',render:(res)=>{
            let active= res?.balance?.includes("-")
            return(
                <span  style={{background:active?'red':'white', color:active?'white':'green' ,padding:'4px 10px',borderRadius:'8px'}}>
                    {res?.balance} {' '}
                </span>
               
            )
        } },
        { id: 'date', label: 'Dars kuni va vaqti' },
        { id: 'addedDate', label: 'Qo’shilgan sana' },
        { id: 'admin', label: 'Moderator'},
        { id: 'action', label:'',render:(res)=>( 
        <Action>
        <Action.Edit onClick={(e)=>onEdit(e,res)}/>
        </Action>
        )},
        

    ]
    const rows = [
        {
            id: 'name', 
            name: 'Webbrain', 
            group: 'front-end', 
            date: '21.21.2002', 
            addedDate: '21.04.2404', 
            admin: 'Admin', 
            label: 'O’quvchining ismi',
            days: 'Toq Kunlar', 
            lavel: 'Beginner',
            phone: '+998 99 555-55-55',
            balance:'200,000',
            parent:'Eshmat Toshmat',
            completed:false
        },
        {
            id: 'phone', 
            name: 'Webbrain', 
            group: 'front-end', 
            date: '21.21.2002', 
            addedDate: '21.04.2404', 
            admin: 'Adminwjbefdiuh3vr', 
            label: 'Telefon raqam',
            days: 'Toq Kunlar', 
            lavel: 'Beginner',
            phone: '+998 99 555-55-55',
            balance:'-200,000',
            parent:'Eshmat Toshmat',            
            completed:false

        },
        {
            id: 'group', 
            name: 'Webbrain',
            group: 'front-end', 
            date: '21.21.2002', 
            addedDate: '21.04.2404', 
            admin: 'Admin', 
            label: 'Guruh / Fan',
            days: 'Toq Kunlar',
            phone: '+998 99 555-55-55',
            balance:'-200,000',
            completed:false,
            parent:'Eshmat Toshmat'
        },
        {
            id: 'date', 
            name: 'Webbrain', 
            group: 'front-end', 
            date: '21.21.2002', 
            addedDate: '21.04.2404', 
            admin: 'Admin', 
            label: 'Dars kuni va vaqti',
            days: 'Juft Kunlar', 
            lavel: 'Junior',
            phone: '+998 99 555-55-55',
            balance:'-200,000',
            parent:'Eshmat Toshmat',
            completed:false
        },
        {
            id: 'addedDate', 
            name: 'Webbrain', 
            group: 'front-end', 
            date: '21.21.2002', 
            addedDate: '21.04.2404', 
            admin: 'Admin', 
            label: 'Qo’shilgan sana',
            days: 'Juft Kunlar', 
            lavel: 'Beginner',
            phone: '+998 99 555-55-55',
            balance:'-200,000',
            completed:false,
            parent:'Eshmat Toshmat'
        },
        {
            id: 'admin',
            name: 'Webbrain',
            group: 'front-end',
            date: '21.21.2002',
            addedDate: '21.04.2404',
            admin: 'Admin',
            label: 'Moderator',
            days: 'Toq Kunlar',
            lavel: 'Advanced',
            phone: '+998 99 555-55-55',
            balance:'100,000',
            parent:'Eshmat Toshmat',
            completed:false
        }
    ];
    const onToggleModal = () => {
        setModal(!modalOpen)
        setModalProps(null)
    }
    const onSave = () => {
    }
    const onMove = () => {
    }
    const data1 = [

    ]
    return (

        <Container>
            <AllLidsModal open={modalOpen} data={modalProps} onClose={onToggleModal} onSave={onSave} />
            <BreadCrumbs>
                <GenericButton type='filter' onClick={() => setOpen(!open)} >Filter</GenericButton>
                <GenericButton type='import'>import</GenericButton>
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
export default ActiveStudents