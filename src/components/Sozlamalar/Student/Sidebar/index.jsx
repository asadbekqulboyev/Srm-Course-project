import { Body, Container, Link, Sidebar, Wrapper } from './style'
import { student} from '../../../../utils/sozlamalar'
import { Outlet } from 'react-router-dom'

const StudentSidebar = () => {
  return (
    <Container>
      <Wrapper>
      <Sidebar>{
          student.map((item) => {
            const { icon: Icon } = item
            return (
              <Link key={item.id}
                to={`/sozlamalar/student/${item?.path}`}
                state={{ parent: ['Sozlamalar', 'Student'], child: item.title }}
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

export default StudentSidebar;