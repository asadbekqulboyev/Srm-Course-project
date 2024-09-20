import { Container,Arrow } from "./style"
import Title from "../Title"
import { useLocation } from "react-router-dom"
import SubTitle from "../SubTitle"
function BreadCrumbs(props) {
    const location = useLocation()
  return (
    <Container title={location.state?.parent}>
        <Title>{location.state?.parent}</Title>
        {location.state?.child && <Arrow />}
        <SubTitle>{location.state?.child}</SubTitle>
        <div style={{display:'flex',marginLeft:'auto',gap:'16px'}}>
          {props.children}
        </div>
    </Container>
  )
}

export default BreadCrumbs