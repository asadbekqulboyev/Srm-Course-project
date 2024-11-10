import React from 'react'
import Time from './time'
import Input from '../Generics/Input'
import { Container ,InputWrapper,SearchIcon,Section} from './style'
import DateTimePicker from './DateTimePicker'
import GenericSelect from '../Generics/Select'
function Navbar() {
  const data = [
    {value:'uz',title:"O'zbekcha"},
    {value:'ru',title:"Russian"},
    {value:'en',title:"English"},
  ]
  return (
    <Container>
      <InputWrapper>
      <Input type='text' placeholder='Search' style={{borderLeft:'0px',borderRadius:'0 8px 8px 0px'}} borderRadius={8} iconLeft={<SearchIcon/>}/>
      </InputWrapper>
      <Section>
     
      <Time /> 
      <DateTimePicker/>
      <GenericSelect data={data} label='language'/>
      
      </Section>
    </Container>
  )
}

export default Navbar