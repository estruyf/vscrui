import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';

export interface IViewProps extends BaseComponentProps {
  isVisible?: boolean;
}

const ViewElm = styled.section<{ hidden?: boolean }>`
  color: inherit;
  background-color: transparent;
  border: 1px solid transparent;
  box-sizing: border-box;
  font-size: var(--vscode-font-size, 13px);
  line-height: normal;
  padding: 10px 6px;
  display: ${props => (props.hidden ? 'none' : 'block')};
  height: ${props => (props.hidden ? '0' : 'auto')};
  transition: all 0.1s;
  transition-behavior: allow-discrete;
`;

const View = ({
  className,
  children,
  isVisible = false,
  ...rest
}: React.PropsWithChildren<IViewProps>) => {
  return (
    <ViewElm
      className={`vscrui-view ${className || ''}`}
      hidden={!isVisible}
      {...rest}>
      {children}
    </ViewElm>
  );
};

View.displayName = 'VSCRUI_View';
export { View };