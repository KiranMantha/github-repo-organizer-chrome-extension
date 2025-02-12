import styled from 'styled-components';

export const StyledButton = styled.button`
  background: var(--button-bg-color);
  color: var(--button-text-color);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  padding: 5px var(--base-size);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  transition: background 0.3s;

  &:hover {
    background: var(--button-hover-bg-color);
  }

  &.primary {
    background: var(--button-primary-bg-color);
    color: var(--button-primary-text-color);
    border-color: var(--button-primary-border-color);
  }
`;
