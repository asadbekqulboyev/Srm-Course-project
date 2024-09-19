import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Profile from './profile'
import { Body, Container, Side, Wrapper, Logo, LogOut, Menu, MenuItem, Arrow, ChildWrapper ,ExitIcon} from './style'
import Navbar from '../Navbar'
import sidebar from '../../utils/sidebar'
import { useState } from 'react'
function Sidebar() {
  const [open, setOpen] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    const path=JSON.parse(localStorage.getItem('open'))
    setOpen(path||[])
  },[])
  const logoClick = () => {
    navigate('/');
  }
  const logOutClick = () => {
    navigate('/login');
  }
  const onClickParent = ({id,children,path,title },e) => {
    e.preventDefault();
    if (open?.includes(id)) {
      let data = open.filter((val) => val !== id)
      localStorage.setItem('open',JSON.stringify(data))
      setOpen(data)
    } else {
      localStorage.setItem('open',JSON.stringify([...open, id]))
      setOpen([...open, id])
    }
    
    if (!children) {
     
      navigate(path,{state:{parent:title}})
    }
  }
  const onClickChild = (parent, child,path,e)=>{
    e.preventDefault()
    navigate(path,{state:{parent,child}})
  }
  return (
    <Container>
      <Side>
        <Logo onClick={logoClick}>Crm webbrain</Logo>
        <Profile />
        <Menu>
          {sidebar.map((parent) => {
              const { icon: Icon } = parent
              const active =open?.includes(parent.id)
              const activePath= location.pathname?.includes(parent?.path)
              return (
                <React.Fragment key={parent.id}>
                  <MenuItem  onClick={(e) => onClickParent(parent,e)}  active={activePath.toString()}>
                    <MenuItem.Title>
                      {Icon && <Icon />}
                      {parent.title}
                    </MenuItem.Title>
                    {parent?.children?.length && <Arrow active={active.toString()} />}
                  </MenuItem>
                  
                  <ChildWrapper active={active.toString()}>
                    {parent?.children?.map((child) => {
                      return (
                        <MenuItem key={child.id} to={child?.path} active={(location.pathname==child.path).toString()}
                        onClick={(e)=>onClickChild(parent.title, child.title,child.path,e)}
                        >
                          <MenuItem.Title> {child?.title}</MenuItem.Title>
                        </MenuItem>
                      )
                    })}
                  </ChildWrapper>
                
                </React.Fragment>
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