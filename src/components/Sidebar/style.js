import styled from "styled-components";
import arrow from '../../assets/icons/rightArrow.svg?react'
const Arrow = styled(arrow)`
display: flex;
margin-left: auto;
transition: all .2s linear;
transform:${({active})=>active?'rotate(90deg)':'rotate(0deg)'};
`
const Container  = styled.div`
display:flex;
` 
const Side = styled.div`
width:280px ;
flex:0 0 auto;
max-width:280px ;
min-width:280px ;
height: 100vh;
overflow: auto;
display: flex;
flex-direction: column;
background-color:#FFFFFF;
box-shadow: 0px 8px 8px 0px #F5F6F8;

&::-webkit-scrollbar{
    display: none;
}
`
const Body = styled.div`
flex: 1;
`
const Wrapper = styled.div`
margin: 16px;
background-color: #FFFFFF;
`
const Logo=styled.div`
font-size: 20px;
font-weight: 600;
line-height: 28px;
color: #1890FF;
padding: 16px 0 16px 24px;
border-bottom: 1px solid #F8FAFC;
cursor: pointer;
`
const LogOut = styled(Logo)`
display: flex;
position: sticky;
margin-top:auto;
bottom: 0;
border-bottom: 0;
border-top: 1px solid #F8FAFC;
background-color:#fff;
`
const ProfileContainer = styled.div`
display: flex;
justify-content: start;
align-items: center;
gap: 16px;
padding: 23px 0 23px 24px;
`

ProfileContainer.Img= styled.img`
width: 48px;
height: 48px;
border-radius: 50%;
object-fit: cover;
`
ProfileContainer.Name=styled.div`
font-size: 14px;
font-weight: 600;
line-height: 20px;
text-align: left;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
color:var(--Color);
`
ProfileContainer.Email=styled.div`
font-size: 12px;
font-weight: 500;
line-height: 20px;
color:var(--GrayColor);
`
const Menu =styled.div`
display: flex;
flex-direction: column;
`
const MenuItem =styled.div`
display: flex;
cursor: pointer;
align-items: center;
transition: all .2s linear;
padding-right: 24px;
path{transition:all .2s linear;

}
&:hover{
    background:#F8FAFC;
    color: var(--ActiveColor);
    path{
        fill: var(--ActiveColor);
    }
}
`
MenuItem.Title =styled.div`
flex: 1;
display: flex;
gap: 0 16px;
align-items: center;
font-weight: 500;
font-size:14px;
line-height: 20px;
padding: 12px 0 12px 24px;
`
const ChildWrapper = styled.div`
padding-left:34px;
transition:all .2s linear;
max-height:${({active})=>active?'fit-content':'0px'};
overflow: hidden;
`
export {Container,Side, Body,Wrapper,Logo,LogOut, ProfileContainer, Menu, MenuItem,Arrow,ChildWrapper}