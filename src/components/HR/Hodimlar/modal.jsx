import Modal from '../../Generics/Modal'
import GenriscInput from '../../Generics/Input'
import SubTitle from '../../Generics/SubTitle'
import GenericSelect from '../../Generics/Select'
import Title from '../../Generics/Title'
import { Devider } from './style'
import { Checkbox } from '@mui/material'
const AllLidsModal = (props) => {
  const {data} =props
  
  const date1= [
    {
      title:'Front End',name:''
    }
  ]
  return (
    <Modal {...props}>
      <Title>Lid Qo'shish</Title>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Talabaning ismi</SubTitle>
      <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} /> 
      </label>
      {/* <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Yo'nalishni tanlang</SubTitle>
      <GenericSelect width='100% !important'data={date1}  className='Input' defaultValue={data?.group}/>
      </label> */}
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Telefon Raqami</SubTitle>
      <GenericSelect width='100% !important'data={date1}  className='Input' value={data?.lavel}/>
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Jinsi</SubTitle>
      <GenericSelect width='100% !important'data={date1}  className='Input' value={data?.days}/>
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>O'qtuvchi</SubTitle>
      <GenericSelect width='100% !important'data={date1}  className='Input' value={data?.date}/>
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Foizni tanlang</SubTitle>
      <GenericSelect width='100% !important'data={date1}  className='Input' value={data?.date}/>
      </label>
      <Devider>
        <Devider.Filial>
        <SubTitle color='#929FAF'>Filiallar</SubTitle>
        <Devider><Checkbox defaultChecked={true} />  Chilonzor
        </Devider>
        <Devider><Checkbox defaultChecked={false} /> Namangan 
        </Devider>
        <Devider><Checkbox defaultChecked={true} />  Ganga
        </Devider>
        <Devider><Checkbox defaultChecked={true} />  Beruniy
        </Devider>
        </Devider.Filial>
        <Devider.Role>
        <SubTitle color='#929FAF'>Filiallar</SubTitle>
        
          <GenericSelect mt={12} width='100% !important'data={date1}  className='Input' value={data?.date}/>
      <GenericSelect mt={12} width='100% !important'data={date1}  className='Input' value={data?.date}/>
      <GenericSelect mt={12} width='100% !important'data={date1}  className='Input' value={data?.date}/>
      <GenericSelect mt={12} width='100% !important'data={date1}  className='Input' value={data?.date}/>
        
      

        </Devider.Role>
      </Devider>

    </Modal>
  )
}

export default AllLidsModal