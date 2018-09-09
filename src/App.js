import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { enhance, AppWrapper, RepoList } from './AppResources';
import SearchField from './components/SearchField';
import RepoItem from './components/RepoItem';

const query = gql`
  {
    search(query: GraphQL, type: REPOSITORY, first: 10) {
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

const App = enhance(props => (
  <AppWrapper>
    <SearchField {...props} />
    <Query query={query} variables={{ searchText: props.searchText }}>
      {({ loading, data }) => {
        if (loading) return <p>Loading...</p>;

        const repositories = data.search.edges.map(edge => edge.node);

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

export default App;
