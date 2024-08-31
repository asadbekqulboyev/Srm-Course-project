import styled from "styled-components";
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

export {Container,Side, Body,Wrapper,Logo,LogOut, ProfileContainer}