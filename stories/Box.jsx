import PropTypes from 'prop-types';
import React from 'react';

import { StyledBox } from './Box.styles';

export function Box({ size = 50, color }) {
  return (
    <StyledBox $size={size} $color={color}/>
  );
}

Box.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
