import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';

export interface IDividerProps extends BaseComponentProps { }

const HrElm = styled.hr`
  border: none;
  border-top: 1px solid var(--vscode-settings-dropdownListBorder);
  box-sizing: content-box;
  height: 0;
  margin: 4px 0;
  width: 100%;
`;

export const Divider: React.FunctionComponent<IDividerProps> = ({
  className,
  ...rest
}: React.PropsWithChildren<IDividerProps>) => {
  return (
    <HrElm className={`${className || ""}`} {...rest} />
  );
};