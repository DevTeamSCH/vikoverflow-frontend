import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';
import { connect } from 'react-redux';
import DesktopMenu from '../components/menus/DesktopMenu';
import { getUserData } from '../actions';

class DesktopContainer extends Component {

  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    const { children } = this.props;
    const isLoggedIn = this.props.user.id ? true : false;
    return (
      <Responsive minWidth={768}>
        <DesktopMenu user={this.props.user} />
        {React.cloneElement(children, { isLoggedIn })}
      </Responsive>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { getUserData })(DesktopContainer);
