import styled from 'styled-components';

export const StyledCollection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyledReposContainer = styled.div`
  padding: 16px;
  border-top: 1px solid var(--border-color);
`;

export const StyledReposList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 0;
    &:hover {
      background: var(--hover-bg-color);
      cursor: pointer;
    }
  }
`;
