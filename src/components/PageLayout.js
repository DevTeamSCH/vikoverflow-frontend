import React from 'react';
import DesktopContainer from '../containers/DesktopContainer';
import Footer from './Footer';

const PageLayout = ({children}) => (
  <div style={{ minHeight: '100%', position: 'relative' }}>
    <div id='main' style={{ minHeight: '100%', position: 'relative', paddingBottom: '4em' }}>
      <DesktopContainer >{children}</DesktopContainer>
    </div>
    <Footer />
  </div>
);

export default PageLayout;
