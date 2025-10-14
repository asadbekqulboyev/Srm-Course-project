// import React from 'react'
// import  {Input } from '../../Navbar/style'

// const GenriscInput = (props) => {
//     const {iconLeft,iconRight}=props
//   return (
//     <React.Fragment {...props}>  {iconLeft && iconLeft}
//         <Input {...props}  />
//         {iconRight && iconRight}
//     </React.Fragment>
        
//   )
// }

// export default GenriscInput
import { Container, Input } from "./style";

export const GenericInput = (props) => {
  const { iconLeft, iconRight } = props;
  return (
    <Container {...props}>
      {iconLeft && iconLeft}
      <Input {...props} />
      {iconRight && iconRight}
    </Container>
  );
};

export default GenericInput;
