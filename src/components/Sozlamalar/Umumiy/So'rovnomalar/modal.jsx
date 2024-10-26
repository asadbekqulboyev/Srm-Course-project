import Modal from '../../../Generics/Modal'
import GenriscInput from '../../../Generics/Input'
import SubTitle from '../../../Generics/SubTitle'
import GenericSelect from '../../../Generics/Select'
import Title from '../../../Generics/Title'
const SorovnomaModal = (props) => {
  const {data} =props
  
  return (
    <Modal {...props}>
      <Title>So'rovnoma Qo'shish</Title>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Nomi</SubTitle>
      <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} /> 
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Manzil</SubTitle>
       <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} /> 
      </label>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Guruhlar Sig'imi</SubTitle>
       <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} /> 
      </label>
    </Modal>
  )
}

export default SorovnomaModal