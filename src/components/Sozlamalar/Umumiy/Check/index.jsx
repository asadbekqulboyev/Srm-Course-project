import React, { useState } from 'react'
import { Container, FileUpload, ImgBox } from './style'
import SubTitle from '../../../Generics/SubTitle'
import GenericInput from '../../../Generics/Input'
import GenericSelect from '../../../Generics/Select'
import GenericButton from '../../../Generics/Button';
import BreadCrumbs from '../../BreadCrumbs'
const Check = () => {
    const [url,setUrl] = useState('')
    const onUpload = (e)=>{
        const [file]= e.target.files
        const url = URL.createObjectURL(file)
        setUrl(url)
    }
  return (
    <Container>
      <BreadCrumbs />
        <SubTitle color='#929FAF' mb={8}>Logo</SubTitle>
        <ImgBox url={url}>
        <FileUpload onChange={onUpload} type='file' />
        </ImgBox>
        <SubTitle mt={24} color='#929FAF' mb={8}>Sarlavha</SubTitle>
        <GenericInput width={500} style={{border:'1px solid #1890FF',paddingLeft:'10px'}} placeholder="Header" borderRadius={8}/>
        <SubTitle mt={24} color='#929FAF' mb={8}>Chek tag yozuvi</SubTitle>
        <GenericInput width={500} style={{border:'1px solid #1890FF',paddingLeft:'10px'}} placeholder="Footer" borderRadius={8}/>
        <SubTitle mt={24} color='#929FAF' mb={8}>Chek tili</SubTitle>
        <GenericSelect data={[]} width={500} style={{border:'1px solid #1890FF',paddingLeft:'10px'}} placeholder="Footer" borderRadius={8}/>
        <GenericButton type='primary' width={88} mt={32} ml='auto'>Saqlash</GenericButton>
    </Container>
  )
}

export default Check