import * as React from 'react';
import styled from 'styled-components';
import { BaseComponentProps } from '../../models';

export interface IBadgeProps extends BaseComponentProps { }

const BadgeElm = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vscode-badge-background);
  border: 1px solid var(--vscode-button-border);
  border-radius: 11px;
  box-sizing: border-box;
  color: var(--vscode-badge-foreground);
  font-family: var(--vscode-font-family);
  font-size: 11px;
  line-height: 16px;
  height: 16px;
  min-width: 18px;
  min-height: 18px;
  padding: 3px 6px;
  text-align: center;
`;

export const Badge = ({
  className,
  children,
  ...rest
}: React.PropsWithChildren<IBadgeProps>) => {
  return (
    <BadgeElm className={className || ""} {...rest}>
      {children}
    </BadgeElm>
  );
};