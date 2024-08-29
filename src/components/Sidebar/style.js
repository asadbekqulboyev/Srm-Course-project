import styled from "styled-components";
const Container  = styled.div`
display:flex;

` 
const Side = styled.div`
width:280px ;
max-width:280px ;
min-width:280px ;
height: 100vh;
overflow: auto;
&::-webkit-scrollbar{
    display: none;
}
`
const Body = styled.div`

`
const Wrapper = styled.div`
margin: 16px;
background-color: #FFFFFF;
`

export {Container,Side, Body,Wrapper}