import styled from "styled-components";
import mail from '../../assets/icons/email.svg?react'
import password from '../../assets/icons/passcode.svg?react'
import { NavLink } from "react-router-dom";
export const Container = styled.div`
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`
export const WrapperForm = styled.div`
width: 100%;
max-width: 430px;
padding: 12px 20px;
`
export const FormTitle = styled.h2`
font-size: 28px;
font-weight: 500;
text-align: center;
`
FormTitle.Subtitle = styled.div`
font-size: 14px;
font-weight: 400;
line-height: 20px;
color: #8C8C8C;
text-align: center;
`
export const Form = styled.form`
margin-top: 32px;
display: flex;
flex-direction: column;
gap: 24px;
`
export const InputLabel = styled.label`
display: flex;
flex-direction: column;
gap: 4px;
position: relative;
span{
font-size: 14px;
font-weight: 500;
line-height: 20px;
}
sup{
    color:#F5222D ;
}
.icon{
cursor:pointer; 
font-size: 24px; 
color: #333;
position: absolute;
bottom: 14px;
right: 10px;
background-color: #fff;
}
`
export const Input =styled.input`
height: 48px;
border: 1px solid #D0D7DE;
padding: 12px;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.005em;
border-radius: 8px;
outline: none;
&:focus{
    box-shadow: 0px 0px  2px #1890FF;
  }
`
export const Mail = styled(mail)``
export const Password = styled(password)``
export const TopassWord=styled(NavLink)`
color: #8C8C8C;
`
export const Button = styled.button`
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.005em;
color: #fff;
background-color: #1890FF;
border-radius: 8px;
padding: 12px 24px;
width: 100%;
outline: none;
cursor: pointer;
border: 1px solid #2F54EB;
`
export const ToRegister = styled.div`
text-align: center;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.005em;
margin-top: 24px;
a{
    color: #1890FF;
}
`