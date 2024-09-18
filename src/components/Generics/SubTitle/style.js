import styled from "styled-components";
import getValue from "../../../hooks/getStyleValue";

const Container  = styled.div`
display:flex;
font-size:${({size})=>getValue(size,'16px')};
font-weight:500;
line-height: 24px;
margin-top:${({mt})=>getValue(mt)};
margin-bottom: ${({mb})=>getValue(mb)};
margin-right: ${({mr})=>getValue(mr)};
margin-left: ${({ml})=>getValue(ml)};
padding-top: ${({pt})=>getValue(pt)};
padding-bottom: ${({pb})=>getValue(pb)};
padding-left: ${({pl})=>getValue(pl)};
padding-right: ${({pr})=>getValue(pr)};
color: ${({color})=>(color?color:'#253E5F')};
` 
const Counter = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 28px;
height: 28px;
margin-left: 8px;
font-size: 12px;
color: #fff;
background:var(--ActiveColor);
border-radius: 50%;
`
export {Container,Counter}