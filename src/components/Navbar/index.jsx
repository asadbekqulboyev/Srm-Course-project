import React from 'react'
import Time from './time'
import SelectSection from './Select'
import Input from '../Generics/Input'
import { Container ,InputWrapper,SearchIcon,Section} from './style'
import DateTimePicker from './DateTimePicker'
function Navbar() {
  return (
    <Container>
      <InputWrapper>
      <Input placeholder='Search' iconLeft={<SearchIcon/>}/>
      </InputWrapper>
      <Section>
     
      <Time /> 
      <DateTimePicker/>
      <SelectSection/>
      
      </Section>
    </Container>
  )
}

export default Navbar