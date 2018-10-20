# Mastering Apollo Client

こちらは技術書典 5 にて頒布予定の技術書「Mastering Apollo Client」内で扱う GitHub クライアント作成のためのレポジトリです。

## 正誤表

間違いが見つかったらこちらに記載していきます。
お手数おかけしますが、Issue を立てていただけますと幸いです。

### レポジトリ名が誤っている

13 ページに以下の URL を記載しましたが、誤った名前でレポジトリ名を入力してしまいました。

```
https://github.com/kazuyaseki/matering-apollo-client
```

正しくは `mastering` なのですがレポジトリ名自体が間違っているため、`matering-apollo-client` のレポジトリ名で clone いただけますと幸いです。
(恥ずかしいですが、本に書かれてある通りの内容が動く方が良いと判断したため、そのままとさせてください。)

### ページ 24, リスト 3.4 のクエリが誤っている

```js
const query = gql`
  query search($searchText: String!) {
    {
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
  }
`;
```

と書かれてしまっていますが、正しくは次のクエリです。
上記３行目の `{}` のペアを取り除いています。

```js
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
```
