import Modal from '../../../Generics/Modal'
import GenriscInput from '../../../Generics/Input'
import SubTitle from '../../../Generics/SubTitle'
import Title from '../../../Generics/Title'
const KategoryModal = (props) => {
  const {data} =props
  
  return (
    <Modal {...props}>
      <Title>Lid Qo'shish</Title>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Kategoriya turi</SubTitle>
      <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} /> 
      </label>
      
      
    </Modal>
  )
}

export default KategoryModal