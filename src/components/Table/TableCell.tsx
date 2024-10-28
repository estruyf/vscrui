import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';

export interface ITableCellProps extends BaseComponentProps {
  colspan?: number;
}

export const _TableCellElm = styled.div`
  color: var(--vscode-foreground);
  font-family: var(--vscode-font-family);
  font-size: var(--vscode-font-size);
  padding: 4px 12px;
  opacity: 1;
  box-sizing: border-box;
  line-height: normal;
  font-weight: 400;
  border: solid 1px transparent;
  border-radius: 2px;
  white-space: wrap;
  overflow-wrap: anywhere;
`;

const TableCell = ({
  children,
  className,
  colspan,
  ...rest
}: React.PropsWithChildren<ITableCellProps>) => {
  return (
    <_TableCellElm
      className={`vscrui_table_cell ${className || ""}`}
      {...rest}
    >
      {children}
    </_TableCellElm>
  );
};

TableCell.displayName = 'VSCRUI_TableCell';
export { TableCell };