import { Switch } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex: 2;
flex-direction: column;
`
export const Status = styled.span`
color: ${({bonus})=>bonus?'#52C41A':'#FAAD14'};
background-color:#F9F0FF;
border-radius: 16px;
font-family: 'Montserrat';
font-size: 16px;
font-weight: 500;
line-height: 24px;
padding: 4px 10px;
`
export const CustomSwitch = styled(Switch)`
  &.MuiSwitch-root {
    width: 62px;
    height: 40px;
    padding: 5px;
  }
  
  & .MuiSwitch-switchBase {
    padding: 0;
    margin: 2px;
    transform: translateX(5px);
    &.Mui-checked {
      transform: translateX(28px);
      color: #fff;
      & + .MuiSwitch-track {
        background-color: #4caf50;
        opacity: 1;
      }
    }
  }

  & .MuiSwitch-thumb {
    width: 24px;
    height: 24px;
    background-color: #fff;
    position: relative;
     top:5.5px;
  }

  & .MuiSwitch-track {
    border-radius: 15px;
    background-color: #e0e0e0;
    opacity: 1;
  }
`;