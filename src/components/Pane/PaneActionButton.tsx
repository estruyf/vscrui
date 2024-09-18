import * as React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { Icons } from '../Icon/Icons';

export interface IPaneActionButtonProps {
  iconName: keyof typeof Icons;
  onClick: () => void;
}

const ActionElm = styled.button`
  all: unset;

  color: var(--vscode-icon-foreground);
  font-size: 16px;
  padding: 2px;
  margin-right: 4px;

  background: none;
  border: none;
  cursor: pointer;
  border-radius: 2px;

  align-items: center;
  display: flex;
  height: 16px;
  width: 16px;

  &:hover {
    background-color: var(--vscode-toolbar-hoverBackground);
  }
`;

export const PaneActionButton = ({
  iconName,
  onClick,
}: React.PropsWithChildren<IPaneActionButtonProps>) => {

  const onActionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  return (
    <ActionElm onClick={onActionClick}>
      <Icon name={iconName} />
    </ActionElm>
  );
};