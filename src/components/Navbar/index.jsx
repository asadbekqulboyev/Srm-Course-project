import React from 'react'
import Time from './time'
import SelectSection from './Select'
import { Container ,InputWrapper,Input,SearchIcon,Section} from './style'
function Navbar() {
  return (
    <Container>
      <InputWrapper>
      <SearchIcon/>
      <Input placeholder='Search'/>
      </InputWrapper>
      <Section>
      <SelectSection/>
      <Time />
      </Section>
    </Container>
  )
}

export default Navbar