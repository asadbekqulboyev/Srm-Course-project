import React from 'react'
import SubTitle from '../Generics/SubTitle'
import { Container,Wrapper ,Card,Section,Plus,Counter,Arrow} from './style'
import Title from '../Generics/Title'
import { privateData } from '../../utils/analitics'
function Analitika() {
  return (
    <Container>
        <Title type='primary'>Analitika</Title>
        <Wrapper mt={16} gap={24}>
        {privateData?.map((value)=>{
          const {icon:Icon}=value
          const {img:Img}=value
          return(
            <Card key={value.id} gap={24} title={value.title}>
              <Section gap={24}>
              <Section gap={20}  title={value.title}>
                  <Icon className='icon'/> 
                  <Title>
                   { value.title}
                  </Title> 
                </Section>
                <Plus title={value.title}/>
              </Section>
              <Section>
              <Section gap={20}>
                  <Title type='primary'>
                  <Arrow/> <Counter >{value.count}</Counter>
                  </Title> 
                </Section>
                <Img />
              </Section>
            </Card>
          )
        })}
        </Wrapper>
        <SubTitle mt={24}> 
        Ijtimoiy tarmoqlar
        </SubTitle>
        <Wrapper mt={16}>
        
        </Wrapper>
    </Container>
  )
}

export default Analitika