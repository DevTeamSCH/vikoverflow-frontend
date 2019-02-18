import React, { Component } from 'react';
import { Container, Responsive } from 'semantic-ui-react';
import DesktopMenu from '../components/menus/DesktopMenu';

class DesktopContainer extends Component {

  render(){
    const { children } = this.props;
    return (
    <Responsive minWidth={768}>
      <DesktopMenu />
      {children}
    </Responsive>
    )
  }
}

export default DesktopContainer;
