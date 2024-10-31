import { Container, Arrow } from "./style"
import Title from "../../Generics/Title"
import { useLocation } from "react-router-dom"
import SubTitle from "../../Generics/SubTitle"
import { useEffect, useState } from "react"
// import SubTitle from "../SubTitle"
function BreadCrumbs({children}) {
  const [path,setPath]=useState();
  const location = useLocation();
  useEffect(()=>{
    setPath(typeof location.state.parent=='string' ? location.state.parent.split(" "):location.state.parent)
  },[])
  return (
    <Container >
      {
        
        
      path?.map((value) => {
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