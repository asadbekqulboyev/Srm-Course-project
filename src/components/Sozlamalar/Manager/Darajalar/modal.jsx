import Modal from '../../../Generics/Modal'
import GenriscInput from '../../../Generics/Input'
import SubTitle from '../../../Generics/SubTitle'
import Title from '../../../Generics/Title'
const DarajalarModal = (props) => {
  const {data} =props
  
  return (
    <Modal {...props}>
      <Title>Lid Qo'shish</Title>
      <label>
       <SubTitle mt={16} mb={8} color='#929FAF'>Nomi</SubTitle>
      <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} /> 
      </label>
      <div style={{display:'flex',justifyContent:'space-between',gap:'10px' }}>
<label style={{flex:1}}>
       <SubTitle mt={16} mb={8} color='#929FAF'>Yarim Stavka</SubTitle>
       <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} /> 
      </label>
      <label style={{flex:1}}>
       <SubTitle mt={16} mb={8} color='#929FAF'>Bir Stavka</SubTitle>
       <GenriscInput color='#253E5F' className='Input'  borderRadius={8} value={data?.name} /> 
      </label>
      </div>
      
    </Modal>
  )
}

export default DarajalarModal