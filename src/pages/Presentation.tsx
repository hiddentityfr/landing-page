import React from 'react';
import { Box, Heading, Paragraph, FormField, Button, TextInput } from 'grommet';



export const Presentation: React.FC = () => (
    <Box
      fill='horizontal'
      direction='row'
      alignContent='center'
      justify='center'
      align='center'
      background='brandLight'
      pad='xlarge'
      wrap
    >
      <Box width='large' pad='xsmall'>
        <Heading>Trouvez l'emploi que vous méritez vraiment</Heading>
        <Paragraph>Notre mission : supprimer les barrières du recrutement.</Paragraph>
      </Box>
      <Box background='white' width='medium' round pad='medium'>
        <Heading level='3'>Intéressé(e) par le projet ?</Heading>
          <Paragraph>
            Car ce n'est qu'ensemble que nous pourrons construire l'avenir du recrutement&nbsp;
            <span role='img' aria-label='raised-hand'>✋</span>
          </Paragraph>
          <form action='https://hiddentity.us4.list-manage.com/subscribe/post?u=2a2d72067208921b3df7a14f4&amp;id=f28c53000a' method='post'>
            <FormField>
              <TextInput name='EMAIL' type='email' placeholder='me@hiddentity.fr' required />
            </FormField>
            <Button primary type='submit' label='Suivre le projet' />
          </form>
      </Box>
    </Box>
  );

export default Presentation;
