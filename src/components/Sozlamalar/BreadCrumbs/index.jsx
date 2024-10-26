import { Container, Arrow } from "./style"
import Title from "../../Generics/Title"
import { useLocation } from "react-router-dom"
import SubTitle from "../../Generics/SubTitle"
// import SubTitle from "../SubTitle"
function BreadCrumbs({children}) {
  const location = useLocation();
  return (
    <Container >
      {
        
        
      location?.state?.parent?.map((value) => {
        console.log(location)
        return (
          <Title key={value}>{value} <Arrow /></Title>
        )
      })}
      <SubTitle>{location.state?.child}</SubTitle>
        <div style={{display:'flex',marginLeft:'auto',gap:'16px'}}>
          {children}
        </div>
    </Container>
  )
}

export default BreadCrumbs