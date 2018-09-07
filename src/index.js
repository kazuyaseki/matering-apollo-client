import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { persistCache } from 'apollo-cache-persist';
import { ApolloProvider } from 'react-apollo';

const cache = new InMemoryCache();

persistCache({
  cache,
  storage: window.localStorage
});

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache,
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${
          process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
        }`
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      // graphQLErrors固有の処理
      console.log(graphQLErrors);
    }
    if (networkError) {
      // networkError固有の処理
      console.log(networkError);
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
