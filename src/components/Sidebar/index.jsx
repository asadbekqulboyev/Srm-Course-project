import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Profile from './profile'
import { Body, Container, Side,Wrapper,Logo,LogOut} from './style'
import Navbar from '../Navbar'

function Sidebar() {
  const navigate = useNavigate()
  const logoClick = ()=>{
    navigate('/');
  }
  return (
    <Container>
      <Side>
        <Logo onClick={logoClick}>Crm webbrain</Logo>
        <Profile/>
        <LogOut>Chiqish</LogOut>
        
      </Side>
      

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