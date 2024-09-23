import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';
import { _TableCellElm, ITableCellProps, TableCell } from './TableCell';

export interface ITableRowProps extends BaseComponentProps {
  isHeader?: boolean;
}

export const _TableRowElm = styled.div`
  display: grid;
  padding: 1px 0;
  box-sizing: border-box;
  width: 100%;
  background: transparent;

  &:hover {
    background: var(--vscode-list-hoverBackground);
    outline: 1px dotted var(--vscode-contrastActiveBorder);
    outline-offset: -1px;
  }

  &.vscrui_table_row_header {
    ${_TableCellElm} {
      font-weight: 600;
    }
  }
`;

const TableRow = ({
  children,
  className,
  isHeader = false,
  ...rest
}: React.PropsWithChildren<ITableRowProps>) => {

  const childs = React.useMemo(() => {
    // Only return TableCell components
    return React.Children.toArray(children).filter((child) => {
      return React.isValidElement(child) && child.type === TableCell;
    }) as React.ReactElement<ITableCellProps>[];
  }, [children]);

  const hasChildren = React.useMemo(() => {
    return childs.length > 0;
  }, [childs]);

  const rowStyle = React.useMemo(() => {
    let colWidth: string[] = [];
    childs.forEach((child) => {
      console.log('child', child);
      if (child.props.colspan) {
        colWidth.push(`${child.props.colspan}fr`);
      } else {
        colWidth.push('1fr');
      }
    });
    return colWidth.join(' ');
  }, [childs, hasChildren]);

  return (
    <_TableRowElm
      className={`${isHeader ? 'vscrui_table_row vscrui_table_row_header' : 'vscrui_table_row'} ${className || ""}`}
      style={{
        gridTemplateColumns: rowStyle
      }}
      {...rest}
    >
      {childs}
    </_TableRowElm>
  );
};

TableRow.displayName = 'VSCRUI_TableRow';
export { TableRow };