import styled from "styled-components";
import getValue from "../../../hooks/getStyleValue";
const Container  = styled.div`
display:inherit;
align-items: inherit;
font-size: 20px;
font-weight: ${({type})=>(!type || type=='primary'?400:600)};
line-height: 28px;
text-align: left;
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