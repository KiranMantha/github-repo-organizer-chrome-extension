import styled from 'styled-components';

export const StyledDialog = styled.dialog`
  border: 0;
  padding: 0;
  background: var(--dialog-background-color);
  box-shadow: var(--dialog-box-shadow);
  border-radius: var(--border-radius);
  min-width: 192px;
  width: min(var(--dialog-overlay-width), 100vw - 2rem);
  animation: DialogAnimation 0.2s cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running;

  .dialog-title {
    padding: 16px;
    margin: 0;

    button {
      border-color: transparent;
      padding: 0;
      height: 2rem;
      width: 2rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }

  .dialog-footer {
    padding: 16px 0;
    border-top: 1px solid var(--border-color);
  }
`;
