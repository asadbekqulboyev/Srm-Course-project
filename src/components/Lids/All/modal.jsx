import Modal from '../../Generics/Modal'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import GenriscInput from '../../Generics/Input'
import SubTitle from '../../Generics/SubTitle'
import GenericSelect from '../../Generics/Select'
import Title from '../../Generics/Title'
import { useEffect, useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import { groups } from '../../../utils/groups'
import moment from 'moment';

const AllLidsModal = (props) => {
  const [state,setState]=useState({
    name:'',
    surname:'',
    group:'',
    added_date:``,
    field:"",
    phone:'',
    status:'',
    parents:'',
    admin:'Adminboy',
    type:'ofline',
    payment:0,
    time:''
  
  })
  const request = useFetch()
  const {data} =props
  useEffect(()=>{
    if(data){
      setState({...state,...data})
    }
  })
  const onChangeFilter = ({target})=>{
    const{value,name}=target;
    setState({...state,[name]:value})
  }
  const onSave = ()=>{
    request('/tabs/students',{
      method:'POST',
      headers:{
        'Content-Type':'aplication/json'
      },
      body:{state,id:Date.now()},
    }).then(()=>{
      props.onClose()
    })  
  }
  return (
    <Modal {...props} onSave={onSave}>
      <Title>Lid Qo'shish</Title>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Ismingiz</SubTitle>
      <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} name='name' onChange={onChangeFilter} /> 
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Familyangiz</SubTitle>
      <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} name='surname' onChange={onChangeFilter} /> 
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Telefon raqamingiz:</SubTitle>
      <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} name='phone' onChange={onChangeFilter} /> 
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Ota onangiz:</SubTitle>
      <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} name='phone' onChange={onChangeFilter} /> 
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Yo'nalishni tanlang</SubTitle>
      <GenericSelect width='100% !important' data={groups}  className='Input' defaultValue={state?.group} name='field' onChange={onChangeFilter} />
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Guruh Nomi</SubTitle>
      <GenericSelect width='100% !important' data={groups}  className='Input' defaultValue={state?.group} name='group' onChange={onChangeFilter} />
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Dars Vaqti</SubTitle>
       <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} name='parents' onChange={onChangeFilter} /> 
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Kun tanlang</SubTitle>
       <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} name='days' onChange={onChangeFilter} /> 
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Izoh</SubTitle>
      <LocalizationProvider dateAdapter={AdapterDayjs} sx={{minWidth:'1900px' }}>
      <DatePicker style={{ padding: '0',flex: '0 0 auto' }} />
      </LocalizationProvider>   
     </label>
    </Modal>
  )
}

export default AllLidsModal