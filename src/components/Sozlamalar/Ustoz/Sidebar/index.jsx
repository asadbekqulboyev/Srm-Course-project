import { Body, Container, Link, Sidebar, Wrapper } from './style'
import { ustoz} from '../../../../utils/sozlamalar'
import { Outlet } from 'react-router-dom'

const UstozSidebar = () => {
  return (
    <Container>
      <Wrapper>
      <Sidebar>{
          ustoz.map((item) => {
            const { icon: Icon } = item
            return (
              <Link key={item.id}
                to={`/sozlamalar/ustoz/${item?.path}`}
                state={{ parent: ['Sozlamalar', 'Manager'], child: item.title }}
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

export default UstozSidebar;