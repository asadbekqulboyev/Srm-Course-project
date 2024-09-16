import React from 'react'
import { Container, Counter } from './style'

const SubTitle = (props) => {
  
  return (
    <Container {...props}>{props.children}{props.count&& <Counter>
      {props.count}
    </Counter>
    }</Container>
  )
}

export default SubTitle
