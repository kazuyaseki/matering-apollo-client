import React from 'react';
import styled from 'styled-components';

const SearchField = ({ text, setText, setSearchText }) => (
  <StyledSearchField>
    <Textbox
      value={text}
      onChange={e => setText(e.target.value)}
      onKeyDown={e => {
        if (e.keyCode == 13) {
          setSearchText(text);
        }
      }}
      placeholder="Search for Repository"
    />
    <SearchButton onClick={() => setSearchText(text)} />
  </StyledSearchField>
);

const StyledSearchField = styled.div`
  width: calc(100vw - 100px);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
`;

const Textbox = styled.input`
  width: calc(100% - 80px);
  border: none;
  height: 44px;
  padding: 10px;
  outline: none;
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: text;
  display: inline-block;
  font: 18px arial, sans-serif;
`;

const SearchButton = styled.button`
  width: 80px;
  height: 44px;
  border: none;
  border-left: 1px solid #ddd;
  background-image: url('search.svg');
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: top;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  &:focus {
    outline: none;
  }
`;

export default SearchField;
