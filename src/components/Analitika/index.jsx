import React from 'react'
import SubTitle from '../Generics/SubTitle'
import { Container,Wrapper ,Card} from './style'
import Title from '../Generics/Title'
function Analitika() {
  return (
    <Container>
        <Title>Analitika</Title>
        <Wrapper gap={24}>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        </Wrapper>
        <SubTitle mt={24}> 
        Ijtimoiy tarmoqlar
        </SubTitle>
        <Wrapper>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        </Wrapper>
    </Container>
  )
}

export default Analitika