import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';

export interface ITableCellProps extends BaseComponentProps { }

const TableCellElm = styled.div`
  display: grid;
  padding: 1px 0;
  box-sizing: border-box;
  width: 100%;
  background: transparent;
`;

export const TableCell = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren<ITableCellProps>) => {
  return (
    <TableCellElm
      className={`vscrui_table_cell ${className || ""}`}
      {...rest}
    >
      {children}
    </TableCellElm>
  );
};