import React from 'react'
import { Outlet } from 'react-router-dom'
import { Body, Container, Side,Wrapper } from './style'
import Navbar from '../Navbar'

function Sidebar() {
  return (
    <Container>
      <Side>Side</Side>

      <Body>
        <Navbar>Navbar</Navbar>
        <Wrapper>
        <Outlet />

        </Wrapper>
      </Body>
    </Container>
  )
}

export default Sidebar