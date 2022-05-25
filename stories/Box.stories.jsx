import React from 'react';

import { Box } from './Box';

export default {
  title: 'Example/Box',
  component: Box,
  argTypes: {
    size: {
      control: { type: 'number' },
    },
  },
};

// Set default sad emoji icon if it is not defined
const Template = (args) => <Box {...args} />;

export const Sandbox = Template.bind({});

Sandbox.args = {
  size: 100,
  color: '#db4c4c',
};
