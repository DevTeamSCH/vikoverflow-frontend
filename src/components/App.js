import React, { Component } from 'react';
import PageLayout from './PageLayout';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <PageLayout>
        <Main />
      </PageLayout>
    );
  }
}

export default App;
