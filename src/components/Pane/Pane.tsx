import * as React from 'react';
import styled from 'styled-components';
import { PaneHeader } from './PaneHeader';
import { View } from '../View';
import { BaseComponentProps } from '../../models';
import { Icons } from '../Icon/Icons';

export interface PaneAction {
  iconName: keyof typeof Icons;
  onClick: () => void;
}

export interface IPaneProps extends Omit<BaseComponentProps, 'onClick'> {
  open?: boolean;
  title: string;
  actions?: PaneAction[];
  onClick?: (isOpen: boolean) => void;
}

const PaneElm = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const ViewStyled = styled(View)`
  flex: 1;
  overflow: hidden;
  padding: unset;
`;

const Pane = ({
  actions = [],
  children,
  open = false,
  title,
  onClick,
}: React.PropsWithChildren<IPaneProps>) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onOpen = React.useCallback(() => {
    setIsOpen(!isOpen);
    onClick && onClick(!isOpen);
  }, [isOpen, onClick]);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <PaneElm>
      <PaneHeader
        actions={actions}
        open={isOpen}
        triggerOpen={onOpen}>
        {title}
      </PaneHeader>

      <ViewStyled isVisible={isOpen}>
        {children}
      </ViewStyled>
    </PaneElm>
  );
};

Pane.displayName = 'VSCRUI_Pane';
export { Pane };