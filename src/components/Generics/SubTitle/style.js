import styled from "styled-components";
import getValue from "../../../hooks/getStyleValue";

const Container  = styled.div`
display:flex;
font-size:16px;
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
` 

export {Container}