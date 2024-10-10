import styled from "styled-components";
import edit from '../../../../assets/icons/edit.svg?react'
import del from '../../../../assets/icons/delete.svg?react'
export const Edit = styled(edit)`
cursor: pointer;
`;
export const Delete = styled(del)`
cursor: pointer;
`;
export const Input = styled.input`

`
export const Title = styled.div`
font-size:${({font})=>font?font+'px':'16px'} ;
font-weight: 500;
line-height: 24px;
text-align: left;
color: #253E5F;
font-family: 'Montserrat';
white-space: nowrap;
color:${({color})=>color?color:'#253E5F'};
`
export const Status = styled.div`
font-size: 14px;
font-weight: 600;
font-family: 'Montserrat';
line-height: 20px;
display:flex;
align-items: center;
text-align: left;
color:${({active})=>active?'#52C41A':'#FAAD14'};

&::before{
    content: '';
    border-radius: 50%;
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color:${({active})=>active?'#52C41A':'#FAAD14'};
    margin-right: 8px;
}
`
export const TimelineWrapper = styled.div`
width: 100%;
align-items: center;
padding: 4px 15px;
color: #fff;
display: flex;
justify-content: center;
font-family: 'Montserrat';
font-size: 16px;
font-weight: 500;
line-height: 24px;
border-radius: 16px;
background-color: ${({time})=>time?'#1890FF':'#91D5FF'} ;

`