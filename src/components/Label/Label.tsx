import * as React from 'react';
import styled from 'styled-components';
import { BaseComponentProps } from '../../models';

export interface ILabelProps extends BaseComponentProps { }

const LabelElm = styled.label`
  color: var(--vscode-foreground);
  font-family: var(--vscode-font-family);
  font-size: var(--vscode-font-size);
  font-weight: 400;
  margin: 0;
  overflow: hidden;
  padding: 4px 0 0;
  text-overflow: ellipsis;
  display: block;
  white-space: nowrap;
`;

export const Label = ({
  children,
  className
}: React.PropsWithChildren<ILabelProps>) => {
  return (
    <LabelElm className={`${className || ""}`}>
      {children}
    </LabelElm>
  );
};