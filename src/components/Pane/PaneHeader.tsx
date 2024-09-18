import * as React from 'react';
import styled from 'styled-components';
import { BaseComponentProps } from '../../models';
import { PaneAction, PaneActionButton } from '.';

export interface IPaneHeaderProps extends BaseComponentProps {
  actions?: PaneAction[];
  open: boolean;
  triggerOpen: () => void;
}

const ActionsElm = styled.div`
  display: none;
  margin-left: auto;
`;

const HeaderElm = styled.div`
  font-family: var(--vscode-font-family);
  font-size: 11px;
  font-weight: 700;
  color: var(--vscode-sideBarSectionHeader-foreground);
  background-color: var(--vscode-sideBarSectionHeader-background);
  border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
  text-transform: uppercase;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 22px;
  line-height: 22px;
  width: 100%;
  cursor: pointer;

  position: relative;
  overflow: hidden;
  user-select: none;

  > svg {
    color: var(--vscode-icon-foreground);
    margin: 0 2px;
  }

  &:hover {
    ${ActionsElm} {
      display: flex;
    }
  }
`;

const ChevronRight = <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619z" clipRule="evenodd"></path></svg>;

const ChevronDown = <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="m7.976 10.072l4.357-4.357l.62.618L8.284 11h-.618L3 6.333l.619-.618z" clipRule="evenodd"></path></svg>;

const HeadingElm = styled.h3`
  font-size: 11px;
  font-weight: 700;
  min-width: 3ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`;

export const PaneHeader = ({
  actions,
  children,
  open,
  triggerOpen,
}: React.PropsWithChildren<IPaneHeaderProps>) => {
  return (
    <HeaderElm
      role="button"
      onClick={triggerOpen}>
      {open ? ChevronDown : ChevronRight}

      <HeadingElm>
        {children}
      </HeadingElm>

      {
        actions && actions.length > 0 && (
          <ActionsElm>
            {
              actions.map((action, index) => (
                <PaneActionButton
                  key={index}
                  iconName={action.iconName}
                  onClick={action.onClick}
                />
              ))
            }
          </ActionsElm>
        )
      }
    </HeaderElm>
  );
};