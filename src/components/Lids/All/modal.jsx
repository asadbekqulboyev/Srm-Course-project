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
import { Box } from '@mui/material';
import dayjs from 'dayjs';

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
    admin:'',
    type:'',
    payment:0,
    time:''
  
  })
  const request = useFetch()
  const {data} =props
  console.log(data);
  
  useEffect(()=>{
    if(data){
      setState({...state,...data})
    }
  },[data])
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
      <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.surname} name='surname' onChange={onChangeFilter} /> 
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Telefon raqamingiz:</SubTitle>
      <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.phone} name='phone' onChange={onChangeFilter} /> 
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Ota onangiz:</SubTitle>
      <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.parents} name='parents
' onChange={onChangeFilter} /> 
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Yo'nalishni tanlang</SubTitle>
      <GenericSelect width='100% !important' data={groups}  className='Input' defaultValue='front end' name='field' onChange={onChangeFilter} />
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Guruh Nomi</SubTitle>
       <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.group} name='group
' onChange={onChangeFilter} /> 
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Dars Vaqti</SubTitle>
       <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} name='parents' onChange={onChangeFilter} /> 
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Kun tanlang</SubTitle>
       <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.days} name='days' onChange={onChangeFilter} /> 
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Sana</SubTitle>
      <Box sx={{ width: '100%' }}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker sx={{ width: '100%' }} defaultValue={dayjs('2023-11-11')}/>
  </LocalizationProvider>
</Box>
     </label>
    </Modal>
  )
}

export default AllLidsModal