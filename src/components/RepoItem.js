import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const ADD_STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

const REMOVE_STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    removeStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

const RepoItem = ({
  id,
  url,
  description,
  name,
  viewerHasStarred,
  stargazers
}) => (
  <StyledRepoItem key={id}>
    <HeaderWrapper>
      <Title href={url}>{name}</Title>
      <Mutation
        mutation={
          viewerHasStarred ? REMOVE_STAR_REPOSITORY : ADD_STAR_REPOSITORY
        }
        variables={{ id }}
      >
        {toggleStar => (
          <StarButton onClick={toggleStar}>
            {viewerHasStarred ? 'Unstar' : 'Star'} {stargazers.totalCount}
          </StarButton>
        )}
      </Mutation>
    </HeaderWrapper>
    <Description>{description}</Description>
  </StyledRepoItem>
);

const StyledRepoItem = styled.li`
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  list-style: none;
  margin-bottom: 15px;
  height: 120px;
  border-radius: 8px;
  padding: 8px 10px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.a`
  font-size: 16px;
  font-weight: bold;
  color: #0366d6;
  text-decoration: none;
`;

const StarButton = styled.button`
  width: 94px;
  text-align: left;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  background-image: url(./star.svg);
  background-repeat: no-repeat;
  background-position: 3px 3px;
  padding-left: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #586069;
`;

export default RepoItem;
