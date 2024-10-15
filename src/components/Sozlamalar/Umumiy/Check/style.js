import styled from "styled-components";
import user from '../../../../assets/images/noUser.webp'
export const Container = styled.div`
display: flex;
flex-direction: column;
`
export const ImgBox= styled.label`
width: 112px;
height: 112px;
border-radius: 8px;
background-color:#F8FAFC;
background:${({url})=> url!==''? `url(${url}) no-repeat center`:user};
background-size:cover;
position:relative;
`
export const FileUpload = styled.input`
position:absolute;
top: 0;
left: 0;
opacity:0;
`