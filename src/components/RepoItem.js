import React from 'react';
import styled from 'styled-components';

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
      <StarButton>
        {viewerHasStarred ? 'Unstar' : 'Star'} {stargazers.totalCount}
      </StarButton>
    </HeaderWrapper>
    <Description>{description}</Description>
  </StyledRepoItem>
);

const StyledRepoItem = styled.li`
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  list-style: none;
  margin-bottom: 15px;
  height: 75px;
  border-radius: 8px;
  padding: 10px 15px;
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
  margin-top: 10px;
  font-size: 14px;
  color: #586069;
`;

export default RepoItem;
