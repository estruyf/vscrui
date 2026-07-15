import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';

export interface ILoaderProps extends BaseComponentProps {
  /**
   * When `true` (default), the loader renders a full-page overlay behind the
   * progress bar. Set to `false` to show only the progress bar at the top.
   */
  overlay?: boolean;
}

const LoaderBgElm = styled.div`
  background: var(--vscode-editor-background);
  position: fixed;
  inset: 0;
  height: 100%;
  width: 100%;
  z-index: 9999;
  opacity: 0.75;
`;

const LoaderElm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 9999;
`;

const LoaderLineElm = styled.div`
  height: 100%;
  position: absolute;
  background: var(--vscode-activityBarBadge-background);
  animation: vscode-loader 4s ease-in-out infinite; 

  @keyframes vscode-loader {
    0% {
      left: -30px;
      width: 30px;
    }
    25% {
      width: 50px;
    }
    50% {
      width: 20px;
    }
    75% {
      width: 50px;
    }
    100% {
      width: 20px;
      left: 100%;
    }
  }
`;

const Loader = ({
  className,
  overlay = true,
  ...rest
}: React.PropsWithChildren<ILoaderProps>) => {
  const progressBar = (
    <LoaderElm>
      <LoaderLineElm />
    </LoaderElm>
  );

  if (!overlay) {
    return (
      <div className={`vscrui-loader ${className || ""}`} {...rest}>
        {progressBar}
      </div>
    );
  }

  return (
    <LoaderBgElm className={`vscrui-loader ${className || ""}`} {...rest}>
      {progressBar}
    </LoaderBgElm>
  );
};

Loader.displayName = 'VSCRUI_Loader';
export { Loader };