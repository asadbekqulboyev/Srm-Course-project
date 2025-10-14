import styled from "styled-components";
import filter from '../../../assets/icons/filter.svg?react'
import imp from '../../../assets/icons/import.svg?react'
import plus from '../../../assets/icons/ps.svg?react'
export const Icons = styled.div`
`
Icons.Filter=styled(filter)``
Icons.Import=styled(imp)``
Icons.Plus=styled(plus)``
export const Button = styled.button`
display: flex;
gap: 8px;
justify-content: center;
align-items: center;
background:white;
border-radius: 8px;
padding: 10px 16px;
border: 1px solid #f0f5ff;
font-family: 'Montserrat';
font-size: 14px;
font-weight: 550;
cursor: pointer;
transition:all .3s linear;
user-select:none;
-ms-user-select:none;
-webkit-user-select:none;
&:hover{
    opacity: .8;
}
&:active{
    transform: scale(.96);
}
`
Button.Primary = styled(Button)`
background: #1890FF;
color: #fff;
font-family: 'Montserrat';
font-size: 14px;
font-weight: 550;
width: fit-content;
margin-left:${({ml})=>ml?ml+'px':''};
margin-top:${({mt})=>mt?mt+'px':''};
`
Button.Filter = styled(Button)`
background: var(--Color);
color:#fff;
border: 1px solid ;
path{
    fill: #fff;

}
`
Button.Delete =styled(Button)`
color: #F5222D;
border: 1px solid #FFA39E;
`
Button.Import =styled(Button)`
color:var(--Color);
border: 1px solid #F0F5FF;
`
Button.Add=styled(Button)`
background-color:${({bg})=>bg?bg:'var(--ActiveColor)'};
color:#fff;
/* color:{$()=>(a)};
color:{$()=>(a)};
border: 1px solid #FFA39E; */
`