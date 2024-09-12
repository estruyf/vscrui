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
      --vscode-foreground: #292929;
      --vscode-disabledForeground: #7f7f7f;
      --vscode-errorForeground: #b5200d;
      --vscode-descriptionForeground: rgba(41, 41, 41, 0.7);
      --vscode-icon-foreground: #292929;
      --vscode-focusBorder: #006bbd;
      --vscode-contrastBorder: #0f4a85;
      --vscode-contrastActiveBorder: #006bbd;
      --vscode-textLink-foreground: #0f4a85;
      --vscode-textLink-activeForeground: #0f4a85;
      --vscode-textSeparator-foreground: #292929;
      --vscode-textPreformat-foreground: #ffffff;
      --vscode-textPreformat-background: #09345f;
      --vscode-textBlockQuote-background: #f2f2f2;
      --vscode-textBlockQuote-border: #292929;
      --vscode-textCodeBlock-background: #f2f2f2;
      --vscode-sash-hoverBorder: #006bbd;
      --vscode-badge-background: #0f4a85;
      --vscode-badge-foreground: #ffffff;
      --vscode-scrollbarSlider-background: rgba(15, 74, 133, 0.4);
      --vscode-scrollbarSlider-hoverBackground: rgba(15, 74, 133, 0.8);
      --vscode-scrollbarSlider-activeBackground: #0f4a85;
      --vscode-progressBar-background: #0f4a85;
      --vscode-editor-background: #ffffff;
      --vscode-editor-foreground: #292929;
      --vscode-editorStickyScroll-background: #ffffff;
      --vscode-editorStickyScrollHover-background: rgba(15, 74, 133, 0.1);
      --vscode-editorStickyScroll-border: #0f4a85;
      --vscode-editorWidget-background: #ffffff;
      --vscode-editorWidget-foreground: #292929;
      --vscode-editorWidget-border: #0f4a85;
      --vscode-editorError-foreground: #b5200d;
      --vscode-editorError-border: #b5200d;
      --vscode-editorWarning-foreground: #895503;
      --vscode-editorWarning-border: rgba(255, 204, 0, 0.8);
      --vscode-editorInfo-foreground: #1a85ff;
      --vscode-editorInfo-border: #292929;
      --vscode-editorHint-border: #292929;
      --vscode-editorLink-activeForeground: #292929;
      --vscode-editor-selectionBackground: #0f4a85;
      --vscode-editor-selectionForeground: #ffffff;
      --vscode-editor-inactiveSelectionBackground: rgba(15, 74, 133, 0.5);
      --vscode-editor-selectionHighlightBorder: #006bbd;
      --vscode-editor-findMatchBorder: #006bbd;
      --vscode-editor-findMatchHighlightBorder: #006bbd;
      --vscode-editor-findRangeHighlightBorder: rgba(0, 107, 189, 0.4);
      --vscode-editorHoverWidget-background: #ffffff;
      --vscode-editorHoverWidget-foreground: #292929;
      --vscode-editorHoverWidget-border: #0f4a85;
      --vscode-editorHoverWidget-statusBarBackground: #ffffff;
      --vscode-editorInlayHint-foreground: #000000;
      --vscode-editorInlayHint-background: rgba(15, 74, 133, 0.1);
      --vscode-editorInlayHint-typeForeground: #000000;
      --vscode-editorInlayHint-typeBackground: rgba(15, 74, 133, 0.1);
      --vscode-editorInlayHint-parameterForeground: #000000;
      --vscode-editorInlayHint-parameterBackground: rgba(15, 74, 133, 0.1);
      --vscode-editorLightBulb-foreground: #007acc;
      --vscode-editorLightBulbAutoFix-foreground: #007acc;
      --vscode-editorLightBulbAi-foreground: #007acc;
      --vscode-editor-snippetTabstopHighlightBackground: rgba(10, 50, 100, 0.2);
      --vscode-editor-snippetFinalTabstopHighlightBorder: #292929;
      --vscode-diffEditor-insertedTextBorder: #374e06;
      --vscode-diffEditor-removedTextBorder: #ad0707;
      --vscode-diffEditor-border: #0f4a85;
      --vscode-diffEditor-unchangedRegionBackground: #ffffff;
      --vscode-diffEditor-unchangedRegionForeground: #292929;
      --vscode-widget-border: #0f4a85;
      --vscode-toolbar-hoverOutline: #006bbd;
      --vscode-breadcrumb-foreground: rgba(41, 41, 41, 0.8);
      --vscode-breadcrumb-background: #ffffff;
      --vscode-breadcrumb-focusForeground: #2d2d2d;
      --vscode-breadcrumb-activeSelectionForeground: #2d2d2d;
      --vscode-breadcrumbPicker-background: #ffffff;
      --vscode-merge-border: #007acc;
      --vscode-editorOverviewRuler-currentContentForeground: #007acc;
      --vscode-editorOverviewRuler-incomingContentForeground: #007acc;
      --vscode-editorOverviewRuler-commonContentForeground: #007acc;
      --vscode-editorOverviewRuler-selectionHighlightForeground: rgba(
        160,
        160,
        160,
        0.8
      );
      --vscode-problemsErrorIcon-foreground: #b5200d;
      --vscode-problemsWarningIcon-foreground: #895503;
      --vscode-problemsInfoIcon-foreground: #1a85ff;
      --vscode-input-background: #ffffff;
      --vscode-input-foreground: #292929;
      --vscode-input-border: #0f4a85;
      --vscode-inputOption-activeBorder: #0f4a85;
      --vscode-inputOption-activeBackground: rgba(0, 0, 0, 0);
      --vscode-inputOption-activeForeground: #292929;
      --vscode-input-placeholderForeground: rgba(41, 41, 41, 0.7);
      --vscode-inputValidation-infoBackground: #ffffff;
      --vscode-inputValidation-infoForeground: #292929;
      --vscode-inputValidation-infoBorder: #0f4a85;
      --vscode-inputValidation-warningBackground: #ffffff;
      --vscode-inputValidation-warningForeground: #292929;
      --vscode-inputValidation-warningBorder: #0f4a85;
      --vscode-inputValidation-errorBackground: #ffffff;
      --vscode-inputValidation-errorForeground: #292929;
      --vscode-inputValidation-errorBorder: #0f4a85;
      --vscode-dropdown-background: #ffffff;
      --vscode-dropdown-listBackground: #ffffff;
      --vscode-dropdown-foreground: #292929;
      --vscode-dropdown-border: #0f4a85;
      --vscode-button-foreground: #ffffff;
      --vscode-button-separator: rgba(255, 255, 255, 0.4);
      --vscode-button-background: #0f4a85;
      --vscode-button-hoverBackground: #0f4a85;
      --vscode-button-border: #0f4a85;
      --vscode-button-secondaryForeground: #292929;
      --vscode-button-secondaryBackground: #ffffff;
      --vscode-radio-activeForeground: #292929;
      --vscode-radio-activeBackground: rgba(0, 0, 0, 0);
      --vscode-radio-activeBorder: #0f4a85;
      --vscode-radio-inactiveBorder: rgba(41, 41, 41, 0.2);
      --vscode-checkbox-background: #ffffff;
      --vscode-checkbox-selectBackground: #ffffff;
      --vscode-checkbox-foreground: #292929;
      --vscode-checkbox-border: #0f4a85;
      --vscode-checkbox-selectBorder: #292929;
      --vscode-keybindingLabel-background: rgba(0, 0, 0, 0);
      --vscode-keybindingLabel-foreground: #292929;
      --vscode-keybindingLabel-border: #0f4a85;
      --vscode-keybindingLabel-bottomBorder: #292929;
      --vscode-list-focusOutline: #006bbd;
      --vscode-list-activeSelectionBackground: rgba(15, 74, 133, 0.1);
      --vscode-list-inactiveSelectionBackground: rgba(15, 74, 133, 0.1);
      --vscode-list-hoverBackground: rgba(15, 74, 133, 0.1);
      --vscode-list-highlightForeground: #006bbd;
      --vscode-list-focusHighlightForeground: #006bbd;
      --vscode-list-invalidItemForeground: #b5200d;
      --vscode-listFilterWidget-background: #ffffff;
      --vscode-listFilterWidget-outline: #007acc;
      --vscode-listFilterWidget-noMatchesOutline: #0f4a85;
      --vscode-list-filterMatchBorder: #006bbd;
      --vscode-list-deemphasizedForeground: #666666;
      --vscode-tree-indentGuidesStroke: #a5a5a5;
      --vscode-tree-inactiveIndentGuidesStroke: rgba(165, 165, 165, 0.4);
      --vscode-menu-border: #0f4a85;
      --vscode-menu-foreground: #292929;
      --vscode-menu-background: #ffffff;
      --vscode-menu-selectionBackground: rgba(15, 74, 133, 0.1);
      --vscode-menu-selectionBorder: #006bbd;
      --vscode-menu-separatorBackground: #0f4a85;
      --vscode-minimap-findMatchHighlight: #0f4a85;
      --vscode-minimap-selectionOccurrenceHighlight: #0f4a85;
      --vscode-minimap-selectionHighlight: #0f4a85;
      --vscode-minimap-infoHighlight: #292929;
      --vscode-minimap-warningHighlight: rgba(255, 204, 0, 0.8);
      --vscode-minimap-errorHighlight: #b5200d;
      --vscode-minimap-foregroundOpacity: #000000;
      --vscode-minimapSlider-background: rgba(15, 74, 133, 0.2);
      --vscode-minimapSlider-hoverBackground: rgba(15, 74, 133, 0.4);
      --vscode-minimapSlider-activeBackground: rgba(15, 74, 133, 0.5);
      --vscode-charts-foreground: #292929;
      --vscode-charts-lines: rgba(41, 41, 41, 0.5);
      --vscode-charts-red: #b5200d;
      --vscode-charts-blue: #1a85ff;
      --vscode-charts-yellow: #895503;
      --vscode-charts-orange: #0f4a85;
      --vscode-charts-green: #374e06;
      --vscode-charts-purple: #652d90;
      --vscode-quickInput-background: #ffffff;
      --vscode-quickInput-foreground: #292929;
      --vscode-quickInputTitle-background: #ffffff;
      --vscode-pickerGroup-foreground: #0f4a85;
      --vscode-pickerGroup-border: #0f4a85;
      --vscode-search-resultsInfoForeground: #292929;
      --vscode-searchEditor-findMatchBorder: #006bbd;
      --vscode-multiDiffEditor-border: #cccccc;
      --vscode-symbolIcon-arrayForeground: #292929;
      --vscode-symbolIcon-booleanForeground: #292929;
      --vscode-symbolIcon-classForeground: #d67e00;
      --vscode-symbolIcon-colorForeground: #292929;
      --vscode-symbolIcon-constantForeground: #292929;
      --vscode-symbolIcon-constructorForeground: #652d90;
      --vscode-symbolIcon-enumeratorForeground: #d67e00;
      --vscode-symbolIcon-enumeratorMemberForeground: #007acc;
      --vscode-symbolIcon-eventForeground: #d67e00;
      --vscode-symbolIcon-fieldForeground: #007acc;
      --vscode-symbolIcon-fileForeground: #292929;
      --vscode-symbolIcon-folderForeground: #292929;
      --vscode-symbolIcon-functionForeground: #652d90;
      --vscode-symbolIcon-interfaceForeground: #007acc;
      --vscode-symbolIcon-keyForeground: #292929;
      --vscode-symbolIcon-keywordForeground: #292929;
      --vscode-symbolIcon-methodForeground: #652d90;
      --vscode-symbolIcon-moduleForeground: #292929;
      --vscode-symbolIcon-namespaceForeground: #292929;
      --vscode-symbolIcon-nullForeground: #292929;
      --vscode-symbolIcon-numberForeground: #292929;
      --vscode-symbolIcon-objectForeground: #292929;
      --vscode-symbolIcon-operatorForeground: #292929;
      --vscode-symbolIcon-packageForeground: #292929;
      --vscode-symbolIcon-propertyForeground: #292929;
      --vscode-symbolIcon-referenceForeground: #292929;
      --vscode-symbolIcon-snippetForeground: #292929;
      --vscode-symbolIcon-stringForeground: #292929;
      --vscode-symbolIcon-structForeground: #292929;
      --vscode-symbolIcon-textForeground: #292929;
      --vscode-symbolIcon-typeParameterForeground: #292929;
      --vscode-symbolIcon-unitForeground: #292929;
      --vscode-symbolIcon-variableForeground: #007acc;
      --vscode-actionBar-toggledBackground: #dddddd;
      --vscode-editorHoverWidget-highlightForeground: #006bbd;
      --vscode-editor-lineHighlightBorder: #0f4a85;
      --vscode-editor-rangeHighlightBorder: #006bbd;
      --vscode-editor-symbolHighlightBorder: #006bbd;
      --vscode-editorCursor-foreground: #0f4a85;
      --vscode-editorMultiCursor-primary\.foreground: #0f4a85;
      --vscode-editorMultiCursor-secondary\.foreground: #0f4a85;
      --vscode-editorWhitespace-foreground: #cccccc;
      --vscode-editorLineNumber-foreground: #292929;
      --vscode-editorIndentGuide-background: #cccccc;
      --vscode-editorIndentGuide-activeBackground: #cccccc;
      --vscode-editorIndentGuide-background1: #cccccc;
      --vscode-editorIndentGuide-background2: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-background3: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-background4: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-background5: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-background6: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground1: #cccccc;
      --vscode-editorIndentGuide-activeBackground2: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground3: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground4: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground5: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground6: rgba(0, 0, 0, 0);
      --vscode-editorActiveLineNumber-foreground: #006bbd;
      --vscode-editorLineNumber-activeForeground: #006bbd;
      --vscode-editorRuler-foreground: #292929;
      --vscode-editorCodeLens-foreground: #292929;
      --vscode-editorBracketMatch-background: rgba(0, 0, 0, 0);
      --vscode-editorBracketMatch-border: #0f4a85;
      --vscode-editorOverviewRuler-border: #666666;
      --vscode-editorGutter-background: #ffffff;
      --vscode-editorUnnecessaryCode-border: #0f4a85;
      --vscode-editorGhostText-border: rgba(41, 41, 41, 0.8);
      --vscode-editorOverviewRuler-rangeHighlightForeground: rgba(
        0,
        122,
        204,
        0.6
      );
      --vscode-editorOverviewRuler-errorForeground: #b5200d;
      --vscode-editorOverviewRuler-warningForeground: rgba(255, 204, 0, 0.8);
      --vscode-editorOverviewRuler-infoForeground: #292929;
      --vscode-editorBracketHighlight-foreground1: #0431fa;
      --vscode-editorBracketHighlight-foreground2: #319331;
      --vscode-editorBracketHighlight-foreground3: #7b3814;
      --vscode-editorBracketHighlight-foreground4: rgba(0, 0, 0, 0);
      --vscode-editorBracketHighlight-foreground5: rgba(0, 0, 0, 0);
      --vscode-editorBracketHighlight-foreground6: rgba(0, 0, 0, 0);
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
      --vscode-editorUnicodeHighlight-border: #895503;
      --vscode-diffEditor-move\.border: rgba(139, 139, 139, 0.61);
      --vscode-diffEditor-moveActive\.border: #ffa500;
      --vscode-diffEditor-unchangedRegionShadow: rgba(115, 115, 115, 0.75);
      --vscode-editorOverviewRuler-bracketMatchForeground: #a0a0a0;
      --vscode-editorGutter-foldingControlForeground: #292929;
      --vscode-editor-linkedEditingBackground: #ffffff;
      --vscode-editor-wordHighlightBorder: #006bbd;
      --vscode-editor-wordHighlightStrongBorder: #006bbd;
      --vscode-editor-wordHighlightTextBorder: #006bbd;
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
      --vscode-peekViewTitle-background: #ffffff;
      --vscode-peekViewTitleLabel-foreground: #292929;
      --vscode-peekViewTitleDescription-foreground: #292929;
      --vscode-peekView-border: #0f4a85;
      --vscode-peekViewResult-background: #ffffff;
      --vscode-peekViewResult-lineForeground: #292929;
      --vscode-peekViewResult-fileForeground: #292929;
      --vscode-peekViewResult-selectionForeground: #292929;
      --vscode-peekViewEditor-background: #ffffff;
      --vscode-peekViewEditorGutter-background: #ffffff;
      --vscode-peekViewEditorStickyScroll-background: #ffffff;
      --vscode-peekViewEditor-matchHighlightBorder: #006bbd;
      --vscode-editorMarkerNavigationError-background: #0f4a85;
      --vscode-editorMarkerNavigationWarning-background: #0f4a85;
      --vscode-editorMarkerNavigationWarning-headerBackground: rgba(
        15,
        74,
        133,
        0.2
      );
      --vscode-editorMarkerNavigationInfo-background: #0f4a85;
      --vscode-editorMarkerNavigation-background: #ffffff;
      --vscode-editorSuggestWidget-background: #ffffff;
      --vscode-editorSuggestWidget-border: #0f4a85;
      --vscode-editorSuggestWidget-foreground: #292929;
      --vscode-editorSuggestWidget-highlightForeground: #006bbd;
      --vscode-editorSuggestWidget-focusHighlightForeground: #006bbd;
      --vscode-editorSuggestWidgetStatus-foreground: rgba(41, 41, 41, 0.5);
      --vscode-editorWatermark-foreground: #292929;
      --vscode-tab-activeBackground: #ffffff;
      --vscode-tab-unfocusedActiveBackground: #ffffff;
      --vscode-tab-activeForeground: #292929;
      --vscode-tab-inactiveForeground: #292929;
      --vscode-tab-unfocusedActiveForeground: #292929;
      --vscode-tab-unfocusedInactiveForeground: #292929;
      --vscode-tab-border: #0f4a85;
      --vscode-tab-lastPinnedBorder: #0f4a85;
      --vscode-tab-activeBorderTop: #b5200d;
      --vscode-tab-unfocusedActiveBorderTop: #b5200d;
      --vscode-tab-selectedBorderTop: #b5200d;
      --vscode-tab-selectedBackground: #ffffff;
      --vscode-tab-selectedForeground: #292929;
      --vscode-tab-unfocusedHoverBorder: #0f4a85;
      --vscode-tab-dragAndDropBorder: #006bbd;
      --vscode-tab-activeModifiedBorder: #0f4a85;
      --vscode-tab-inactiveModifiedBorder: #0f4a85;
      --vscode-tab-unfocusedActiveModifiedBorder: #0f4a85;
      --vscode-tab-unfocusedInactiveModifiedBorder: #0f4a85;
      --vscode-editorPane-background: #ffffff;
      --vscode-editorGroup-focusedEmptyBorder: #006bbd;
      --vscode-editorGroupHeader-noTabsBackground: #ffffff;
      --vscode-editorGroupHeader-border: #0f4a85;
      --vscode-editorGroup-border: #0f4a85;
      --vscode-editorGroup-dropBackground: rgba(15, 74, 133, 0.5);
      --vscode-editorGroup-dropIntoPromptForeground: #292929;
      --vscode-editorGroup-dropIntoPromptBackground: #ffffff;
      --vscode-editorGroup-dropIntoPromptBorder: #0f4a85;
      --vscode-sideBySideEditor-horizontalBorder: #0f4a85;
      --vscode-sideBySideEditor-verticalBorder: #0f4a85;
      --vscode-panel-background: #ffffff;
      --vscode-panel-border: #0f4a85;
      --vscode-panelTitle-activeForeground: #292929;
      --vscode-panelTitle-inactiveForeground: #292929;
      --vscode-panelTitle-activeBorder: #b5200d;
      --vscode-panelInput-border: #0f4a85;
      --vscode-panel-dropBorder: #292929;
      --vscode-panelSection-dropBackground: rgba(15, 74, 133, 0.5);
      --vscode-panelSectionHeader-border: #0f4a85;
      --vscode-panelSection-border: #0f4a85;
      --vscode-panelStickyScroll-background: #ffffff;
      --vscode-banner-background: rgba(15, 74, 133, 0.1);
      --vscode-banner-iconForeground: #1a85ff;
      --vscode-statusBar-foreground: #292929;
      --vscode-statusBar-noFolderForeground: #292929;
      --vscode-statusBar-border: #0f4a85;
      --vscode-statusBar-focusBorder: #292929;
      --vscode-statusBar-noFolderBorder: #0f4a85;
      --vscode-statusBarItem-activeBackground: rgba(0, 0, 0, 0.18);
      --vscode-statusBarItem-focusBorder: #006bbd;
      --vscode-statusBarItem-hoverBackground: rgba(0, 0, 0, 0.12);
      --vscode-statusBarItem-hoverForeground: #292929;
      --vscode-statusBarItem-compactHoverBackground: rgba(0, 0, 0, 0.2);
      --vscode-statusBarItem-prominentForeground: #292929;
      --vscode-statusBarItem-prominentBackground: rgba(0, 0, 0, 0.5);
      --vscode-statusBarItem-prominentHoverForeground: #292929;
      --vscode-statusBarItem-errorBackground: #b5200d;
      --vscode-statusBarItem-errorForeground: #ffffff;
      --vscode-statusBarItem-errorHoverForeground: #292929;
      --vscode-statusBarItem-errorHoverBackground: rgba(0, 0, 0, 0.12);
      --vscode-statusBarItem-warningBackground: #895503;
      --vscode-statusBarItem-warningForeground: #ffffff;
      --vscode-statusBarItem-warningHoverForeground: #292929;
      --vscode-statusBarItem-warningHoverBackground: rgba(0, 0, 0, 0.12);
      --vscode-activityBar-background: #ffffff;
      --vscode-activityBar-foreground: #292929;
      --vscode-activityBar-inactiveForeground: #292929;
      --vscode-activityBar-border: #0f4a85;
      --vscode-activityBar-activeBorder: #0f4a85;
      --vscode-activityBar-activeFocusBorder: #b5200d;
      --vscode-activityBarBadge-background: #0f4a85;
      --vscode-activityBarBadge-foreground: #ffffff;
      --vscode-activityBarTop-foreground: #292929;
      --vscode-activityBarTop-activeBorder: #b5200d;
      --vscode-activityBarTop-inactiveForeground: #292929;
      --vscode-activityBarTop-dropBorder: #292929;
      --vscode-profileBadge-background: #000000;
      --vscode-profileBadge-foreground: #ffffff;
      --vscode-statusBarItem-remoteBackground: #0f4a85;
      --vscode-statusBarItem-remoteForeground: #ffffff;
      --vscode-statusBarItem-remoteHoverForeground: #292929;
      --vscode-statusBarItem-offlineBackground: #6c1717;
      --vscode-statusBarItem-offlineForeground: #ffffff;
      --vscode-statusBarItem-offlineHoverForeground: #292929;
      --vscode-extensionBadge-remoteBackground: #0f4a85;
      --vscode-extensionBadge-remoteForeground: #ffffff;
      --vscode-sideBar-background: #ffffff;
      --vscode-sideBar-border: #0f4a85;
      --vscode-sideBarTitle-background: #ffffff;
      --vscode-sideBar-dropBackground: rgba(15, 74, 133, 0.5);
      --vscode-sideBarSectionHeader-border: #0f4a85;
      --vscode-sideBarActivityBarTop-border: #0f4a85;
      --vscode-sideBarStickyScroll-background: #ffffff;
      --vscode-titleBar-activeForeground: #292929;
      --vscode-titleBar-inactiveForeground: #292929;
      --vscode-titleBar-activeBackground: #ffffff;
      --vscode-titleBar-border: #0f4a85;
      --vscode-menubar-selectionForeground: #292929;
      --vscode-menubar-selectionBorder: #006bbd;
      --vscode-commandCenter-foreground: #292929;
      --vscode-commandCenter-activeForeground: #292929;
      --vscode-commandCenter-inactiveForeground: #292929;
      --vscode-commandCenter-border: #0f4a85;
      --vscode-commandCenter-activeBorder: #292929;
      --vscode-commandCenter-inactiveBorder: rgba(41, 41, 41, 0.25);
      --vscode-notificationCenter-border: #0f4a85;
      --vscode-notificationToast-border: #0f4a85;
      --vscode-notifications-foreground: #292929;
      --vscode-notifications-background: #ffffff;
      --vscode-notificationLink-foreground: #0f4a85;
      --vscode-notificationCenterHeader-background: #ffffff;
      --vscode-notifications-border: #ffffff;
      --vscode-notificationsErrorIcon-foreground: #b5200d;
      --vscode-notificationsWarningIcon-foreground: #895503;
      --vscode-notificationsInfoIcon-foreground: #1a85ff;
      --vscode-window-activeBorder: #0f4a85;
      --vscode-window-inactiveBorder: #0f4a85;
      --vscode-chat-requestBorder: #0f4a85;
      --vscode-chat-slashCommandBackground: #0f4a85;
      --vscode-chat-slashCommandForeground: #ffffff;
      --vscode-chat-avatarBackground: #ffffff;
      --vscode-chat-avatarForeground: #292929;
      --vscode-simpleFindWidget-sashBorder: #0f4a85;
      --vscode-commentsView-resolvedIcon: #0f4a85;
      --vscode-commentsView-unresolvedIcon: #0f4a85;
      --vscode-editorCommentsWidget-replyInputBackground: #ffffff;
      --vscode-editorCommentsWidget-resolvedBorder: #0f4a85;
      --vscode-editorCommentsWidget-unresolvedBorder: #0f4a85;
      --vscode-editorCommentsWidget-rangeBackground: rgba(15, 74, 133, 0.1);
      --vscode-editorCommentsWidget-rangeActiveBackground: rgba(
        15,
        74,
        133,
        0.1
      );
      --vscode-editorGutter-commentRangeForeground: #000000;
      --vscode-editorOverviewRuler-commentForeground: #000000;
      --vscode-editorOverviewRuler-commentUnresolvedForeground: #000000;
      --vscode-editorGutter-commentGlyphForeground: #ffffff;
      --vscode-editorGutter-commentUnresolvedGlyphForeground: #ffffff;
      --vscode-debugToolBar-background: #ffffff;
      --vscode-debugIcon-startForeground: #388a34;
      --vscode-editor-stackFrameHighlightBackground: rgba(255, 255, 102, 0.45);
      --vscode-editor-focusedStackFrameHighlightBackground: rgba(
        206,
        231,
        206,
        0.45
      );
      --vscode-inlineChat-foreground: #292929;
      --vscode-inlineChat-background: #ffffff;
      --vscode-inlineChat-border: #0f4a85;
      --vscode-inlineChatInput-border: #0f4a85;
      --vscode-inlineChatInput-focusBorder: #006bbd;
      --vscode-inlineChatInput-placeholderForeground: rgba(41, 41, 41, 0.7);
      --vscode-inlineChatInput-background: #ffffff;
      --vscode-mergeEditor-change\.background: rgba(155, 185, 85, 0.2);
      --vscode-mergeEditor-change\.word\.background: rgba(156, 204, 44, 0.4);
      --vscode-mergeEditor-changeBase\.background: #ffcccc;
      --vscode-mergeEditor-changeBase\.word\.background: #ffa3a3;
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
      --vscode-settings-headerForeground: #292929;
      --vscode-settings-settingsHeaderHoverForeground: rgba(41, 41, 41, 0.7);
      --vscode-settings-modifiedItemIndicator: #66afe0;
      --vscode-settings-headerBorder: #0f4a85;
      --vscode-settings-sashBorder: #0f4a85;
      --vscode-settings-dropdownBackground: #ffffff;
      --vscode-settings-dropdownForeground: #292929;
      --vscode-settings-dropdownBorder: #0f4a85;
      --vscode-settings-dropdownListBorder: #0f4a85;
      --vscode-settings-checkboxBackground: #ffffff;
      --vscode-settings-checkboxForeground: #292929;
      --vscode-settings-checkboxBorder: #0f4a85;
      --vscode-settings-textInputBackground: #ffffff;
      --vscode-settings-textInputForeground: #292929;
      --vscode-settings-textInputBorder: #0f4a85;
      --vscode-settings-numberInputBackground: #ffffff;
      --vscode-settings-numberInputForeground: #292929;
      --vscode-settings-numberInputBorder: #0f4a85;
      --vscode-settings-focusedRowBorder: #006bbd;
      --vscode-scm-historyGraph\.historyItemGroupLocal: #1a85ff;
      --vscode-scm-historyGraph\.historyItemGroupRemote: #652d90;
      --vscode-scm-historyGraph\.historyItemGroupBase: #0f4a85;
      --vscode-scm-historyGraph\.historyItemGroupHoverLabelForeground: #ffffff;
      --vscode-scm-historyGraph\.green: #374e06;
      --vscode-scm-historyGraph\.red: #b5200d;
      --vscode-scm-historyGraph\.yellow: #895503;
      --vscode-terminal-foreground: #292929;
      --vscode-terminal-selectionBackground: #0f4a85;
      --vscode-terminal-inactiveSelectionBackground: rgba(15, 74, 133, 0.5);
      --vscode-terminal-selectionForeground: #ffffff;
      --vscode-terminalCommandDecoration-defaultBackground: rgba(0, 0, 0, 0.25);
      --vscode-terminalCommandDecoration-successBackground: #007100;
      --vscode-terminalCommandDecoration-errorBackground: #b5200d;
      --vscode-terminalOverviewRuler-cursorForeground: rgba(160, 160, 160, 0.8);
      --vscode-terminal-border: #0f4a85;
      --vscode-terminalOverviewRuler-border: #666666;
      --vscode-terminal-findMatchBackground: #0f4a85;
      --vscode-terminal-findMatchBorder: #0f4a85;
      --vscode-terminal-findMatchHighlightBorder: #0f4a85;
      --vscode-terminalOverviewRuler-findMatchForeground: #0f4a85;
      --vscode-terminal-dropBackground: rgba(15, 74, 133, 0.5);
      --vscode-terminalStickyScrollHover-background: #0f4a85;
      --vscode-terminalStickyScroll-border: #0f4a85;
      --vscode-testing-iconFailed: #b5200d;
      --vscode-testing-iconErrored: #b5200d;
      --vscode-testing-iconPassed: #007100;
      --vscode-testing-runAction: #007100;
      --vscode-testing-iconQueued: #cca700;
      --vscode-testing-iconUnset: #848484;
      --vscode-testing-iconSkipped: #848484;
      --vscode-testing-peekBorder: #0f4a85;
      --vscode-testing-messagePeekBorder: #0f4a85;
      --vscode-testing-coveredBorder: #0f4a85;
      --vscode-testing-coveredGutterBackground: #374e06;
      --vscode-testing-uncoveredBorder: #0f4a85;
      --vscode-testing-uncoveredGutterBackground: #b5200d;
      --vscode-testing-coverCountBadgeBackground: #0f4a85;
      --vscode-testing-coverCountBadgeForeground: #ffffff;
      --vscode-testing-message\.error\.decorationForeground: #292929;
      --vscode-testing-message\.info\.decorationForeground: rgba(
        41,
        41,
        41,
        0.5
      );
      --vscode-testing-iconErrored\.retired: rgba(181, 32, 13, 0.7);
      --vscode-testing-iconFailed\.retired: rgba(181, 32, 13, 0.7);
      --vscode-testing-iconPassed\.retired: rgba(0, 113, 0, 0.7);
      --vscode-testing-iconQueued\.retired: rgba(204, 167, 0, 0.7);
      --vscode-testing-iconUnset\.retired: rgba(132, 132, 132, 0.7);
      --vscode-testing-iconSkipped\.retired: rgba(132, 132, 132, 0.7);
      --vscode-welcomePage-tileBackground: #ffffff;
      --vscode-welcomePage-tileBorder: #0f4a85;
      --vscode-welcomePage-progress\.background: #ffffff;
      --vscode-welcomePage-progress\.foreground: #0f4a85;
      --vscode-debugExceptionWidget-border: #a31515;
      --vscode-debugExceptionWidget-background: #f1dfde;
      --vscode-statusBar-debuggingBackground: #b5200d;
      --vscode-statusBar-debuggingForeground: #ffffff;
      --vscode-statusBar-debuggingBorder: #0f4a85;
      --vscode-commandCenter-debuggingBackground: rgba(181, 32, 13, 0.26);
      --vscode-editorGutter-modifiedBackground: #2090d3;
      --vscode-editorGutter-addedBackground: #48985d;
      --vscode-editorGutter-deletedBackground: #b5200d;
      --vscode-minimapGutter-modifiedBackground: #2090d3;
      --vscode-minimapGutter-addedBackground: #48985d;
      --vscode-minimapGutter-deletedBackground: #b5200d;
      --vscode-editorOverviewRuler-modifiedForeground: rgba(32, 144, 211, 0.6);
      --vscode-editorOverviewRuler-addedForeground: rgba(72, 152, 93, 0.6);
      --vscode-editorOverviewRuler-deletedForeground: rgba(181, 32, 13, 0.6);
      --vscode-debugIcon-breakpointForeground: #e51400;
      --vscode-debugIcon-breakpointDisabledForeground: #848484;
      --vscode-debugIcon-breakpointUnverifiedForeground: #848484;
      --vscode-debugIcon-breakpointCurrentStackframeForeground: #be8700;
      --vscode-debugIcon-breakpointStackframeForeground: #89d185;
      --vscode-editor-inlineValuesForeground: rgba(0, 0, 0, 0.5);
      --vscode-editor-inlineValuesBackground: rgba(255, 200, 0, 0.2);
      --vscode-ports-iconRunningProcessForeground: #0f4a85;
      --vscode-profiles-sashBorder: #0f4a85;
      --vscode-debugTokenExpression-name: #292929;
      --vscode-debugTokenExpression-type: #292929;
      --vscode-debugTokenExpression-value: #292929;
      --vscode-debugTokenExpression-string: #a31515;
      --vscode-debugTokenExpression-boolean: #0000ff;
      --vscode-debugTokenExpression-number: #098658;
      --vscode-debugTokenExpression-error: #e51400;
      --vscode-debugView-exceptionLabelForeground: #292929;
      --vscode-debugView-exceptionLabelBackground: #a31515;
      --vscode-debugView-stateLabelForeground: #292929;
      --vscode-debugView-stateLabelBackground: rgba(136, 136, 136, 0.27);
      --vscode-debugView-valueChangedHighlight: #569cd6;
      --vscode-debugConsole-infoForeground: #292929;
      --vscode-debugConsole-warningForeground: #895503;
      --vscode-debugConsole-errorForeground: #b5200d;
      --vscode-debugConsole-sourceForeground: #292929;
      --vscode-debugConsoleInputIcon-foreground: #292929;
      --vscode-debugIcon-pauseForeground: #007acc;
      --vscode-debugIcon-stopForeground: #a1260d;
      --vscode-debugIcon-disconnectForeground: #a1260d;
      --vscode-debugIcon-restartForeground: #388a34;
      --vscode-debugIcon-stepOverForeground: #007acc;
      --vscode-debugIcon-stepIntoForeground: #007acc;
      --vscode-debugIcon-stepOutForeground: #007acc;
      --vscode-debugIcon-continueForeground: #007acc;
      --vscode-debugIcon-stepBackForeground: #007acc;
      --vscode-scm-historyItemAdditionsForeground: #374e06;
      --vscode-scm-historyItemDeletionsForeground: #ad0707;
      --vscode-scm-historyItemStatisticsBorder: rgba(41, 41, 41, 0.2);
      --vscode-extensionButton-separator: rgba(255, 255, 255, 0.4);
      --vscode-extensionIcon-starForeground: #0f4a85;
      --vscode-extensionIcon-verifiedForeground: #0f4a85;
      --vscode-extensionIcon-preReleaseForeground: #0f4a85;
      --vscode-extensionIcon-sponsorForeground: #b51e78;
      --vscode-notebook-cellBorderColor: #0f4a85;
      --vscode-notebook-focusedEditorBorder: #006bbd;
      --vscode-notebookStatusSuccessIcon-foreground: #388a34;
      --vscode-notebookEditorOverviewRuler-runningCellForeground: #388a34;
      --vscode-notebookStatusErrorIcon-foreground: #b5200d;
      --vscode-notebookStatusRunningIcon-foreground: #292929;
      --vscode-notebook-cellToolbarSeparator: #0f4a85;
      --vscode-notebook-selectedCellBorder: #0f4a85;
      --vscode-notebook-inactiveSelectedCellBorder: #006bbd;
      --vscode-notebook-focusedCellBorder: #006bbd;
      --vscode-notebook-inactiveFocusedCellBorder: #0f4a85;
      --vscode-notebook-cellStatusBarItemHoverBackground: rgba(0, 0, 0, 0.08);
      --vscode-notebook-cellInsertionIndicator: #006bbd;
      --vscode-notebookScrollbarSlider-background: rgba(15, 74, 133, 0.4);
      --vscode-notebookScrollbarSlider-hoverBackground: rgba(15, 74, 133, 0.8);
      --vscode-notebookScrollbarSlider-activeBackground: #0f4a85;
      --vscode-interactive-activeCodeBorder: #0f4a85;
      --vscode-interactive-inactiveCodeBorder: #0f4a85;
      --vscode-searchEditor-textInputBorder: #0f4a85;
      --vscode-terminal-ansiBlack: #292929;
      --vscode-terminal-ansiRed: #cd3131;
      --vscode-terminal-ansiGreen: #136c13;
      --vscode-terminal-ansiYellow: #949800;
      --vscode-terminal-ansiBlue: #0451a5;
      --vscode-terminal-ansiMagenta: #bc05bc;
      --vscode-terminal-ansiCyan: #0598bc;
      --vscode-terminal-ansiWhite: #555555;
      --vscode-terminal-ansiBrightBlack: #666666;
      --vscode-terminal-ansiBrightRed: #cd3131;
      --vscode-terminal-ansiBrightGreen: #00bc00;
      --vscode-terminal-ansiBrightYellow: #b5ba00;
      --vscode-terminal-ansiBrightBlue: #0451a5;
      --vscode-terminal-ansiBrightMagenta: #bc05bc;
      --vscode-terminal-ansiBrightCyan: #0598bc;
      --vscode-terminal-ansiBrightWhite: #a5a5a5;
      --vscode-gitDecoration-addedResourceForeground: #374e06;
      --vscode-gitDecoration-modifiedResourceForeground: #895503;
      --vscode-gitDecoration-deletedResourceForeground: #ad0707;
      --vscode-gitDecoration-renamedResourceForeground: #007100;
      --vscode-gitDecoration-untrackedResourceForeground: #007100;
      --vscode-gitDecoration-ignoredResourceForeground: #8e8e90;
      --vscode-gitDecoration-stageModifiedResourceForeground: #895503;
      --vscode-gitDecoration-stageDeletedResourceForeground: #ad0707;
      --vscode-gitDecoration-conflictingResourceForeground: #ad0707;
      --vscode-gitDecoration-submoduleResourceForeground: #1258a7;
      --vscode-lintlens-annotationColor: rgba(153, 153, 153, 0.65);
      --vscode-issues-newIssueDecoration: #292929;
      --vscode-issues-open: #292929;
      --vscode-issues-closed: #292929;
      --vscode-pullRequests-merged: #ffffff;
      --vscode-pullRequests-draft: #ffffff;
      --vscode-pullRequests-open: #ffffff;
      --vscode-pullRequests-closed: #ffffff;
      --vscode-pullRequests-notification: #292929;
    }
  `
);

export default theme;