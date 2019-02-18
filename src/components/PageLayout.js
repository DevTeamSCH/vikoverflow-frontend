import React from 'react';
import DesktopContainer from '../containers/DesktopContainer';

const PageLayout = ({children}) => (
  <div>
    <DesktopContainer >{children}</DesktopContainer>
  </div>
)

export default PageLayout;
