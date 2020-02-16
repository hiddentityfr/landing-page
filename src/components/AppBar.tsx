import React from 'react';
import { Anchor, Box, BoxProps, Heading, Image } from 'grommet';

import logo from '../logo.svg';

export const AppBar: React.FC<BoxProps> = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    pad={{ horizontal: 'large', vertical: 'xxsmall' }}
    style={{ zIndex: 1 }}
    {...props}
  >
    <Box width='xsmall' height='xxsmall'>
      <Image src={logo} alt='logo' fit='contain' style={{ fill: 'red' }}/>
    </Box>
    <Box>
      <Anchor href='mailto:contact@hiddentity.fr'>
        <Heading level='5'>Nous contacter</Heading>
      </Anchor>
    </Box>
  </Box>
);

export default AppBar;
