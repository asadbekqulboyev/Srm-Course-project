import Modal from '../../Generics/Modal'
import GenriscInput from '../../Generics/Input'
import SubTitle from '../../Generics/SubTitle'
import GenericSelect from '../../Generics/Select'
import Title from '../../Generics/Title'
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
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Yo'nalishni tanlang</SubTitle>
      <GenericSelect width='100% !important'data={date1}  className='Input' defaultValue={data?.group}/>
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Darajangizni tanlang</SubTitle>
      <GenericSelect width='100% !important'data={date1}  className='Input' value={data?.lavel}/>
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Kun tanlang</SubTitle>
      <GenericSelect width='100% !important'data={date1}  className='Input' value={data?.days}/>
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Boshlash sanasini tanlang</SubTitle>
      <GenericSelect width='100% !important'data={date1}  className='Input' value={data?.date}/>
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Izoh</SubTitle>
      <GenriscInput color='#253E5F' className='Input'  borderRadius={8}/> 
      </label>
      

    </Modal>
  )
}

export default AllLidsModal