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
    wrap
  >
    <Box align='center' justify='center' alignContent='center'>
      <Heading textAlign='center'>
        Nous retirons toutes les informations&thinsp;
        <del style={{ textDecoration: 'line-through', color: '#c83e3e78' }}>
          inutiles
        </del>
      </Heading>
    </Box>
    <Box
      align='center'
      justify='center'
      alignContent='center'
      background='white'
      elevation='medium'
      direction='row'
      gap='large'
      pad='medium'
      round
      wrap
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
