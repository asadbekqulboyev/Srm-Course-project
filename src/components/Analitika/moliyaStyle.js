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