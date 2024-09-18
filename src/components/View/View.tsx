import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';

export interface IViewProps extends BaseComponentProps {
  isVisible?: boolean;
}

const ViewElm = styled.section<{ isVisible?: boolean }>`
  color: inherit;
  background-color: transparent;
  border: 1px solid transparent;
  box-sizing: border-box;
  font-size: var(--vscode-font-size, 13px);
  line-height: normal;
  padding: 10px 6px;
  display: ${props => (props.isVisible ? 'block' : 'none')};
  height: ${props => (props.isVisible ? 'auto' : '0')};
  transition: all 0.1s;
  transition-behavior: allow-discrete;
`;

export const View = ({
  className,
  children,
  isVisible,
  ...rest
}: React.PropsWithChildren<IViewProps>) => {
  return (
    <ViewElm
      className={`vscrui-view ${className || ''}`}
      isVisible={isVisible}
      {...rest}>
      {children}
    </ViewElm>
  );
};