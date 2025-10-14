import styled from "styled-components";
import edit from '../../../assets/icons/edit.svg?react'
export const Container = styled.div`

`
export const Action = styled.div`
display: flex;
gap: 0 18px;
align-items: center;
justify-content: flex-end;

`
Action.Edit = styled(edit)`
padding: 10px;
width: 42px;
height: 42px;
cursor: pointer;
`;
Action.Move = styled(edit)``;

export const Devider = styled.div`
display:flex;
margin-top: 16px;
align-items: center;
`

Devider.Role = styled.div`
flex:1;`

Devider.Filial = styled.div`
flex:1;
gap: 20px;
gap:${({g})=>g?g+'px':0};
`
