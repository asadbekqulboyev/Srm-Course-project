import React from 'react'
import { Container } from './style'

const SubTitle = (props) => {
  return (
    <Container {...props}>{props.children}</Container>
  )
}

export default SubTitle
