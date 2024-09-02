import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Profile from './profile'
import { Body, Container, Side, Wrapper, Logo, LogOut, Menu, MenuItem, Arrow, ChildWrapper ,ExitIcon} from './style'
import Navbar from '../Navbar'
import sidebar from '../../utils/sidebar'
import { useState } from 'react'
function Sidebar() {
  const [open, setOpen] = useState([])
  const navigate = useNavigate()
  const logoClick = () => {
    navigate('/');
  }
  const logOutClick = () => {
    navigate('/');
  }
  const onClickParent = ({id,children,path },e) => {
    if (open?.includes(id)) {
      let data = open.filter((val) => val !== id)
      setOpen(data)
    } else {
      setOpen([...open, id])
    }
    
    if (!children) {
      e.preventDefault();
      navigate(path)
    }
  }
  return (
    <Container>
      <Side>
        <Logo onClick={logoClick}>Crm webbrain</Logo>
        <Profile />
        <Menu>
          {sidebar.map((parent) => {
              const { icon: Icon } = parent
              let active =open?.includes(parent.id)
              return (
                <div key={parent.id}>
                  <MenuItem  onClick={(e) => onClickParent(parent,e)} >
                    <MenuItem.Title>
                      {Icon && <Icon />}
                      {parent.title}
                    </MenuItem.Title>
                    {parent?.children?.length && <Arrow active={active} />}
                  </MenuItem>
                  <ChildWrapper active={active}>
                    {parent?.children?.map((child) => {
                      return (
                        <MenuItem key={child.id} to={child?.path}>
                          <MenuItem.Title> {child?.title}</MenuItem.Title>
                        </MenuItem>
                      )
                    })}
                  </ChildWrapper>
                
                </div>
               
              )
            })
          }
        </Menu>
        <LogOut onClick={logOutClick}><ExitIcon/> Chiqish</LogOut>
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