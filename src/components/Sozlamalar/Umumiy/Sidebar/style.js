import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const Wrapper =styled.div`
display: flex;
`
export const Container = styled.div``;
export const Sidebar = styled.div`
display: flex;
flex-direction: column;
.active{
  color: var(--ActiveColor);
  background-color:#F8FAFC;
  path{
    fill:  var(--ActiveColor);
}
}
`;
export const Body = styled.div`
padding: 0 31px 31px 31px;
border-left: 1px solid #F8FAFC;
flex:1;
`;
export const Link = styled(NavLink)`
display: flex;
align-items: center;
padding: 12px  48px 12px 31px;
text-decoration: none;
font-size: 14px;
font-weight: 500;
line-height: 20px;
color: #253E5F;
cursor: pointer;
transition: all .3s linear;
gap: 0 16px;
path{
    transition: all .3s linear;
    fill: #BBC3CD;
}
&:hover{
  background-color:#F8FAFC;
  color: var(--ActiveColor);
  path{
    fill:  var(--ActiveColor);
}
}

`;
