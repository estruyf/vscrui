import { createGlobalStyle, css } from "styled-components";

const theme = createGlobalStyle(
  () => css`
    :root {
      --text-link-decoration: none;
      --vscode-font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      --vscode-font-weight: normal;
      --vscode-font-size: 13px;
      --vscode-editor-font-family: Menlo, Monaco, "Courier New", monospace;
      --vscode-editor-font-weight: normal;
      --vscode-editor-font-size: 13px;
      --vscode-foreground: #ffffff;
      --vscode-disabledForeground: #a5a5a5;
      --vscode-errorForeground: #f48771;
      --vscode-descriptionForeground: rgba(255, 255, 255, 0.7);
      --vscode-icon-foreground: #ffffff;
      --vscode-focusBorder: #f38518;
      --vscode-contrastBorder: #6fc3df;
      --vscode-contrastActiveBorder: #f38518;
      --vscode-selection-background: #008000;
      --vscode-textLink-foreground: #21a6ff;
      --vscode-textLink-activeForeground: #21a6ff;
      --vscode-textSeparator-foreground: #000000;
      --vscode-textPreformat-foreground: #000000;
      --vscode-textPreformat-background: #ffffff;
      --vscode-textBlockQuote-border: #ffffff;
      --vscode-textCodeBlock-background: #000000;
      --vscode-sash-hoverBorder: #f38518;
      --vscode-badge-background: #000000;
      --vscode-badge-foreground: #ffffff;
      --vscode-scrollbarSlider-background: rgba(111, 195, 223, 0.6);
      --vscode-scrollbarSlider-hoverBackground: rgba(111, 195, 223, 0.8);
      --vscode-scrollbarSlider-activeBackground: #6fc3df;
      --vscode-progressBar-background: #6fc3df;
      --vscode-editor-background: #000000;
      --vscode-editor-foreground: #ffffff;
      --vscode-editorStickyScroll-background: #000000;
      --vscode-editorStickyScroll-border: #6fc3df;
      --vscode-editorWidget-background: #0c141f;
      --vscode-editorWidget-foreground: #ffffff;
      --vscode-editorWidget-border: #6fc3df;
      --vscode-editorError-foreground: #f48771;
      --vscode-editorError-border: rgba(228, 119, 119, 0.8);
      --vscode-editorWarning-foreground: #ffd370;
      --vscode-editorWarning-border: rgba(255, 204, 0, 0.8);
      --vscode-editorInfo-foreground: #3794ff;
      --vscode-editorInfo-border: rgba(55, 148, 255, 0.8);
      --vscode-editorHint-border: rgba(238, 238, 238, 0.8);
      --vscode-editorLink-activeForeground: #00ffff;
      --vscode-editor-selectionBackground: #ffffff;
      --vscode-editor-selectionForeground: #000000;
      --vscode-editor-inactiveSelectionBackground: rgba(255, 255, 255, 0.7);
      --vscode-editor-selectionHighlightBorder: #f38518;
      --vscode-editor-findMatchBorder: #f38518;
      --vscode-editor-findMatchHighlightBorder: #f38518;
      --vscode-editor-findRangeHighlightBorder: rgba(243, 133, 24, 0.4);
      --vscode-editor-hoverHighlightBackground: rgba(173, 214, 255, 0.15);
      --vscode-editorHoverWidget-background: #0c141f;
      --vscode-editorHoverWidget-foreground: #ffffff;
      --vscode-editorHoverWidget-border: #6fc3df;
      --vscode-editorHoverWidget-statusBarBackground: #0c141f;
      --vscode-editorInlayHint-foreground: #ffffff;
      --vscode-editorInlayHint-background: rgba(255, 255, 255, 0.1);
      --vscode-editorInlayHint-typeForeground: #ffffff;
      --vscode-editorInlayHint-typeBackground: rgba(255, 255, 255, 0.1);
      --vscode-editorInlayHint-parameterForeground: #ffffff;
      --vscode-editorInlayHint-parameterBackground: rgba(255, 255, 255, 0.1);
      --vscode-editorLightBulb-foreground: #ffcc00;
      --vscode-editorLightBulbAutoFix-foreground: #75beff;
      --vscode-editorLightBulbAi-foreground: #ffcc00;
      --vscode-editor-snippetTabstopHighlightBackground: rgba(
        124,
        124,
        124,
        0.3
      );
      --vscode-editor-snippetFinalTabstopHighlightBorder: #525252;
      --vscode-diffEditor-insertedTextBorder: #33ff2e;
      --vscode-diffEditor-removedTextBorder: #ff008f;
      --vscode-diffEditor-border: #6fc3df;
      --vscode-diffEditor-unchangedRegionBackground: #000000;
      --vscode-diffEditor-unchangedRegionForeground: #ffffff;
      --vscode-widget-border: #6fc3df;
      --vscode-toolbar-hoverOutline: #f38518;
      --vscode-breadcrumb-foreground: rgba(255, 255, 255, 0.8);
      --vscode-breadcrumb-background: #000000;
      --vscode-breadcrumb-focusForeground: #ffffff;
      --vscode-breadcrumb-activeSelectionForeground: #ffffff;
      --vscode-breadcrumbPicker-background: #0c141f;
      --vscode-merge-border: #c3df6f;
      --vscode-editorOverviewRuler-currentContentForeground: #c3df6f;
      --vscode-editorOverviewRuler-incomingContentForeground: #c3df6f;
      --vscode-editorOverviewRuler-commonContentForeground: #c3df6f;
      --vscode-editorOverviewRuler-findMatchForeground: #ab5a00;
      --vscode-editorOverviewRuler-selectionHighlightForeground: rgba(
        160,
        160,
        160,
        0.8
      );
      --vscode-problemsErrorIcon-foreground: #f48771;
      --vscode-problemsWarningIcon-foreground: #ffd370;
      --vscode-problemsInfoIcon-foreground: #3794ff;
      --vscode-input-background: #000000;
      --vscode-input-foreground: #ffffff;
      --vscode-input-border: #6fc3df;
      --vscode-inputOption-activeBorder: #6fc3df;
      --vscode-inputOption-activeBackground: rgba(0, 0, 0, 0);
      --vscode-inputOption-activeForeground: #ffffff;
      --vscode-input-placeholderForeground: rgba(255, 255, 255, 0.7);
      --vscode-inputValidation-infoBackground: #000000;
      --vscode-inputValidation-infoBorder: #6fc3df;
      --vscode-inputValidation-warningBackground: #000000;
      --vscode-inputValidation-warningBorder: #6fc3df;
      --vscode-inputValidation-errorBackground: #000000;
      --vscode-inputValidation-errorBorder: #6fc3df;
      --vscode-dropdown-background: #000000;
      --vscode-dropdown-listBackground: #000000;
      --vscode-dropdown-foreground: #ffffff;
      --vscode-dropdown-border: #6fc3df;
      --vscode-button-foreground: #ffffff;
      --vscode-button-separator: rgba(255, 255, 255, 0.4);
      --vscode-button-border: #6fc3df;
      --vscode-button-secondaryForeground: #ffffff;
      --vscode-radio-activeForeground: #ffffff;
      --vscode-radio-activeBackground: rgba(0, 0, 0, 0);
      --vscode-radio-activeBorder: #6fc3df;
      --vscode-radio-inactiveBorder: rgba(255, 255, 255, 0.4);
      --vscode-checkbox-background: #000000;
      --vscode-checkbox-selectBackground: #0c141f;
      --vscode-checkbox-foreground: #ffffff;
      --vscode-checkbox-border: #6fc3df;
      --vscode-checkbox-selectBorder: #ffffff;
      --vscode-keybindingLabel-background: rgba(0, 0, 0, 0);
      --vscode-keybindingLabel-foreground: #ffffff;
      --vscode-keybindingLabel-border: #6fc3df;
      --vscode-keybindingLabel-bottomBorder: #6fc3df;
      --vscode-list-focusOutline: #f38518;
      --vscode-list-hoverBackground: rgba(255, 255, 255, 0.1);
      --vscode-list-highlightForeground: #f38518;
      --vscode-list-focusHighlightForeground: #f38518;
      --vscode-list-invalidItemForeground: #b89500;
      --vscode-listFilterWidget-background: #0c141f;
      --vscode-listFilterWidget-outline: #f38518;
      --vscode-listFilterWidget-noMatchesOutline: #6fc3df;
      --vscode-list-filterMatchBorder: #6fc3df;
      --vscode-list-deemphasizedForeground: #a7a8a9;
      --vscode-tree-indentGuidesStroke: #a9a9a9;
      --vscode-tree-inactiveIndentGuidesStroke: rgba(169, 169, 169, 0.4);
      --vscode-menu-border: #6fc3df;
      --vscode-menu-foreground: #ffffff;
      --vscode-menu-background: #000000;
      --vscode-menu-selectionBorder: #f38518;
      --vscode-menu-separatorBackground: #6fc3df;
      --vscode-minimap-findMatchHighlight: #ab5a00;
      --vscode-minimap-selectionOccurrenceHighlight: #ffffff;
      --vscode-minimap-selectionHighlight: #ffffff;
      --vscode-minimap-infoHighlight: rgba(55, 148, 255, 0.8);
      --vscode-minimap-warningHighlight: rgba(255, 204, 0, 0.8);
      --vscode-minimap-errorHighlight: #ff3232;
      --vscode-minimap-foregroundOpacity: #000000;
      --vscode-minimapSlider-background: rgba(111, 195, 223, 0.3);
      --vscode-minimapSlider-hoverBackground: rgba(111, 195, 223, 0.4);
      --vscode-minimapSlider-activeBackground: rgba(111, 195, 223, 0.5);
      --vscode-charts-foreground: #ffffff;
      --vscode-charts-lines: rgba(255, 255, 255, 0.5);
      --vscode-charts-red: #f48771;
      --vscode-charts-blue: #3794ff;
      --vscode-charts-yellow: #ffd370;
      --vscode-charts-orange: #ab5a00;
      --vscode-charts-green: #89d185;
      --vscode-charts-purple: #b180d7;
      --vscode-quickInput-background: #0c141f;
      --vscode-quickInput-foreground: #ffffff;
      --vscode-quickInputTitle-background: #000000;
      --vscode-pickerGroup-foreground: #ffffff;
      --vscode-pickerGroup-border: #ffffff;
      --vscode-search-resultsInfoForeground: #ffffff;
      --vscode-searchEditor-findMatchBorder: #f38518;
      --vscode-multiDiffEditor-border: #6fc3df;
      --vscode-symbolIcon-arrayForeground: #ffffff;
      --vscode-symbolIcon-booleanForeground: #ffffff;
      --vscode-symbolIcon-classForeground: #ee9d28;
      --vscode-symbolIcon-colorForeground: #ffffff;
      --vscode-symbolIcon-constantForeground: #ffffff;
      --vscode-symbolIcon-constructorForeground: #b180d7;
      --vscode-symbolIcon-enumeratorForeground: #ee9d28;
      --vscode-symbolIcon-enumeratorMemberForeground: #75beff;
      --vscode-symbolIcon-eventForeground: #ee9d28;
      --vscode-symbolIcon-fieldForeground: #75beff;
      --vscode-symbolIcon-fileForeground: #ffffff;
      --vscode-symbolIcon-folderForeground: #ffffff;
      --vscode-symbolIcon-functionForeground: #b180d7;
      --vscode-symbolIcon-interfaceForeground: #75beff;
      --vscode-symbolIcon-keyForeground: #ffffff;
      --vscode-symbolIcon-keywordForeground: #ffffff;
      --vscode-symbolIcon-methodForeground: #b180d7;
      --vscode-symbolIcon-moduleForeground: #ffffff;
      --vscode-symbolIcon-namespaceForeground: #ffffff;
      --vscode-symbolIcon-nullForeground: #ffffff;
      --vscode-symbolIcon-numberForeground: #ffffff;
      --vscode-symbolIcon-objectForeground: #ffffff;
      --vscode-symbolIcon-operatorForeground: #ffffff;
      --vscode-symbolIcon-packageForeground: #ffffff;
      --vscode-symbolIcon-propertyForeground: #ffffff;
      --vscode-symbolIcon-referenceForeground: #ffffff;
      --vscode-symbolIcon-snippetForeground: #ffffff;
      --vscode-symbolIcon-stringForeground: #ffffff;
      --vscode-symbolIcon-structForeground: #ffffff;
      --vscode-symbolIcon-textForeground: #ffffff;
      --vscode-symbolIcon-typeParameterForeground: #ffffff;
      --vscode-symbolIcon-unitForeground: #ffffff;
      --vscode-symbolIcon-variableForeground: #75beff;
      --vscode-actionBar-toggledBackground: #383a49;
      --vscode-editorHoverWidget-highlightForeground: #f38518;
      --vscode-editor-lineHighlightBorder: #f38518;
      --vscode-editor-rangeHighlightBorder: #f38518;
      --vscode-editor-symbolHighlightBorder: #f38518;
      --vscode-editorCursor-foreground: #ffffff;
      --vscode-editorMultiCursor-primary\.foreground: #ffffff;
      --vscode-editorMultiCursor-secondary\.foreground: #ffffff;
      --vscode-editorWhitespace-foreground: #7c7c7c;
      --vscode-editorLineNumber-foreground: #ffffff;
      --vscode-editorIndentGuide-background: #7c7c7c;
      --vscode-editorIndentGuide-activeBackground: #7c7c7c;
      --vscode-editorIndentGuide-background1: #ffffff;
      --vscode-editorIndentGuide-background2: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-background3: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-background4: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-background5: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-background6: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground1: #ffffff;
      --vscode-editorIndentGuide-activeBackground2: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground3: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground4: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground5: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground6: rgba(0, 0, 0, 0);
      --vscode-editorActiveLineNumber-foreground: #f38518;
      --vscode-editorLineNumber-activeForeground: #f38518;
      --vscode-editorRuler-foreground: #ffffff;
      --vscode-editorCodeLens-foreground: #999999;
      --vscode-editorBracketMatch-background: rgba(0, 100, 0, 0.1);
      --vscode-editorBracketMatch-border: #6fc3df;
      --vscode-editorOverviewRuler-border: rgba(127, 127, 127, 0.3);
      --vscode-editorGutter-background: #000000;
      --vscode-editorUnnecessaryCode-border: rgba(255, 255, 255, 0.8);
      --vscode-editorGhostText-border: rgba(255, 255, 255, 0.8);
      --vscode-editorOverviewRuler-rangeHighlightForeground: rgba(
        0,
        122,
        204,
        0.6
      );
      --vscode-editorOverviewRuler-errorForeground: #ff3232;
      --vscode-editorOverviewRuler-warningForeground: rgba(255, 204, 0, 0.8);
      --vscode-editorOverviewRuler-infoForeground: rgba(55, 148, 255, 0.8);
      --vscode-editorBracketHighlight-foreground1: #ffd700;
      --vscode-editorBracketHighlight-foreground2: #da70d6;
      --vscode-editorBracketHighlight-foreground3: #87cefa;
      --vscode-editorBracketHighlight-foreground4: rgba(0, 0, 0, 0);
      --vscode-editorBracketHighlight-foreground5: rgba(0, 0, 0, 0);
      --vscode-editorBracketHighlight-foreground6: rgba(0, 0, 0, 0);
      --vscode-editorBracketHighlight-unexpectedBracket\.foreground: #ff3232;
      --vscode-editorBracketPairGuide-background1: rgba(0, 0, 0, 0);
      --vscode-editorBracketPairGuide-background2: rgba(0, 0, 0, 0);
      --vscode-editorBracketPairGuide-background3: rgba(0, 0, 0, 0);
      --vscode-editorBracketPairGuide-background4: rgba(0, 0, 0, 0);
      --vscode-editorBracketPairGuide-background5: rgba(0, 0, 0, 0);
      --vscode-editorBracketPairGuide-background6: rgba(0, 0, 0, 0);
      --vscode-editorBracketPairGuide-activeBackground1: rgba(0, 0, 0, 0);
      --vscode-editorBracketPairGuide-activeBackground2: rgba(0, 0, 0, 0);
      --vscode-editorBracketPairGuide-activeBackground3: rgba(0, 0, 0, 0);
      --vscode-editorBracketPairGuide-activeBackground4: rgba(0, 0, 0, 0);
      --vscode-editorBracketPairGuide-activeBackground5: rgba(0, 0, 0, 0);
      --vscode-editorBracketPairGuide-activeBackground6: rgba(0, 0, 0, 0);
      --vscode-editorUnicodeHighlight-border: #ffd370;
      --vscode-diffEditor-move\.border: rgba(139, 139, 139, 0.61);
      --vscode-diffEditor-moveActive\.border: #ffa500;
      --vscode-diffEditor-unchangedRegionShadow: #000000;
      --vscode-editorOverviewRuler-bracketMatchForeground: #a0a0a0;
      --vscode-editorGutter-foldingControlForeground: #ffffff;
      --vscode-editor-linkedEditingBackground: rgba(255, 0, 0, 0.3);
      --vscode-editor-wordHighlightBorder: #f38518;
      --vscode-editor-wordHighlightStrongBorder: #f38518;
      --vscode-editor-wordHighlightTextBorder: #f38518;
      --vscode-editorOverviewRuler-wordHighlightForeground: rgba(
        160,
        160,
        160,
        0.8
      );
      --vscode-editorOverviewRuler-wordHighlightStrongForeground: rgba(
        192,
        160,
        192,
        0.8
      );
      --vscode-editorOverviewRuler-wordHighlightTextForeground: rgba(
        160,
        160,
        160,
        0.8
      );
      --vscode-peekViewTitle-background: #000000;
      --vscode-peekViewTitleLabel-foreground: #ffffff;
      --vscode-peekViewTitleDescription-foreground: rgba(255, 255, 255, 0.6);
      --vscode-peekView-border: #6fc3df;
      --vscode-peekViewResult-background: #000000;
      --vscode-peekViewResult-lineForeground: #ffffff;
      --vscode-peekViewResult-fileForeground: #ffffff;
      --vscode-peekViewResult-selectionForeground: #ffffff;
      --vscode-peekViewEditor-background: #000000;
      --vscode-peekViewEditorGutter-background: #000000;
      --vscode-peekViewEditorStickyScroll-background: #000000;
      --vscode-peekViewEditor-matchHighlightBorder: #f38518;
      --vscode-editorMarkerNavigationError-background: #6fc3df;
      --vscode-editorMarkerNavigationWarning-background: #6fc3df;
      --vscode-editorMarkerNavigationWarning-headerBackground: #0c141f;
      --vscode-editorMarkerNavigationInfo-background: #6fc3df;
      --vscode-editorMarkerNavigation-background: #000000;
      --vscode-editorSuggestWidget-background: #0c141f;
      --vscode-editorSuggestWidget-border: #6fc3df;
      --vscode-editorSuggestWidget-foreground: #ffffff;
      --vscode-editorSuggestWidget-highlightForeground: #f38518;
      --vscode-editorSuggestWidget-focusHighlightForeground: #f38518;
      --vscode-editorSuggestWidgetStatus-foreground: rgba(255, 255, 255, 0.5);
      --vscode-editorWatermark-foreground: #ffffff;
      --vscode-tab-activeBackground: #000000;
      --vscode-tab-unfocusedActiveBackground: #000000;
      --vscode-tab-activeForeground: #ffffff;
      --vscode-tab-inactiveForeground: #ffffff;
      --vscode-tab-unfocusedActiveForeground: #ffffff;
      --vscode-tab-unfocusedInactiveForeground: #ffffff;
      --vscode-tab-border: #6fc3df;
      --vscode-tab-lastPinnedBorder: #6fc3df;
      --vscode-tab-selectedBackground: #000000;
      --vscode-tab-selectedForeground: #ffffff;
      --vscode-tab-dragAndDropBorder: #f38518;
      --vscode-tab-inactiveModifiedBorder: #ffffff;
      --vscode-tab-unfocusedActiveModifiedBorder: #ffffff;
      --vscode-tab-unfocusedInactiveModifiedBorder: #ffffff;
      --vscode-editorPane-background: #000000;
      --vscode-editorGroup-focusedEmptyBorder: #f38518;
      --vscode-editorGroupHeader-noTabsBackground: #000000;
      --vscode-editorGroupHeader-border: #6fc3df;
      --vscode-editorGroup-border: #6fc3df;
      --vscode-editorGroup-dropIntoPromptForeground: #ffffff;
      --vscode-editorGroup-dropIntoPromptBackground: #0c141f;
      --vscode-editorGroup-dropIntoPromptBorder: #6fc3df;
      --vscode-sideBySideEditor-horizontalBorder: #6fc3df;
      --vscode-sideBySideEditor-verticalBorder: #6fc3df;
      --vscode-panel-background: #000000;
      --vscode-panel-border: #6fc3df;
      --vscode-panelTitle-activeForeground: #ffffff;
      --vscode-panelTitle-inactiveForeground: #ffffff;
      --vscode-panelTitle-activeBorder: #6fc3df;
      --vscode-panelInput-border: #6fc3df;
      --vscode-panel-dropBorder: #ffffff;
      --vscode-panelSectionHeader-border: #6fc3df;
      --vscode-panelSection-border: #6fc3df;
      --vscode-panelStickyScroll-background: #000000;
      --vscode-banner-iconForeground: #3794ff;
      --vscode-statusBar-foreground: #ffffff;
      --vscode-statusBar-noFolderForeground: #ffffff;
      --vscode-statusBar-border: #6fc3df;
      --vscode-statusBar-noFolderBorder: #6fc3df;
      --vscode-statusBarItem-activeBackground: rgba(255, 255, 255, 0.18);
      --vscode-statusBarItem-hoverBackground: rgba(255, 255, 255, 0.12);
      --vscode-statusBarItem-hoverForeground: #ffffff;
      --vscode-statusBarItem-compactHoverBackground: rgba(255, 255, 255, 0.2);
      --vscode-statusBarItem-prominentForeground: #ffffff;
      --vscode-statusBarItem-prominentBackground: rgba(0, 0, 0, 0.5);
      --vscode-statusBarItem-prominentHoverForeground: #ffffff;
      --vscode-statusBarItem-prominentHoverBackground: rgba(0, 0, 0, 0.3);
      --vscode-statusBarItem-errorForeground: #ffffff;
      --vscode-statusBarItem-errorHoverForeground: #ffffff;
      --vscode-statusBarItem-errorHoverBackground: rgba(255, 255, 255, 0.12);
      --vscode-statusBarItem-warningForeground: #ffffff;
      --vscode-statusBarItem-warningHoverForeground: #ffffff;
      --vscode-statusBarItem-warningHoverBackground: rgba(255, 255, 255, 0.12);
      --vscode-activityBar-background: #000000;
      --vscode-activityBar-foreground: #ffffff;
      --vscode-activityBar-inactiveForeground: #ffffff;
      --vscode-activityBar-border: #6fc3df;
      --vscode-activityBar-activeBorder: #6fc3df;
      --vscode-activityBarBadge-background: #000000;
      --vscode-activityBarBadge-foreground: #ffffff;
      --vscode-activityBarTop-foreground: #ffffff;
      --vscode-activityBarTop-activeBorder: #6fc3df;
      --vscode-activityBarTop-inactiveForeground: #ffffff;
      --vscode-activityBarTop-dropBorder: #ffffff;
      --vscode-profileBadge-background: #ffffff;
      --vscode-profileBadge-foreground: #000000;
      --vscode-statusBarItem-remoteBackground: rgba(0, 0, 0, 0);
      --vscode-statusBarItem-remoteForeground: #ffffff;
      --vscode-statusBarItem-remoteHoverForeground: #ffffff;
      --vscode-statusBarItem-remoteHoverBackground: rgba(255, 255, 255, 0.12);
      --vscode-statusBarItem-offlineBackground: #6c1717;
      --vscode-statusBarItem-offlineForeground: #ffffff;
      --vscode-statusBarItem-offlineHoverForeground: #ffffff;
      --vscode-statusBarItem-offlineHoverBackground: rgba(255, 255, 255, 0.12);
      --vscode-extensionBadge-remoteBackground: #000000;
      --vscode-extensionBadge-remoteForeground: #ffffff;
      --vscode-sideBar-background: #000000;
      --vscode-sideBar-border: #6fc3df;
      --vscode-sideBarTitle-background: #000000;
      --vscode-sideBarTitle-foreground: #ffffff;
      --vscode-sideBarSectionHeader-border: #6fc3df;
      --vscode-sideBarActivityBarTop-border: #6fc3df;
      --vscode-sideBarStickyScroll-background: #000000;
      --vscode-titleBar-activeForeground: #ffffff;
      --vscode-titleBar-activeBackground: #000000;
      --vscode-titleBar-border: #6fc3df;
      --vscode-menubar-selectionForeground: #ffffff;
      --vscode-menubar-selectionBorder: #f38518;
      --vscode-commandCenter-foreground: #ffffff;
      --vscode-commandCenter-activeForeground: #ffffff;
      --vscode-commandCenter-border: #6fc3df;
      --vscode-commandCenter-activeBorder: #ffffff;
      --vscode-notificationCenter-border: #6fc3df;
      --vscode-notificationToast-border: #6fc3df;
      --vscode-notifications-foreground: #ffffff;
      --vscode-notifications-background: #0c141f;
      --vscode-notificationLink-foreground: #21a6ff;
      --vscode-notificationCenterHeader-background: #0c141f;
      --vscode-notifications-border: #0c141f;
      --vscode-notificationsErrorIcon-foreground: #f48771;
      --vscode-notificationsWarningIcon-foreground: #ffd370;
      --vscode-notificationsInfoIcon-foreground: #3794ff;
      --vscode-window-activeBorder: #6fc3df;
      --vscode-window-inactiveBorder: #6fc3df;
      --vscode-chat-requestBorder: #6fc3df;
      --vscode-chat-requestBackground: #0c141f;
      --vscode-chat-slashCommandBackground: #ffffff;
      --vscode-chat-slashCommandForeground: #000000;
      --vscode-chat-avatarBackground: #000000;
      --vscode-chat-avatarForeground: #ffffff;
      --vscode-simpleFindWidget-sashBorder: #6fc3df;
      --vscode-commentsView-resolvedIcon: #6fc3df;
      --vscode-commentsView-unresolvedIcon: #6fc3df;
      --vscode-editorCommentsWidget-replyInputBackground: #000000;
      --vscode-editorCommentsWidget-resolvedBorder: #6fc3df;
      --vscode-editorCommentsWidget-unresolvedBorder: #6fc3df;
      --vscode-editorCommentsWidget-rangeBackground: rgba(111, 195, 223, 0.1);
      --vscode-editorCommentsWidget-rangeActiveBackground: rgba(
        111,
        195,
        223,
        0.1
      );
      --vscode-editorGutter-commentRangeForeground: #ffffff;
      --vscode-editorOverviewRuler-commentForeground: #ffffff;
      --vscode-editorOverviewRuler-commentUnresolvedForeground: #ffffff;
      --vscode-editorGutter-commentGlyphForeground: #000000;
      --vscode-editorGutter-commentUnresolvedGlyphForeground: #000000;
      --vscode-debugToolBar-background: #000000;
      --vscode-debugIcon-startForeground: #89d185;
      --vscode-editor-stackFrameHighlightBackground: rgba(255, 255, 0, 0.2);
      --vscode-editor-focusedStackFrameHighlightBackground: rgba(
        122,
        189,
        122,
        0.3
      );
      --vscode-inlineChat-foreground: #ffffff;
      --vscode-inlineChat-background: #0c141f;
      --vscode-inlineChat-border: #6fc3df;
      --vscode-inlineChatInput-border: #6fc3df;
      --vscode-inlineChatInput-focusBorder: #f38518;
      --vscode-inlineChatInput-placeholderForeground: rgba(255, 255, 255, 0.7);
      --vscode-inlineChatInput-background: #000000;
      --vscode-mergeEditor-change\.background: rgba(155, 185, 85, 0.2);
      --vscode-mergeEditor-change\.word\.background: rgba(156, 204, 44, 0.2);
      --vscode-mergeEditor-changeBase\.background: #4b1818;
      --vscode-mergeEditor-changeBase\.word\.background: #6f1313;
      --vscode-mergeEditor-conflict\.unhandledUnfocused\.border: rgba(
        255,
        166,
        0,
        0.48
      );
      --vscode-mergeEditor-conflict\.unhandledFocused\.border: #ffa600;
      --vscode-mergeEditor-conflict\.handledUnfocused\.border: rgba(
        134,
        134,
        134,
        0.29
      );
      --vscode-mergeEditor-conflict\.handledFocused\.border: rgba(
        193,
        193,
        193,
        0.8
      );
      --vscode-mergeEditor-conflict\.handled\.minimapOverViewRuler: rgba(
        173,
        172,
        168,
        0.93
      );
      --vscode-mergeEditor-conflict\.unhandled\.minimapOverViewRuler: #fcba03;
      --vscode-mergeEditor-conflictingLines\.background: rgba(
        255,
        234,
        0,
        0.28
      );
      --vscode-settings-headerForeground: #ffffff;
      --vscode-settings-settingsHeaderHoverForeground: rgba(255, 255, 255, 0.7);
      --vscode-settings-modifiedItemIndicator: #00497a;
      --vscode-settings-headerBorder: #6fc3df;
      --vscode-settings-sashBorder: #6fc3df;
      --vscode-settings-dropdownBackground: #000000;
      --vscode-settings-dropdownForeground: #ffffff;
      --vscode-settings-dropdownBorder: #6fc3df;
      --vscode-settings-dropdownListBorder: #6fc3df;
      --vscode-settings-checkboxBackground: #000000;
      --vscode-settings-checkboxForeground: #ffffff;
      --vscode-settings-checkboxBorder: #6fc3df;
      --vscode-settings-textInputBackground: #000000;
      --vscode-settings-textInputForeground: #ffffff;
      --vscode-settings-textInputBorder: #6fc3df;
      --vscode-settings-numberInputBackground: #000000;
      --vscode-settings-numberInputForeground: #ffffff;
      --vscode-settings-numberInputBorder: #6fc3df;
      --vscode-settings-focusedRowBorder: #f38518;
      --vscode-scm-historyGraph\.historyItemGroupLocal: #3794ff;
      --vscode-scm-historyGraph\.historyItemGroupRemote: #b180d7;
      --vscode-scm-historyGraph\.historyItemGroupBase: #ab5a00;
      --vscode-scm-historyGraph\.historyItemGroupHoverLabelForeground: #ffffff;
      --vscode-scm-historyGraph\.green: #89d185;
      --vscode-scm-historyGraph\.red: #f48771;
      --vscode-scm-historyGraph\.yellow: #ffd370;
      --vscode-terminal-foreground: #ffffff;
      --vscode-terminal-selectionBackground: #ffffff;
      --vscode-terminal-inactiveSelectionBackground: rgba(255, 255, 255, 0.7);
      --vscode-terminal-selectionForeground: #000000;
      --vscode-terminalCommandDecoration-defaultBackground: rgba(
        255,
        255,
        255,
        0.5
      );
      --vscode-terminalCommandDecoration-successBackground: #1b81a8;
      --vscode-terminalCommandDecoration-errorBackground: #f14c4c;
      --vscode-terminalOverviewRuler-cursorForeground: rgba(160, 160, 160, 0.8);
      --vscode-terminal-border: #6fc3df;
      --vscode-terminalOverviewRuler-border: rgba(127, 127, 127, 0.3);
      --vscode-terminal-hoverHighlightBackground: rgba(173, 214, 255, 0.07);
      --vscode-terminal-findMatchBorder: #f38518;
      --vscode-terminal-findMatchHighlightBorder: #f38518;
      --vscode-terminalOverviewRuler-findMatchForeground: #f38518;
      --vscode-terminalStickyScrollHover-background: #e48b39;
      --vscode-terminalStickyScroll-border: #6fc3df;
      --vscode-testing-iconFailed: #f14c4c;
      --vscode-testing-iconErrored: #f14c4c;
      --vscode-testing-iconPassed: #73c991;
      --vscode-testing-runAction: #73c991;
      --vscode-testing-iconQueued: #cca700;
      --vscode-testing-iconUnset: #848484;
      --vscode-testing-iconSkipped: #848484;
      --vscode-testing-peekBorder: #6fc3df;
      --vscode-testing-messagePeekBorder: #6fc3df;
      --vscode-testing-coveredBorder: #6fc3df;
      --vscode-testing-coveredGutterBackground: #89d185;
      --vscode-testing-uncoveredBorder: #6fc3df;
      --vscode-testing-uncoveredGutterBackground: #f48771;
      --vscode-testing-coverCountBadgeBackground: #000000;
      --vscode-testing-coverCountBadgeForeground: #ffffff;
      --vscode-testing-message\.error\.decorationForeground: #ffffff;
      --vscode-testing-message\.info\.decorationForeground: rgba(
        255,
        255,
        255,
        0.5
      );
      --vscode-testing-iconErrored\.retired: rgba(241, 76, 76, 0.7);
      --vscode-testing-iconFailed\.retired: rgba(241, 76, 76, 0.7);
      --vscode-testing-iconPassed\.retired: rgba(115, 201, 145, 0.7);
      --vscode-testing-iconQueued\.retired: rgba(204, 167, 0, 0.7);
      --vscode-testing-iconUnset\.retired: rgba(132, 132, 132, 0.7);
      --vscode-testing-iconSkipped\.retired: rgba(132, 132, 132, 0.7);
      --vscode-welcomePage-tileBackground: #000000;
      --vscode-welcomePage-tileBorder: #6fc3df;
      --vscode-welcomePage-progress\.background: #000000;
      --vscode-welcomePage-progress\.foreground: #21a6ff;
      --vscode-debugExceptionWidget-border: #a31515;
      --vscode-debugExceptionWidget-background: #420b0d;
      --vscode-statusBar-debuggingBackground: #ba592c;
      --vscode-statusBar-debuggingForeground: #ffffff;
      --vscode-statusBar-debuggingBorder: #6fc3df;
      --vscode-commandCenter-debuggingBackground: rgba(186, 89, 44, 0.26);
      --vscode-editorGutter-modifiedBackground: #1b81a8;
      --vscode-editorGutter-addedBackground: #487e02;
      --vscode-editorGutter-deletedBackground: #f48771;
      --vscode-minimapGutter-modifiedBackground: #1b81a8;
      --vscode-minimapGutter-addedBackground: #487e02;
      --vscode-minimapGutter-deletedBackground: #f48771;
      --vscode-editorOverviewRuler-modifiedForeground: rgba(27, 129, 168, 0.6);
      --vscode-editorOverviewRuler-addedForeground: rgba(72, 126, 2, 0.6);
      --vscode-editorOverviewRuler-deletedForeground: rgba(244, 135, 113, 0.6);
      --vscode-debugIcon-breakpointForeground: #e51400;
      --vscode-debugIcon-breakpointDisabledForeground: #848484;
      --vscode-debugIcon-breakpointUnverifiedForeground: #848484;
      --vscode-debugIcon-breakpointCurrentStackframeForeground: #ffcc00;
      --vscode-debugIcon-breakpointStackframeForeground: #89d185;
      --vscode-editor-inlineValuesForeground: rgba(255, 255, 255, 0.5);
      --vscode-editor-inlineValuesBackground: rgba(255, 200, 0, 0.2);
      --vscode-ports-iconRunningProcessForeground: #ffffff;
      --vscode-profiles-sashBorder: #6fc3df;
      --vscode-debugTokenExpression-name: #ffffff;
      --vscode-debugTokenExpression-type: #ffffff;
      --vscode-debugTokenExpression-value: #ffffff;
      --vscode-debugTokenExpression-string: #f48771;
      --vscode-debugTokenExpression-boolean: #75bdfe;
      --vscode-debugTokenExpression-number: #89d185;
      --vscode-debugTokenExpression-error: #f48771;
      --vscode-debugView-exceptionLabelForeground: #ffffff;
      --vscode-debugView-exceptionLabelBackground: #6c2022;
      --vscode-debugView-stateLabelForeground: #ffffff;
      --vscode-debugView-stateLabelBackground: rgba(136, 136, 136, 0.27);
      --vscode-debugView-valueChangedHighlight: #569cd6;
      --vscode-debugConsole-infoForeground: #ffffff;
      --vscode-debugConsole-warningForeground: #008000;
      --vscode-debugConsole-errorForeground: #f48771;
      --vscode-debugConsole-sourceForeground: #ffffff;
      --vscode-debugConsoleInputIcon-foreground: #ffffff;
      --vscode-debugIcon-pauseForeground: #75beff;
      --vscode-debugIcon-stopForeground: #f48771;
      --vscode-debugIcon-disconnectForeground: #f48771;
      --vscode-debugIcon-restartForeground: #89d185;
      --vscode-debugIcon-stepOverForeground: #75beff;
      --vscode-debugIcon-stepIntoForeground: #75beff;
      --vscode-debugIcon-stepOutForeground: #75beff;
      --vscode-debugIcon-continueForeground: #75beff;
      --vscode-debugIcon-stepBackForeground: #75beff;
      --vscode-scm-historyItemAdditionsForeground: #a1e3ad;
      --vscode-scm-historyItemDeletionsForeground: #c74e39;
      --vscode-scm-historyItemStatisticsBorder: rgba(255, 255, 255, 0.2);
      --vscode-extensionButton-separator: rgba(255, 255, 255, 0.4);
      --vscode-extensionIcon-starForeground: #ff8e00;
      --vscode-extensionIcon-verifiedForeground: #21a6ff;
      --vscode-extensionIcon-preReleaseForeground: #1d9271;
      --vscode-notebook-cellBorderColor: #6fc3df;
      --vscode-notebook-focusedEditorBorder: #f38518;
      --vscode-notebookStatusSuccessIcon-foreground: #89d185;
      --vscode-notebookEditorOverviewRuler-runningCellForeground: #89d185;
      --vscode-notebookStatusErrorIcon-foreground: #f48771;
      --vscode-notebookStatusRunningIcon-foreground: #ffffff;
      --vscode-notebook-cellToolbarSeparator: #6fc3df;
      --vscode-notebook-selectedCellBorder: #6fc3df;
      --vscode-notebook-inactiveSelectedCellBorder: #f38518;
      --vscode-notebook-focusedCellBorder: #f38518;
      --vscode-notebook-inactiveFocusedCellBorder: #6fc3df;
      --vscode-notebook-cellStatusBarItemHoverBackground: rgba(
        255,
        255,
        255,
        0.15
      );
      --vscode-notebook-cellInsertionIndicator: #f38518;
      --vscode-notebookScrollbarSlider-background: rgba(111, 195, 223, 0.6);
      --vscode-notebookScrollbarSlider-hoverBackground: rgba(
        111,
        195,
        223,
        0.8
      );
      --vscode-notebookScrollbarSlider-activeBackground: #6fc3df;
      --vscode-interactive-activeCodeBorder: #6fc3df;
      --vscode-interactive-inactiveCodeBorder: #6fc3df;
      --vscode-searchEditor-textInputBorder: #6fc3df;
      --vscode-terminal-ansiBlack: #000000;
      --vscode-terminal-ansiRed: #cd0000;
      --vscode-terminal-ansiGreen: #00cd00;
      --vscode-terminal-ansiYellow: #cdcd00;
      --vscode-terminal-ansiBlue: #0000ee;
      --vscode-terminal-ansiMagenta: #cd00cd;
      --vscode-terminal-ansiCyan: #00cdcd;
      --vscode-terminal-ansiWhite: #e5e5e5;
      --vscode-terminal-ansiBrightBlack: #7f7f7f;
      --vscode-terminal-ansiBrightRed: #ff0000;
      --vscode-terminal-ansiBrightGreen: #00ff00;
      --vscode-terminal-ansiBrightYellow: #ffff00;
      --vscode-terminal-ansiBrightBlue: #5c5cff;
      --vscode-terminal-ansiBrightMagenta: #ff00ff;
      --vscode-terminal-ansiBrightCyan: #00ffff;
      --vscode-terminal-ansiBrightWhite: #ffffff;
      --vscode-gitDecoration-addedResourceForeground: #a1e3ad;
      --vscode-gitDecoration-modifiedResourceForeground: #e2c08d;
      --vscode-gitDecoration-deletedResourceForeground: #c74e39;
      --vscode-gitDecoration-renamedResourceForeground: #73c991;
      --vscode-gitDecoration-untrackedResourceForeground: #73c991;
      --vscode-gitDecoration-ignoredResourceForeground: #a7a8a9;
      --vscode-gitDecoration-stageModifiedResourceForeground: #e2c08d;
      --vscode-gitDecoration-stageDeletedResourceForeground: #c74e39;
      --vscode-gitDecoration-conflictingResourceForeground: #c74e39;
      --vscode-gitDecoration-submoduleResourceForeground: #8db9e2;
      --vscode-lintlens-annotationColor: rgba(153, 153, 153, 0.6);
      --vscode-issues-newIssueDecoration: #ffffff;
      --vscode-issues-open: #ffffff;
      --vscode-issues-closed: #ffffff;
      --vscode-pullRequests-merged: #000000;
      --vscode-pullRequests-draft: #000000;
      --vscode-pullRequests-open: #000000;
      --vscode-pullRequests-closed: #000000;
      --vscode-pullRequests-notification: #ffffff;
    }
  `
);

export default theme;
