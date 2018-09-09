import React, { Component } from 'react';
import styled from 'styled-components';
import { compose, withState } from 'recompose';

import SearchField from './components/SearchField';
import RepoItem from './components/RepoItem';

const enhance = compose(
  withState('searchText', 'setSearchText', ''),
  withState('text', 'setText', '')
);

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

const AppWrapper = styled.div`
  width: 100vw;
  height: 100%;
  padding: 30px 50px;
  background-color: rgba(34, 166, 153, 1);
`;

const RepoList = styled.ul`
  padding: 0;
  width: calc(100vw - 100px);
`;

export default App;
