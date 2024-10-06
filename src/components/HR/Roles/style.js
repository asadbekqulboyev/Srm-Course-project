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

export const Wrapper= styled.div`
display:flex;
margin-top: 15px;
justify-content: space-between;
flex-wrap: wrap;
`;


Wrapper.Left =styled.div`
display: flex;
flex-direction: column;
width: calc(50% - 70px);

`;
// Wrapper.Right =styled.div`
// display: flex;
// flex-direction: column;
// `;