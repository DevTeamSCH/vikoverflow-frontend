import React from 'react';
import DesktopContainer from '../containers/DesktopContainer';
import Footer from './Footer';

const PageLayout = ({children}) => (
  <div>
    <DesktopContainer >{children}</DesktopContainer>
    <Footer />
  </div>
);

export default PageLayout;
