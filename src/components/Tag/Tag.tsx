import * as React from 'react';
import styled from 'styled-components';
import { BaseComponentProps } from '../../models';

export interface ITagProps extends BaseComponentProps { }

const TagElm = styled.div`
  font-family: var(--vscode-font-family);
  font-size: var(--vscode-font-size);
  color: var(--vscode-badge-foreground);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vscode-badge-background);
  border: 1px solid var(--vscode-button-border);
  border-radius: 2px;
  padding: 2px 4px;
  text-transform: uppercase;
`;

export const Tag = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren<ITagProps>) => {
  return (
    <TagElm
      className={`${className || ""}`}
      {...rest}>
      {children}
    </TagElm>
  );
};