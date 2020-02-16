import React from 'react';
import { Box, Heading } from 'grommet';

const words = [
  {
    name: 'âge',
    hidden: true,
  },
  {
    name: 'genre',
    hidden: true,
  },
  {
    name: 'compétences',
    hidden: false
  },
  {
    name: 'expérience',
    hidden: false,
  },
  {
    name: 'personnalité',
    hidden: false
  },
  {
    name: 'photo',
    hidden: true,
  },
  {
    name: 'nom',
    hidden: true,
  },
];

export const Demo: React.FC = () => (
  <Box
    fill='horizontal'
    direction='column'
    alignContent='center'
    justify='center'
    align='center'
    background='primary'
    pad='large'
  >
    <Box direction='row' align='center'>
      <Heading>Nous retirons toutes les informations</Heading>&ensp;
      <Heading margin='none' color='redLight' style={{ textDecoration: 'line-through' }}>inutiles</Heading>
    </Box>
    <Box
      align='center'
      justify='center'
      alignContent='center'
      background='white'
      elevation='medium'
      style={{ overflow: 'hidden' }}
      direction='row'
      gap='large'
      pad='medium'
      round
      >
        {words.map((word) => (
          <Heading
            level='4'
            color={word.hidden ? 'redLight': 'brand'}
            key={word.name}
            style={{
              textDecoration: word.hidden ? 'line-through': 'unset',
              fontWeight: word.hidden ? 'unset' : 'bold',
            }}
          >
            { word.name }
          </Heading>
        ))}
    </Box>
  </Box>
);

export default Demo;
