import React from 'react';
import {
  Menu,
  Input,
  Button,
} from 'semantic-ui-react';

const DesktopMenu = () => (
  <Menu>
    <Menu.Item>
      < Input className='icon' icon='search' placeholder='Search...' />
    </Menu.Item>
    <Menu.Item position='right'>
      <Button>Log in</Button>
    </Menu.Item>
  </Menu>
);

export default DesktopMenu;
