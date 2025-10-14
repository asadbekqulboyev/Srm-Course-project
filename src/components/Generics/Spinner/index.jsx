import React from 'react'
import { createPortal } from 'react-dom'
import { Container } from './style'

const Spinner = () => {
  return createPortal (
    <Container>
        <img src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif" alt="" />
    </Container>,document.getElementById('modal')
  )
}

export default Spinner