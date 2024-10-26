import styled from "styled-components";
import arrow from '../../../assets/icons/rightArrow.svg?react'
const getColor = ({title})=>{
    switch(title){
        case'Lidlar':return '#FFF2E8';
        case'Talabalar':return '#F9F0FF';
        case'Guruhlar':return '#FCFFE6';
        case'Kurslar':return '#E6FFFB'; 
        case'HR':return '#FFF0F6'; 
        default:return '#F0F5FF'
    }
}
export const Arrow = styled(arrow)`
display: flex;
`
export const Container = styled.div `
padding: 24px;
border-radius: 8px 8px 0  0;
display: flex;
background:${getColor};
align-items: center;
margin-bottom: 32px;

`