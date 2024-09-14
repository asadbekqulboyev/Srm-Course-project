import React from 'react'
import { Container, Input } from '../../Navbar/style'

const GenriscInput = (props) => {
    const {iconLeft,iconRight}=props
  return (
    <>  {iconLeft && iconLeft}
        <Input {...props} />
        {iconRight && iconRight}
    </>
        
  )
}

export default GenriscInput