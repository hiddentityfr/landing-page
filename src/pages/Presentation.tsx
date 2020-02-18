import React from 'react';
import { Box, Heading, Paragraph, Form, FormField, Button } from 'grommet';

export const Presentation: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const onSubmit = (evt: any) => {
    const values = Object.entries(evt.value).map(e => e.join('=')).join('&');

    evt.preventDefault();
    return fetch('https://hiddentity.us4.list-manage.com/subscribe/post?u=2a2d72067208921b3df7a14f4&amp;id=f28c53000a', {
      method: 'POST',
      body: new URLSearchParams(values),
    }).finally(() => setSubmitted(true));
  };

  return (
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
      <Box width='large'>
        <Heading>Trouvez l'emploi que vous méritez vraiment</Heading>
        <Paragraph>Notre mission : supprimer les barrières du recrutement.</Paragraph>
      </Box>
      <Box background='white' width='medium' round pad='medium'>
        <Heading level='3'>Intéressé(e) par le projet ?</Heading>
        {submitted ? (
          <Box alignSelf='center'>
            <Paragraph>
              Merci beaucoup pour l'intérêt que vous portez au projet !
              Nous vous tiendrons informé(e) de l'avancée du projet.
            </Paragraph>
            <Heading level='5'>
              Toute l'équipe Hiddentity&nbsp;
              <span role='img' aria-label='red-heart'>❤️</span></Heading>
          </Box>
        ) :(
          <>
            <Paragraph>
              Car ce n'est qu'ensemble que nous pourrons construire l'avenir du recrutement&nbsp;
              <span role='img' aria-label='raised-hand'>✋</span>
            </Paragraph>
            <Form onSubmit={onSubmit}>
              <FormField name='EMAIL' type='email' placeholder='me@hiddentity.fr' required/>
              <Button primary type='submit' label='Suivre le projet'/>
            </Form>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Presentation;
