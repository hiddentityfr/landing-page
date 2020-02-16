import React from 'react';
import { Footer as GrommetFooter, Anchor, Box, Heading } from 'grommet';
import { Twitter, Instagram, Github, Mail } from 'grommet-icons';

const links = [
  {
    icon: <Mail />,
    href: 'mailto:contact@hiddentity.fr'
  },
  {
    icon: <Twitter />,
    href: 'https://twitter.com/hiddentityfr'
  },
  {
    icon: <Instagram />,
    href: 'https://www.instagram.com/hiddentityfr/'
  },
  {
    icon: <Github />,
    href: 'https://github.com/hiddentityfr'
  },
];

export const Footer: React.FC = () => (
  <GrommetFooter height='xxsmall' justify='between' pad={{ horizontal: 'large', vertical: 'small' }}>
    <Heading level='6'>Hiddentity, 2020</Heading>
    <Box direction='row' gap='small'>
      {links.map((link, i) => (
        <Anchor
          key={i}
          href={link.href}
          icon={link.icon}
          target='_blank'
          rel='noopener noreferrer'
        />
      ))}
    </Box>
  </GrommetFooter>
);

export default Footer;
