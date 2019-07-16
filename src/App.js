import React, { Component } from 'react';
import PageLayout from './components/PageLayout';
import Main from './components/Main';

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
