import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Profile from './profile'
import { Body, Container, Side, Wrapper, Logo, LogOut, Menu, MenuItem, Arrow, ChildWrapper } from './style'
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
  const onClickParent = (id) => {
    if (open.includes(id)) {

      let data = open.filter((val) => val !== id)
      setOpen(data)
    } else {
      setOpen([...open, id])
    }
    console.log(open);

  }
  return (
    <Container>
      <Side>
        <Logo onClick={logoClick}>Crm webbrain</Logo>
        <Profile />
        <Menu>
          {
            sidebar.map((parent) => {
              const { icon: Icon } = parent
              // console.log(Icon);
              let actives = open.includes(parent.id)
              return (
                <>
                  <MenuItem key={parent.id} onClick={() => onClickParent(parent.id)}>
                    <MenuItem.Title>
                      {Icon && <Icon />}
                      {parent.title}
                    </MenuItem.Title>
                    {parent?.children?.length && <Arrow active={actives} />}
                  </MenuItem>
                  <ChildWrapper active={actives}>
                    {parent?.children?.map((child) => {
                      return (
                        <MenuItem key={child.id}>
                          <MenuItem.Title> {child?.title}</MenuItem.Title>
                        </MenuItem>)
                    })}
                  </ChildWrapper>

                </>

              )
            })
          }

        </Menu>

        <LogOut onClick={logOutClick}>Chiqish</LogOut>
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