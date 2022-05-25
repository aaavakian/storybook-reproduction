import styled, { css } from 'styled-components';

const getSize = (size) => `${size}${typeof size === 'number' ? 'px' : ''}`;

export const StyledBox = styled.div`
  background-color: ${({ $color }) => $color || '#bebebe'};

  ${({ $size }) => css`
    width: ${getSize($size)};
    height: ${getSize($size)};
  `}
`;
