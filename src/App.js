import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import RepoItem from './components/RepoItem';

const query = gql`
  {
    organization(login: "apollographql") {
      repositories(first: 5, isFork: false) {
        nodes {
          id
          name
          description
          url
          viewerHasStarred
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

const App = () => (
  <AppWrapper>
    <Textbox placeholder="レポジトリ名を入力しましょう" />
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error.toString()}</p>;

        const repositories = data.organization.repositories.nodes;

        return (
          <RepoList>
            {repositories.map(repo => (
              <RepoItem {...repo} />
            ))}
          </RepoList>
        );
      }}
    </Query>
  </AppWrapper>
);

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30px 50px;
  background-color: rgba(34, 166, 153, 1);
`;

const Textbox = styled.input`
  width: calc(100% - 100px);
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  height: 44px;
  outline: none;
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: text;
  display: inline-block;
  font: 18px arial, sans-serif;
`;

const RepoList = styled.ul`
  padding: 0;
  width: calc(100% - 100px);
`;

export default App;
