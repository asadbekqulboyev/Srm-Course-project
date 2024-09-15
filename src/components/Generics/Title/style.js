import styled from "styled-components";

const Container  = styled.div`
display:flex;
font-size: 20px;
font-weight: ${({type})=>(!type || type=='primary'?400:600)};
line-height: 28px;
text-align: left;

` 

export {Container}