import styled from "styled-components";
import search from '../../assets/icons/search.svg?react'


export const Container = styled.div`
display: flex;
align-items: center;
background:#fff;
box-shadow: 0px 8px 19px 0px #F5F6F8;
height: 60px;
padding: 10px 16px 10px 24px;
justify-content: space-between;
flex-wrap: wrap;
gap: 20px;
width: ${({ width }) => width && (typeof width == 'string' ? width : `${width}+px`)};
max-width: ${({ width }) => width && (typeof width == 'string' ? width : `${width}+px`)};
height: ${({ height }) => height && (typeof height == 'string' ? height : `${height}+px`)};
`
const InputWrapper = styled.div`
border: 1px solid #F0F0F0;
display: flex;
align-items: center;
border-radius: 8px;
width: fit-content;
max-width: 500px;
flex:1;
`
export const Input = styled.input`
outline: 0;
padding: 10px 16px 10px 0;
width: auto;
border-radius: 8px;
border:0;
font-size: 14px;
font-weight: 500;
line-height: 20px;
font-size: ${({ fontSize }) => fontSize && (typeof fontSize == 'string' ? fontSize : `${fontSize}+px`)};
line-height: ${({ lineHeight }) => lineHeight && (typeof lineHeight == 'string' ? lineHeight : `${lineHeight}+px`)};
font-weight: ${({ fWeight }) => fWeight && (typeof fWeight == 'string' ? fWeight : `${fontSize}`)};
width: ${({ width }) => width && (typeof width == 'string' ? width : `${width}+px`)};
max-width: ${({ width }) => width && (typeof width == 'string' ? width : `${width}+px`)};
height: ${({ height }) => height && (typeof height == 'string' ? height : `${height}+px`)};
border-radius: ${({ borderRadius }) => borderRadius && (typeof borderRadius == 'string' ? borderRadius : `${borderRadius}+px`)};
color: ${({ color }) => (color ? color : '#BBC3CD')};


&::placeholder{
    color: ${({ placeholderStyle }) => placeholderStyle?.color ? placeholderStyle?.color : '#BBC3CD'};
    font-size: ${({ placeholderStyle }) => placeholderStyle?.fontSize && (typeof placeholderStyle?.fontSize == 'string' ? placeholderStyle?.fontSize : `${placeholderStyle?.fontSize}+px`)};
line-height: ${({ placeholderStyle }) => placeholderStyle?.lineHeight && (typeof placeholderStyle?.lineHeight == 'string' ? placeholderStyle?.lineHeight : `${placeholderStyle?.lineHeight}+px`)};
font-weight: ${({ placeholderStyle }) => placeholderStyle?.fWeight && (typeof placeholderStyle?.fWeight == 'string' ? placeholderStyle?.fWeight : `${placeholderStyle?.fontSize}`)};

}
`
const SearchIcon = styled(search)`
margin: auto 16px;
`
const Section = styled.div`
display: flex;
align-items: center;
gap: 16px;
`
const Timer = styled.div`
flex: 0 0 auto;
color: ${({ status }) => status == 'true' ? 'var(--GrayColor)' : 'var(--Color)'};
font-size: 24px;
font-weight: 600;
line-height: 32px;
text-align: left;

`
export { InputWrapper, Timer, SearchIcon, Section }