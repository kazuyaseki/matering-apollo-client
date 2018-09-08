import React from 'react';
import styled from 'styled-components';
import { compose, withState } from 'recompose';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import SearchField from './components/SearchField';
import RepoItem from './components/RepoItem';

const query = gql`
  query search($searchText: String!) {
    search(query: $searchText, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
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
  }
`;

const enhance = compose(
  withState('searchText', 'setSearchText', ''),
  withState('text', 'setText', '')
);

const App = enhance(props => (
  <AppWrapper>
    <SearchField {...props} />
    <Query query={query} variables={{ searchText: props.searchText }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error.toString()}</p>;

        const repositories = data.search.edges.map(edge => edge.node);

        if (repositories.length < 1)
          return <p>なにも見つからなかったよ＞＜ 検索文言を変えてみよう！</p>;

        return (
          <RepoList>
            {repositories.map(repo => (
              <RepoItem key={repo.id} {...repo} />
            ))}
          </RepoList>
        );
      }}
    </Query>
  </AppWrapper>
));

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
