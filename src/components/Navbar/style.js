import styled from "styled-components";
import search from '../../assets/icons/search.svg?react'
const Container  = styled.div`
display: flex;
align-items: center;
background:#fff;
box-shadow: 0px 8px 19px 0px #F5F6F8;
height: 60px;
padding: 10px 16px 10px 24px;
justify-content: space-between;
flex-wrap: wrap;
gap: 20px;
` 
const InputWrapper=styled.div`
border: 1px solid #F0F0F0;
display: flex;
align-items: center;
border-radius: 8px;
width: fit-content;
max-width: 500px;
flex:1;
`
const Input =styled.input`
outline: 0;
padding: 10px 16px 10px 0;
width: auto;
max-width: 500px;
border-radius: 8px;
border:0;
font-size: 14px;
font-weight: 500;
line-height: 20px;
&::placeholder{
    color: #BBC3CD;
}
`
const SearchIcon = styled(search)`
margin: auto 16px;
`
const Section = styled.div`
display: flex;
align-items: center;
gap: 16px;
`
const Timer= styled.div`
flex: 0 0 auto;
color: ${({status})=>status=='true'?'var(--GrayColor)':'var(--Color)'};
font-size: 24px;
font-weight: 600;
line-height: 32px;
text-align: left;

`
export {Container,InputWrapper,Timer,Input,SearchIcon,Section}