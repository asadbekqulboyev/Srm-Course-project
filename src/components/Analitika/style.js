import styled from "styled-components";
import getValue from "../../hooks/getStyleValue";
const Container = styled.div`
height: calc(100vh - 95px) ;
overflow-y:auto;
&::-webkit-scrollbar{
   width:5px;
}
&::-webkit-scrollbar-thumb{
    border-radius: 5px;
   background:var(--ActiveColor);

}
`
const Wrapper = styled.div`
display: flex;
font-weight: ${({gap})=>getValue(gap,'16px')};
`
const Card = styled.div`
display: flex;
flex: 1;
border-width: 1px solid ;


`
export {Container,Wrapper,Card}