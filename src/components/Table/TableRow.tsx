import * as React from 'react';
import { BaseComponentProps } from '../../models';
import { TableCell } from './TableCell';
import styled from 'styled-components';

export interface ITableRowProps extends BaseComponentProps {
  isHeader?: boolean;
}

const TableRowElm = styled.div`
  display: grid;
  padding: 1px 0;
  box-sizing: border-box;
  width: 100%;
  background: transparent;
`;

export const TableRow = ({
  children,
  className,
  isHeader,
  ...rest
}: React.PropsWithChildren<ITableRowProps>) => {

  const childs = React.useMemo(() => {
    // Only return TableCell components
    return React.Children.toArray(children).filter((child) => {
      return React.isValidElement(child) && child.type === TableCell;
    });
  }, [children]);

  const hasChildren = childs.length > 0;

  return (
    <TableRowElm
      className={`${isHeader ? 'vscrui_table_row_header' : 'vscrui_table_row'} ${className || ""}`}
      style={{
        gridTemplateColumns: hasChildren ? `repeat(${childs.length}, 1fr)` : '1fr'
      }}
      {...rest}
    >
      {childs}
    </TableRowElm>
  );
};