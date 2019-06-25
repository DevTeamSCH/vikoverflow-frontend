import React from 'react';
import {
  Menu,
  Input,
  Button,
} from 'semantic-ui-react';

const DesktopMenu = ({user}) => (
  <Menu>
    <Menu.Item>
      < Input className='icon' icon='search' placeholder='Search...' />
    </Menu.Item>
    <Menu.Item position='right'>
      {user.id ? user.full_name : ''}
    </Menu.Item>
    <Menu.Item>
      { user.id ?
        <Button as='a' href='/api/v1/logout'>Log out</Button>
        :
        <Button as='a' href='/api/v1/login/authsch'>Log in</Button>
      }
    </Menu.Item>
  </Menu>
);

export default DesktopMenu;
