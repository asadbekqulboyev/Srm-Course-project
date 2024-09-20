import React from 'react'
import { Container } from './style'
import { useLocation } from 'react-router-dom'
import BreadCrumbs from '../../components/Generics/BreadCrumbs'
export const  Generics = () =>{
  const location = useLocation()
  return (
    <Container>
      {/* <BreadCrumbs /> */}
      {location.pathname}
    </Container>
  )
}
export default Generics