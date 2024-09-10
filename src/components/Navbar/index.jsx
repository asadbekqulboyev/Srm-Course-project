import React from 'react'
import Time from './time'
import SelectSection from './Select'
import { Container ,InputWrapper,Input,SearchIcon,Section} from './style'
import DateTimePicker from './DateTimePicker'
function Navbar() {
  return (
    <Container>
      <InputWrapper>
      <SearchIcon/>
      <Input placeholder='Search'/>
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