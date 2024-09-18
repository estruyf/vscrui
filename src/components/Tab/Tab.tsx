import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';

type CombinedProps = React.LabelHTMLAttributes<HTMLButtonElement> & BaseComponentProps;

export interface ITabProps extends CombinedProps {
  isSelected?: boolean;
  onClick?: () => void;
}

const TabElm = styled.button`
  all: unset;
  color: var(--vscode-panelTitle-inactiveForeground);
  font-family: var(--vscode-font-family);
  font-size: var(--vscode-font-size, 13px);
  box-sizing: border-box;
  height: 28px;
  padding: 4px 0;
  fill: currentcolor;
  border-radius: 2px;
  border: 1px solid transparent;
  align-items: center;
  justify-content: center;
  grid-row: 1;
  cursor: pointer;

  &:hover, &:active, &[aria-selected='true'], &[aria-selected='true']:hover, &[aria-selected='true']:active {
    background: transparent;
    color: var(--vscode-panelTitle-activeForeground);
		fill: currentcolor;
  }

  &[aria-selected='true'] {
    border-bottom: 1px solid var(--vscode-panelTitle-activeForeground);
  }

  &:focus-visible {
    outline: none;
		border: 1px solid var(--vscode-panelTitle-activeBorder);
  }

  &:focus {
    outline: none;
  }
`;

export const Tab = ({
  children,
  isSelected,
  className,
  onClick,
  ...rest
}: React.PropsWithChildren<ITabProps>) => {
  return (
    <TabElm
      className={`vscrui-tab ${className || ""}`}
      onClick={onClick}
      aria-selected={isSelected}
      role="tab"
      {...rest}
    >
      {children}
    </TabElm>
  );
};