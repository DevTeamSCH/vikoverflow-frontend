import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import {APP_VERSION} from '../version';


const Footer = () => (
  <footer id='footer' style={{ position: 'absolute', width: '100%', bottom: '0' }}>
    <Segment inverted vertical textAlign='center' >
      <Container>
        <p>Version { APP_VERSION } - Created by DevTeam &copy; 2018-2019.</p>
      </Container>
    </Segment>
  </footer>
);

export default Footer;
