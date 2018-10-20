import React, { Component } from 'react';
import styled from 'styled-components';

import { enhance, AppWrapper, RepoList } from './AppResources';
import SearchField from './components/SearchField';
import RepoItem from './components/RepoItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
