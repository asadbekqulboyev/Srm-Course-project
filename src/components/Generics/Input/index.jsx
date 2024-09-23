import React from 'react'
import  {Input } from '../../Navbar/style'

const GenriscInput = (props) => {
    const {iconLeft,iconRight}=props
  return (
    <React.Fragment {...props}>  {iconLeft && iconLeft}
        <Input {...props}  />
        {iconRight && iconRight}
    </React.Fragment>
        
  )
}

export default GenriscInput