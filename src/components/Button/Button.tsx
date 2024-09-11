import * as React from 'react';
import styled from 'styled-components';
import { BaseComponentProps } from '../../models';

export type ButtonAppearance = 'primary' | 'secondary' | 'icon';

export interface IButtonProps extends BaseComponentProps {
  appearance?: ButtonAppearance;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const ButtonElm = styled.button`
  display: inline-flex;
  outline: none;
  font-family: var(--vscode-font-family);
  font-size: var(--vscode-font-size, 13px);
  line-height: normal;
  color: var(--vscode-button-foreground, #ffffff);
  background: var(--vscode-button-background, #0e639c);
  border: 1px solid var(--vscode-button-border, transparent);
  border-radius: 2px;
  padding: 4px 11px;
  fill: currentColor;
  cursor: pointer;

  &:focus-visible {
    outline: 1px solid var(--vscode-focusBorder, #007fd4);
    outline-offset: 2px;
  }

  &:active {
    background: var(--vscode-button-background, #0e639c);
  }

  &:hover {
    background: var(--vscode-button-hoverBackground, #1177bb);
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.secondary {
    background: var(--vscode-button-secondaryBackground, #3a3d41);
    color: var(--vscode-button-secondaryForeground, #ffffff);

    &:active {
      background: var(--vscode-button-secondaryBackground, #3a3d41);
    }

    &:hover {
      background: var(--vscode-button-secondaryHoverBackground, #484b4f);
    }
  }

  &.icon {
    background: transparent;
    border: none;
    border-radius: 5px;
    color: var(--vscode-foreground, #cccccc);
    padding: 3px;

    &:hover {
      background: rgba(90, 93, 94, 0.31);
      outline: 1px dotted var(--vscode-contrastActiveBorder, #f38518);
      outline-offset: -1px;
    }

    &:active {
      background: rgba(90, 93, 94, 0.31);
    }
  }

  &:disabled {
    opacity: 0.4;
    background: var(--vscode-button-background, #0e639c);
    cursor: not-allowed;

    &.secondary {
      background: var(--vscode-button-secondaryBackground, #3a3d41);
    }
    
    &.icon {
      background: transparent;
    }
  }
`;

export const Button = ({
  appearance = 'primary',
  className,
  children,
  disabled = false,
  type = 'button',
  onClick = undefined,
}: React.PropsWithChildren<IButtonProps>) => {
  return (
    <ButtonElm
      className={`${appearance} ${className || ""}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonElm>
  );
};