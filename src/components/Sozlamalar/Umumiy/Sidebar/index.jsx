import React from 'react'
import { Body, Container, Link, Sidebar, Wrapper } from './style'
import { sozlamalar } from '../../../../utils/sozlamalar'
import { Outlet } from 'react-router-dom'

const UmumiySidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar>{
          sozlamalar.map((item) => {
            const { icon: Icon } = item
            return (
              <Link key={item.id}
                to={`/sozlamalar/umumiy/${item.path}`}
                state={{ parent: ['Sozlamalar', 'Umumiy'], child: item.title }}
              >
                <Icon />
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