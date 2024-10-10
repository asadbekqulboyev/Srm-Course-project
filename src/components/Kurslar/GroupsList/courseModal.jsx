import Modal from '../../Generics/Modal'
import GenriscInput from '../../Generics/Input'
import SubTitle from '../../Generics/SubTitle'
import GenericSelect from '../../Generics/Select'
import Title from '../../Generics/Title'
import { Flex, Input, Section } from './style'
import MultiSelect from './MultipleSelect'
const CourseModal = (props) => {
  const { data } = props

  const date1 = [
    {
      title: 'Front End', name: ''
    }
  ]
  return (
    <Modal {...props}>
      <Title>Kurs Qo'shish</Title>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Darajalara</SubTitle>
        <GenericSelect width='100% !important' data={date1} className='Input' value={data?.lavel} />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Hafta Kunlari</SubTitle>
        <MultiSelect />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Boshlanish vaqti</SubTitle>
        <GenriscInput color='#253E5F' className='Input' borderRadius={8} value={data?.name} />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Tugash vaqti</SubTitle>
        <GenriscInput color='#253E5F' className='Input' borderRadius={8} value={data?.name} />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Ustozlar</SubTitle>
        <MultiSelect />
      </label>
    </Modal>
  )
}

export default CourseModal