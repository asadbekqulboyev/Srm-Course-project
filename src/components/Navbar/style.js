import styled from "styled-components";
import search from '../../assets/icons/search.svg?react'
import getValue from "../../hooks/getStyleValue";

export const Container = styled.div`
position: sticky;
top: 0;
display: flex;
align-items: center;
background:#fff;
box-shadow: 0px 8px 19px 0px #F5F6F8;
height: 60px;
padding: 10px 16px 10px 24px;
justify-content: space-between;
flex-wrap: wrap;
gap: 20px;
width: ${({ width }) => width && getValue(width)};

height: ${({ height }) => height &&  getValue(height)};
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
flex:1;
outline: 0;
padding: 10px 16px 10px 0;
width: auto;
border:0;
font-size: 14px;
font-weight: 500;
line-height: 20px;
font-size: ${({ fontSize }) => fontSize && getValue(fontSize)};
line-height: ${({ lineHeight }) => lineHeight && getValue(lineHeight)};
font-weight: ${({ fWeight }) => fWeight &&getValue(fWeight)};
width: ${({ width }) => width && getValue(width)};
max-width: ${({ width }) => width &&  getValue(width)};
border-radius: ${({ borderRadius }) => getValue(borderRadius)};
color: ${({ color }) => (color ? color : '#BBC3CD')};


&::placeholder{
font-size: ${(placeholderStyle) =>getValue(placeholderStyle?.fontSize)};
line-height: ${(placeholderStyle) =>getValue(placeholderStyle?.lineHeight)};
font-weight: ${(placeholderStyle) =>getValue(placeholderStyle?.fWeight)};
color: ${({ color }) => (color ? color : '#BBC3CD')};
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