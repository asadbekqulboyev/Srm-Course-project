import Modal from '../../Generics/Modal'
import GenriscInput from '../../Generics/Input'
import SubTitle from '../../Generics/SubTitle'
import GenericSelect from '../../Generics/Select'
import Title from '../../Generics/Title'
import MultiSelect from '../GroupsList/MultipleSelect'
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
       <SubTitle mt={16} mb={8} color='#929FAF'>Kursning yo'nalishi</SubTitle>
      <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} /> 
      </label>
      <label>
      <SubTitle mt={16} mb={8} color='#929FAF'>Filiallar</SubTitle>
      <MultiSelect/>
      </label>
      
      

    </Modal>
  )
}

export default AllLidsModal