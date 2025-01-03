import styled from "styled-components";
import getValue from "../../../hooks/getStyleValue";

export const Container  = styled.div`
display:flex;
  align-items: center;
  overflow: hidden;
  flex: 1;
  border-radius: ${({ borderRadius }) => getValue(borderRadius, "4px")};
  height: ${({ height }) => getValue(height, "40px")};

  min-width: ${({ width }) => getValue(width)};
  max-width: ${({ width }) => getValue(width)};
  box-sizing: border-box;
` 

export const Input = styled.input`
  border: 0;
  outline: none;
  flex: 1;
  width: ${({ width }) => getValue(width)};
  height: ${({ height }) => getValue(height, "40px")};
  max-width: ${({ width }) => getValue(width)};
  font-size: ${({ fontSize }) => getValue(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => getValue(lineHeight)};
  color: ${({ color }) => (color ? color : "black")};
  border-radius: ${({ borderRadius }) => getValue(borderRadius)};
  padding-left: 8px;
  border: 1px solid #F0F0F1;
  transition: all .2s linear;
  &:focus{
    box-shadow: 0px 0px  4px #E6F7FF;
  }
  &::placeholder {
    font-size: ${(placeholderStyle) => getValue(placeholderStyle?.fontSize)};
    font-weight: ${(placeholderStyle) =>
      getValue(placeholderStyle?.fontWeight)};
    line-height: ${(placeholderStyle) =>
      getValue(placeholderStyle?.lineHeight)};
    color: ${(placeholderStyle) =>
      placeholderStyle?.color ? placeholderStyle?.color : "#bbc3cd"};
  }
`;
