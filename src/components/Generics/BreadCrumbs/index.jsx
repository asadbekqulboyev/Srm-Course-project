import { Container,Arrow } from "./style"
import Title from "../Title"
import { useLocation } from "react-router-dom"
import SubTitle from "../SubTitle"
function BreadCrumbs() {
    const location = useLocation()
  return (
    <Container title={location.state?.parent}>
        <Title>{location.state?.parent}</Title>
        {location.state?.child && <Arrow />}
        <SubTitle>{location.state?.child}</SubTitle>
    </Container>
  )
}

export default BreadCrumbs