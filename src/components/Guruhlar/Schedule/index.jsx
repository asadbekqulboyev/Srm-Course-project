import {useState}from 'react'
import { GenericTable } from "../../Generics/Table"
import { Action, Container } from "./style"
import BreadCrumbs from "../../Generics/BreadCrumbs";
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";
import GenericSelect from '../../Generics/Select';
export const Schedule = () => {
    const [open, setOpen]= useState(false)
    const [modalOpen, setModal]= useState(false)
    const [modalProps,setModalProps]=useState({})
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
            completed:true
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
            completed:true
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
            completed:true,
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
            completed:true
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
            completed:true,
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
        { id: 'phone', label: 'Telefon' },
        { id:'completed' ,label:'Status',render:(res)=><span style={{color:res?.completed?'#52C41A':'#F5222D'}}>{res?.completed?'Tugallagan':'Tugallamagan'}
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
        <Action.Move onClick={onMove}/>
        </Action>
        )},
        

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
