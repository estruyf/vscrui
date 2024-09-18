import * as React from 'react';
import '@vscode/codicons/dist/codicon.css';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';
import { Icons } from './Icons';

export interface IIconProps extends BaseComponentProps {
  name: keyof typeof Icons;
  spin?: boolean;
  size?: string | number;
}

const IconElm = styled.i`
  display: inline-block;
  color: var(--vscode-icon-foreground);
  display: inline-block;
  text-decoration: none;
  text-rendering: auto;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;

  &.codicon-spin {
    animation: spin 1.5s steps(30) infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Icon = ({
  className,
  name,
  spin = false,
  size = 16,
  ...rest
}: IIconProps) => {
  const iconSize = React.useMemo(() => {
    if (typeof size === "number") {
      return `${size}px`;
    }
    return size;
  }, [size]);

  return (
    <IconElm
      className={`vscrui-icon codicon codicon-${name} ${spin ? "codicon-spin" : ""} ${className || ""}`}
      style={{ fontSize: iconSize }}
      {...rest}
    />
  );
};