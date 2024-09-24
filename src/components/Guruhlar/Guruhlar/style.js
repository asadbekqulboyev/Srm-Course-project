import styled from "styled-components";
import edit from '../../../assets/icons/edit.svg?react'
import delet from '../../../assets/icons/delete.svg?react'
export const Container = styled.div`

`
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