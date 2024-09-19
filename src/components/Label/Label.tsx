import * as React from 'react';
import styled from 'styled-components';
import { BaseComponentProps } from '../../models';

type CombinedProps = React.LabelHTMLAttributes<HTMLLabelElement> & BaseComponentProps;

export interface ILabelProps extends CombinedProps { }

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

const Label = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren<ILabelProps>) => {
  return (
    <LabelElm
      className={`vscrui-label ${className || ""}`}
      {...rest}>
      {children}
    </LabelElm>
  );
};

Label.displayName = 'VSCRUI_Label';
export { Label };