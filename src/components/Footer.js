import React from 'react';
import { Container, Segment } from 'semantic-ui-react';


const Footer = () => (
  <footer id='footer' style={{ position: 'absolute', width: '100%', bottom: '0', maxHeight: '2em' }}>
    <Segment inverted vertical textAlign='center' >
      <Container>
        <p textalign='center' >Created by DevTeam &copy; 2018-2019.</p>
      </Container>
    </Segment>
  </footer>
);

export default Footer;
