import React from 'react'
import { Container } from './style'
import { useLocation } from 'react-router-dom'

export const  Generics = () =>{
  const location = useLocation()
  return (
    <Container>
      {location.pathname}
      bnhnihyj
    </Container>
  )
}
export default Generics