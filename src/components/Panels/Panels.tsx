import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';
import { Tab } from '../Tab';
import { View } from '../View';

export interface ITab {
  id: string;
  label: string;
}

export interface IView {
  id: string;
  content: React.ReactNode;
}

export interface IPanelsProps extends Omit<BaseComponentProps, 'children'> {
  tabs: ITab[];
  views: IView[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const WrapperElm = styled.div`
  color: var(--vscode-badge-foreground);
  font-family: var(--vscode-font-family);
  font-size: var(--vscode-font-size, 13px);
  box-sizing: border-box;
  line-height: normal;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr;
  overflow-x: auto;
`;

const TabListElm = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;
  column-gap: 32px;
  position: relative;
  width: max-content;
  align-self: end;
  padding: 4px 4px 0;
  box-sizing: border-box;
`;

const TabPanelElm = styled.div`
  grid-row: 2;
  grid-column-start: 1;
  grid-column-end: 4;
  position: relative;
`;

const Panels = ({
  className,
  tabs,
  views,
  activeTab,
  onTabChange,
  ...rest
}: React.PropsWithChildren<IPanelsProps>) => {
  const [selectedTab, setSelectedTab] = React.useState(activeTab);

  const tabIds = React.useMemo(() => tabs.map((tab) => tab.id), [tabs]);
  const viewIds = React.useMemo(() => views.map((view) => view.id), [views]);

  React.useEffect(() => {
    if (activeTab) {
      setSelectedTab(activeTab);
      return;
    }

    if (tabs && tabs.length) {
      const first = tabs[0];
      setSelectedTab(first.id);
      return;
    }
  }, [activeTab, tabs, views]);

  return (
    <WrapperElm
      className={`vscrui-panels ${className || ""}`}
      aria-label="Panels"
      {...rest}
    >
      <TabListElm
        className={`vscrui-panels__tablist`}
        role="tablist">
        {tabs.map((tab) => (
          viewIds.includes(tab.id) && (
            <Tab
              key={tab.id}
              isSelected={tab.id === selectedTab}
              onClick={() => {
                setSelectedTab(tab.id);
                onTabChange && onTabChange(tab.id);
              }}
              style={{
                gridColumn: tabs.indexOf(tab) + 1,
              }}
              aria-label={tab.label}
              tabIndex={tab.id === selectedTab ? 0 : -1}>
              {tab.label}
            </Tab>
          )
        ))}
      </TabListElm>

      <TabPanelElm className='vscrui-panels__views'>
        {views.map((view) => (
          tabIds.includes(view.id) && (
            <View
              key={view.id}
              isVisible={view.id === selectedTab}
              role="tabpanel"
              aria-labelledby={view.id}
            >
              {view.content}
            </View>
          )
        ))}
      </TabPanelElm>
    </WrapperElm>
  );
};

Panels.displayName = 'VSCRUI_Panels';
export { Panels };