import * as React from 'react';
import { BaseComponentProps } from '../../models';
import { TableRow } from '.';
import styled from 'styled-components';

export interface ITableProps extends BaseComponentProps { }

const TableElm = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

const Table = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren<ITableProps>) => {

  const headerRow = React.useMemo(() => {
    return React.Children.toArray(children).find((child) => {
      return React.isValidElement(child) && child.type === TableRow && child.props.isHeader;
    });
  }, [children]);

  const otherRows = React.useMemo(() => {
    return React.Children.toArray(children).filter((child) => {
      return React.isValidElement(child) && child.type === TableRow && !child.props.isHeader;
    });
  }, [children]);

  return (
    <TableElm
      className={`vscrui_table ${className || ""}`}
      {...rest}
    >
      {headerRow}

      {otherRows}
    </TableElm>
  );
};

Table.displayName = 'VSCRUI_Table';
export { Table };