import Modal from '../../Generics/Modal'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import GenriscInput from '../../Generics/Input'
import SubTitle from '../../Generics/SubTitle'
import GenericSelect from '../../Generics/Select'
import Title from '../../Generics/Title'
import { useEffect, useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import { groups } from '../../../utils/groups'
// import moment from 'moment';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import { initialState } from '../../../context/students/reducer';

const AllLidsModal = (props) => {
  const request = useFetch()
  const [state, setState] = useState({
    name: '',
    surname: '',
    group: '',
    added_date: '',
    field: "",
    phone: '',
    status: false,
    parents: '',
    admin: '',
    type: '',
    payment: 0,
    time: ''

  })

  const { data } = props
  
  useEffect(() => {
    if (data) {
      setState({ ...state, ...data })
    }
  console.log(props);

  }, [data])

  const onChangeFilter = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value })
  }
  const onSave = () => {
    // save
    console.log(data.id);

    if (data?.id) {
      request(`/tabs/students/id/${data.id}`, {
        method: 'PATCH',
        body: state,
      }).then(() => {
        props.reload()
        onClose(setState(initialState))
      })
    }
    //  edit 
    else
      request('/tabs/students', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'aplication/json'
        },
        body: { state, id: Date.now() },
      }).then(() => {
        props.onClose(setState(initialState))
      })
  }
  const onClose = () => {
    props?.onClose()
  }
  return (
    <Modal {...props} onSave={onSave} onClose={onClose}>
      <Title>Lid Qo'shish</Title>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Ismingiz</SubTitle>
        <GenriscInput color='#253E5F' className='Input' borderRadius={8} value={state?.name} name='name' onChange={onChangeFilter} />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Familyangiz</SubTitle>
        <GenriscInput color='#253E5F' className='Input' borderRadius={8} value={state?.surname} name='surname' onChange={onChangeFilter} />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Telefon raqamingiz:</SubTitle>
        <GenriscInput color='#253E5F' className='Input' borderRadius={8} value={state?.phone} name='phone' onChange={onChangeFilter} />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Ota onangiz:</SubTitle>
        <GenriscInput color='#253E5F' className='Input' borderRadius={8} value={state?.parents} name='parents' onChange={onChangeFilter} />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Yo'nalishni tanlang</SubTitle>
        <GenericSelect width='100% !important' data={groups} className='Input' value={state?.field?.toLowerCase()} name='field' />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Guruh Nomi</SubTitle>
        <GenriscInput color='#253E5F' className='Input' borderRadius={8} value={state?.group} name='group' onChange={onChangeFilter} />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Dars Vaqti</SubTitle>
        <GenriscInput color='#253E5F' className='Input' borderRadius={8} value={state?.time} name='time' onChange={onChangeFilter} />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Kun tanlang</SubTitle>
        <GenriscInput color='#253E5F' className='Input' borderRadius={8} value={state?.days} name='days' onChange={onChangeFilter} />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Sana</SubTitle>
        <Box sx={{ width: '100%' }}>
          <LocalizationProvider name='added_date' dateAdapter={AdapterDayjs}>
            <DatePicker sx={{ width: '100%' }} name='added_date' defaultValue={dayjs(state?.added_date)} />
          </LocalizationProvider>
        </Box>
      </label>
    </Modal>
  )
}

export default AllLidsModal