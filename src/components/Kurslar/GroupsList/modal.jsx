import Modal from '../../Generics/Modal'
import GenriscInput from '../../Generics/Input'
import SubTitle from '../../Generics/SubTitle'
import GenericSelect from '../../Generics/Select'
import Title from '../../Generics/Title'
import { Devider } from '../../HR/Hodimlar/style'
import { Checkbox } from '@mui/material'
import { Flex, Input, Section } from './style'
const AllLidsModal = (props) => {
  const { data } = props

  const date1 = [
    {
      title: 'Front End', name: ''
    }
  ]
  return (
    <Modal {...props}>
      <Title>Lid Qo'shish</Title>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Talabaning ismi</SubTitle>
        <GenriscInput color='#253E5F' className='Input' borderRadius={8} value={data?.name} />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Telefon Raqami</SubTitle>
        <GenericSelect width='100% !important' data={date1} className='Input' value={data?.lavel} />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Jinsi</SubTitle>
        <GenericSelect width='100% !important' data={date1} className='Input' value={data?.days} />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>O'qtuvchi</SubTitle>
        <GenericSelect width='100% !important' data={date1} className='Input' value={data?.date} />
      </label>
      <label>
        <SubTitle mt={16} mb={8} color='#929FAF'>Foizni tanlang</SubTitle>
        <GenericSelect width='100% !important' data={date1} className='Input' value={data?.date} />
      </label>
      <Devider>
        <Devider.Filial g='10'>
          <Flex>
            <SubTitle style={{ flex: 1.6 }} color='#929FAF'>Filiallar</SubTitle>
            <SubTitle style={{ flex: 1.4 }} color='#929FAF'>Narxi</SubTitle>
          </Flex>
          <Flex g='10px'>
            <Flex>
              <Section><Checkbox defaultChecked={true} />Chilonzor </Section>
              <label style={{ width: '100%' }}>
                <Input type='number' />
              </label>
            </Flex>
            <Flex>
              <Section><Checkbox defaultChecked={true} />Namangan </Section>
              <label style={{ width: '100%' }}>
                <Input type='number' />
              </label>
            </Flex>
            <Flex>
              <Section><Checkbox defaultChecked={true} />Chilonzor </Section>
              <label style={{ width: '100%' }}>
                <Input type='number' />
              </label>
            </Flex>
          </Flex>


        </Devider.Filial>

      </Devider>

    </Modal>
  )
}

export default AllLidsModal