import styled, { css } from 'styled-components';

interface TextProps {
  large?: boolean;
}

export const fontFamily = css`
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
`;
export const StyledText = styled.span<TextProps>`
  ${fontFamily}
  font-weight: 600;
  line-height: 1.125rem;
  font-size: ${({ large }) => (large ? '1.125rem' : '1rem')};
  display: flex;
`;
