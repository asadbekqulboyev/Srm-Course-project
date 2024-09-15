import styled from "styled-components";
import getValue from "../../hooks/getStyleValue";
import arrowUp from '../../assets/icons/arrowUp.svg?react'
import Title from "../Generics/Title";
const getColor = (title)=>{
  switch(title){
   case 'Talabalar': return{color:'#52C41A', preimary:'#F6FFED', secondary:'#B7EB8F'}
   case 'Mentorlar': return{color:'#FADB14', preimary:'#FFFBE6', secondary:'#FFE58F'}
   case 'Filiallar': return{color:'#1890FF', preimary:'#E6F7FF', secondary:'#91D5FF'}
  }
}
const Container = styled.div`
height: calc(100vh - 99px) ;
border-radius:8px;
overflow-y:auto;
padding: 24px;
&::-webkit-scrollbar{
   width:5px;
}
&::-webkit-scrollbar-thumb{
    border-radius: 5px;
   background:var(--ActiveColor);

}
`
const Wrapper = styled.div`
display: flex;
gap: ${({ gap }) => getValue(gap, '16px')};
margin-top:${({ mt }) => getValue(mt)};
margin-bottom: ${({ mb }) => getValue(mb)};
margin-right: ${({ mr }) => getValue(mr)};
margin-left: ${({ ml }) => getValue(ml)};
padding-top: ${({ pt }) => getValue(pt)};
padding-bottom: ${({ pb }) => getValue(pb)};
padding-left: ${({ pl }) => getValue(pl)};
padding-right: ${({ pr }) => getValue(pr)};
`
const Card = styled.div`
flex: 1;
width: 100%;
border-width: 1px solid ;
background-color:${({title})=>getColor(title)?.preimary};
padding: 24px;
padding-bottom: 0;
border-radius: 8px;
display: flex;
flex-direction: column;
gap: ${({gap})=>getValue(gap,0)};
`
export const Section = styled(Wrapper)`
gap: ${({gap})=>getValue(gap,0)};
display: flex;
justify-content: space-between;
align-items: center;
.icon{
   width: 48px;
   height: 48px;
   border-radius: 6px;
   padding: 8px;
   background-color:${({title})=>getColor(title)?.color};
}
.subicon{

}
`
export const Plus = styled(Wrapper)`
&::before{
   content: '+';
   font-size: 24px;
   font-weight: 600;
   background-color:${({title})=>getColor(title)?.secondary};
   width: 32px;
   height: 32px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff;
}
&:active{
   transform:scale(.95);
}
`
export const Counter= styled(Title)`
font-size: 40px;
font-weight: 600;
`
export const Arrow= styled(arrowUp)`
width: 16px;
height: 16px;
margin-right: 13px;
`
export const SubCard = styled(Card)`
border: 1px solid #F0F0F0;
padding-bottom: 20px;
`
export { Container, Wrapper, Card }