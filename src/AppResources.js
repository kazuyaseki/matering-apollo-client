/* 本来的にはよくないけど、Apollo Client以外のノイズを減らすために別ファイルに書いて呼び出す */

import styled from 'styled-components';
import { compose, withState } from 'recompose';

export const enhance = compose(
  withState('searchText', 'setSearchText', ''),
  withState('text', 'setText', '')
);

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100%;
  padding: 30px 50px;
  background-color: rgba(34, 166, 153, 1);
`;

export const RepoList = styled.ul`
  padding: 0;
  width: calc(100vw - 100px);
`;