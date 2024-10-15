import React from 'react'
import { Body, Container, Link, Sidebar, Wrapper } from './style'
import BreadCrumbs from '../../../Generics/BreadCrumbs'
import GenericButton from '../../../Generics/Button'
import { sozlamalar } from '../../../../utils/sozlamalar'
import { Outlet } from 'react-router-dom'

const UmumiySidebar = () => {
  return (
    <Container>
      <BreadCrumbs>
        <GenericButton type='add' >Yo'nalish Qo'shish</GenericButton>
      </BreadCrumbs>
      <Wrapper>
        <Sidebar>{
      sozlamalar.map((item)=>{
        const {icon:Icon }= item
        return(
          <Link key={item.id} to={`/sozlamalar/umumiy/${item.path}`}>
            <Icon/>
            {item.title}
          </Link>
        )
      })
      }</Sidebar>
        <Body>
          <Outlet />
          </Body>
      </Wrapper>


    </Container>
  )
}

export default UmumiySidebar