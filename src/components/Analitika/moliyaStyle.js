import styled from "styled-components";
import arrow from '../../assets/icons/rightArrow.svg?react'
export const Wrapper =styled.div`
padding: 24px;
border: 1px solid #f0f0f0;
border-radius: 8px;
`
export const Fragment =styled.div`
display: flex;
justify-content: space-between;
margin: ${({mt=0,mb=0,ml=0,mr=0})=>`${mt} ${mr} ${mb} ${ml}`};
`
export const ArrowIcon =styled(arrow)`
transform: ${({left})=>left&&'rotate(180deg)'};
cursor: pointer;
flex: 0 0 auto;
&:active{
    & path{
        fill: var(--ActiveColor);
    }
}
`
export const DateCard = styled.div`
width: 48px;
height: 72px;
border-radius: 24px;
border: 1px solid #f0f0f0;
color:white;
background-color: ${({active})=>(active ? 'var(--ActiveColor)':'white')};
display: flex;
flex-direction:column;
justify-content: center;
cursor: pointer;
align-items: center;
padding: 20px;
`