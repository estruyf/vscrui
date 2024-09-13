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
  color: var(--vscode-button-foreground);
  background: var(--vscode-button-background);
  border: 1px solid var(--vscode-button-border);
  border-radius: 2px;
  padding: 4px 11px;
  fill: currentColor;
  cursor: pointer;

  &:focus-visible {
    outline: 1px solid var(--vscode-focusBorder);
    outline-offset: 2px;
  }

  &:active {
    background: var(--vscode-button-background);
  }

  &:hover {
    background: var(--vscode-button-hoverBackground);
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.secondary {
    background: var(--vscode-button-secondaryBackground);
    color: var(--vscode-button-secondaryForeground);

    &:active {
      background: var(--vscode-button-secondaryBackground);
    }

    &:hover {
      background: var(--vscode-button-secondaryHoverBackground);
    }
  }

  &.icon {
    background: transparent;
    border: none;
    border-radius: 5px;
    color: var(--vscode-foreground);
    padding: 3px;

    &:hover {
      background: rgba(90, 93, 94, 0.31);
      outline: 1px dotted var(--vscode-contrastActiveBorder);
      outline-offset: -1px;
    }

    &:active {
      background: rgba(90, 93, 94, 0.31);
    }
  }

  &:disabled {
    opacity: 0.4;
    background: var(--vscode-button-background);
    cursor: not-allowed;

    &.secondary {
      background: var(--vscode-button-secondaryBackground);
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
  ...rest
}: React.PropsWithChildren<IButtonProps>) => {
  return (
    <ButtonElm
      className={`${appearance} ${className || ""}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </ButtonElm>
  );
};