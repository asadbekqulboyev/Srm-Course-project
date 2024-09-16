import styled from "styled-components";
export const Wrapper =styled.div`
padding: 14px;
border: 1px solid #f0f0f0;
border-radius: 8px;
`
export const Info = styled.div`
display: flex;
border-radius: 8px;
transition: all .2s linear;
&:hover{
    background-color: #F0F5FF;
}
`
export const Section = styled.div`
display: flex;
flex: 1;
margin-left: auto;
/* border: 1px solid red; */
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
justify-content: ${({end})=>end && 'flex-end'};
align-items: center;
padding: 10px;
`

Info.Img = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit:contain;
margin-right: 24px;
`