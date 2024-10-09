import styled from "styled-components";
import edit from '../../../assets/icons/edit.svg?react'
import delet from '../../../assets/icons/delete.svg?react'
import keldi from '../../../assets/icons/keldi.svg?react'
import sababli from '../../../assets/icons/sababli.svg?react'
import sababsiz from '../../../assets/icons/sababsiz.svg?react'
import birinchi from '../../../assets/icons/birinchi.svg?react'
export const Container = styled.div`
`
export const Icon = styled.div`
`
Icon.Keldi= styled(keldi)``;
Icon.Sababli= styled(sababli)``;
Icon.Sababsiz= styled(sababsiz)``;
Icon.Birinchi= styled(birinchi)``;
export const Action = styled.div`
display: flex;
gap: 0 18px;
align-items: center;
justify-content: flex-end;

`
Action.Edit = styled(edit)`
padding: 5px;
width: 34px;
height: 34px;
cursor: pointer;
`;
Action.Delete = styled(delet)`
padding: 5px;
width: 34px;
height: 34px;
`;
Action.Move = styled(edit)`
padding: 5px;
width: 34px;
height: 34px;
`;
export const ModalContainer = styled.div`
display: flex;
flex-direction: column;
position: absolute;
border: 1px solid #F0F0F0;
border-radius: 8px;
/* margin: 40px 0px 0px -70px; */
width: 200px;
height: 200px;
transform: translate(-50%, 15%);
top: ${({y})=>`${y}px`};
left: ${({x})=>`${x}px`};
background-color: #fff;
`
export const Arrow = styled.div`
    margin: 0 auto;
    align-self:center; 
    width: 32px ;
    height: 32px ;
    background-color: #fff;
    margin-top: -16px;
    transform: rotate(45deg);
    border-color:#F0F0F0 transparent transparent #F0F0F0;
`
export const StatusWrapper = styled.div`
display: flex;
padding: 7.6px 0 7.6px 16px;
align-items: center;
font-size: 16px;
font-weight: 500;
color: #253E5F;
gap: 0 16px;
&:hover{
background-color: #F8FAFC;

}
`
export const Section = styled.label`
background-color: #E6F7FF;
padding: 8px 16px;
width: 100%;
border-radius: 8px 0 0 8px;
border:1px solid #91D5FF;
border-right:0;
`
export const Flex = styled.div`
display: flex;
flex:1;
width: 100%;
margin-top: ${({g})=>g?g:0};
flex-direction: ${({g})=>g?'column':'row' };
gap: ${({g})=>g?g:0};
`
export const Input = styled.input`
background-color: #fff;
border:1px solid #91D5FF;
border-radius: 0 8px 8px 0;
outline: none;
width: 100%;
height: 100%;
padding-left:16px;
`