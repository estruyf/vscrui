import * as React from 'react';
import styled from 'styled-components';
import { BaseComponentProps } from '../../models';

export interface ITagProps extends BaseComponentProps { }

const TagElm = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vscode-badge-background);
  border: 1px solid var(--vscode-button-border);
  border-radius: 2px;
  color: var(--vscode-badge-foreground);
  padding: 2px 4px;
  text-transform: uppercase;
`;

export const Tag = ({
  children,
  className
}: React.PropsWithChildren<ITagProps>) => {
  return (
    <TagElm className={`${className || ""}`}>
      {children}
    </TagElm>
  );
};