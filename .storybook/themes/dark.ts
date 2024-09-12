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
      --vscode-foreground: #cccccc;
      --vscode-disabledForeground: rgba(204, 204, 204, 0.5);
      --vscode-errorForeground: #f85149;
      --vscode-descriptionForeground: #9d9d9d;
      --vscode-icon-foreground: #cccccc;
      --vscode-focusBorder: #0078d4;
      --vscode-textLink-foreground: #4daafc;
      --vscode-textLink-activeForeground: #4daafc;
      --vscode-textSeparator-foreground: #21262d;
      --vscode-textPreformat-foreground: #d0d0d0;
      --vscode-textPreformat-background: #3c3c3c;
      --vscode-textBlockQuote-background: #2b2b2b;
      --vscode-textBlockQuote-border: #616161;
      --vscode-textCodeBlock-background: #2b2b2b;
      --vscode-sash-hoverBorder: #0078d4;
      --vscode-badge-background: #616161;
      --vscode-badge-foreground: #f8f8f8;
      --vscode-scrollbar-shadow: #000000;
      --vscode-scrollbarSlider-background: rgba(121, 121, 121, 0.4);
      --vscode-scrollbarSlider-hoverBackground: rgba(100, 100, 100, 0.7);
      --vscode-scrollbarSlider-activeBackground: rgba(191, 191, 191, 0.4);
      --vscode-progressBar-background: #0078d4;
      --vscode-editor-background: #1f1f1f;
      --vscode-editor-foreground: #cccccc;
      --vscode-editorStickyScroll-background: #1f1f1f;
      --vscode-editorStickyScrollHover-background: #2a2d2e;
      --vscode-editorStickyScroll-shadow: #000000;
      --vscode-editorWidget-background: #202020;
      --vscode-editorWidget-foreground: #cccccc;
      --vscode-editorWidget-border: #454545;
      --vscode-editorError-foreground: #f14c4c;
      --vscode-editorWarning-foreground: #cca700;
      --vscode-editorInfo-foreground: #3794ff;
      --vscode-editorHint-foreground: rgba(238, 238, 238, 0.7);
      --vscode-editorLink-activeForeground: #4e94ce;
      --vscode-editor-selectionBackground: #264f78;
      --vscode-editor-inactiveSelectionBackground: #3a3d41;
      --vscode-editor-selectionHighlightBackground: rgba(173, 214, 255, 0.15);
      --vscode-editor-findMatchBackground: #9e6a03;
      --vscode-editor-findMatchHighlightBackground: rgba(234, 92, 0, 0.33);
      --vscode-editor-findRangeHighlightBackground: rgba(58, 61, 65, 0.4);
      --vscode-editor-hoverHighlightBackground: rgba(38, 79, 120, 0.25);
      --vscode-editorHoverWidget-background: #202020;
      --vscode-editorHoverWidget-foreground: #cccccc;
      --vscode-editorHoverWidget-border: #454545;
      --vscode-editorHoverWidget-statusBarBackground: #262626;
      --vscode-editorInlayHint-foreground: #969696;
      --vscode-editorInlayHint-background: rgba(97, 97, 97, 0.1);
      --vscode-editorInlayHint-typeForeground: #969696;
      --vscode-editorInlayHint-typeBackground: rgba(97, 97, 97, 0.1);
      --vscode-editorInlayHint-parameterForeground: #969696;
      --vscode-editorInlayHint-parameterBackground: rgba(97, 97, 97, 0.1);
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
      --vscode-diffEditor-insertedTextBackground: rgba(156, 204, 44, 0.2);
      --vscode-diffEditor-removedTextBackground: rgba(255, 0, 0, 0.2);
      --vscode-diffEditor-insertedLineBackground: rgba(155, 185, 85, 0.2);
      --vscode-diffEditor-removedLineBackground: rgba(255, 0, 0, 0.2);
      --vscode-diffEditor-diagonalFill: rgba(204, 204, 204, 0.2);
      --vscode-diffEditor-unchangedRegionBackground: #181818;
      --vscode-diffEditor-unchangedRegionForeground: #cccccc;
      --vscode-diffEditor-unchangedCodeBackground: rgba(116, 116, 116, 0.16);
      --vscode-widget-shadow: rgba(0, 0, 0, 0.36);
      --vscode-widget-border: #313131;
      --vscode-toolbar-hoverBackground: rgba(90, 93, 94, 0.31);
      --vscode-toolbar-activeBackground: rgba(99, 102, 103, 0.31);
      --vscode-breadcrumb-foreground: rgba(204, 204, 204, 0.8);
      --vscode-breadcrumb-background: #1f1f1f;
      --vscode-breadcrumb-focusForeground: #e0e0e0;
      --vscode-breadcrumb-activeSelectionForeground: #e0e0e0;
      --vscode-breadcrumbPicker-background: #202020;
      --vscode-merge-currentHeaderBackground: rgba(64, 200, 174, 0.5);
      --vscode-merge-currentContentBackground: rgba(64, 200, 174, 0.2);
      --vscode-merge-incomingHeaderBackground: rgba(64, 166, 255, 0.5);
      --vscode-merge-incomingContentBackground: rgba(64, 166, 255, 0.2);
      --vscode-merge-commonHeaderBackground: rgba(96, 96, 96, 0.4);
      --vscode-merge-commonContentBackground: rgba(96, 96, 96, 0.16);
      --vscode-editorOverviewRuler-currentContentForeground: rgba(
        64,
        200,
        174,
        0.5
      );
      --vscode-editorOverviewRuler-incomingContentForeground: rgba(
        64,
        166,
        255,
        0.5
      );
      --vscode-editorOverviewRuler-commonContentForeground: rgba(
        96,
        96,
        96,
        0.4
      );
      --vscode-editorOverviewRuler-findMatchForeground: rgba(
        209,
        134,
        22,
        0.49
      );
      --vscode-editorOverviewRuler-selectionHighlightForeground: rgba(
        160,
        160,
        160,
        0.8
      );
      --vscode-problemsErrorIcon-foreground: #f14c4c;
      --vscode-problemsWarningIcon-foreground: #cca700;
      --vscode-problemsInfoIcon-foreground: #3794ff;
      --vscode-input-background: #313131;
      --vscode-input-foreground: #cccccc;
      --vscode-input-border: #3c3c3c;
      --vscode-inputOption-activeBorder: #2488db;
      --vscode-inputOption-hoverBackground: rgba(90, 93, 94, 0.5);
      --vscode-inputOption-activeBackground: rgba(36, 137, 219, 0.51);
      --vscode-inputOption-activeForeground: #ffffff;
      --vscode-input-placeholderForeground: #989898;
      --vscode-inputValidation-infoBackground: #063b49;
      --vscode-inputValidation-infoBorder: #007acc;
      --vscode-inputValidation-warningBackground: #352a05;
      --vscode-inputValidation-warningBorder: #b89500;
      --vscode-inputValidation-errorBackground: #5a1d1d;
      --vscode-inputValidation-errorBorder: #be1100;
      --vscode-dropdown-background: #313131;
      --vscode-dropdown-listBackground: #1f1f1f;
      --vscode-dropdown-foreground: #cccccc;
      --vscode-dropdown-border: #3c3c3c;
      --vscode-button-foreground: #ffffff;
      --vscode-button-separator: rgba(255, 255, 255, 0.4);
      --vscode-button-background: #0078d4;
      --vscode-button-hoverBackground: #026ec1;
      --vscode-button-border: rgba(255, 255, 255, 0.07);
      --vscode-button-secondaryForeground: #cccccc;
      --vscode-button-secondaryBackground: #313131;
      --vscode-button-secondaryHoverBackground: #3c3c3c;
      --vscode-radio-activeForeground: #ffffff;
      --vscode-radio-activeBackground: rgba(36, 137, 219, 0.51);
      --vscode-radio-activeBorder: #2488db;
      --vscode-radio-inactiveBorder: rgba(255, 255, 255, 0.2);
      --vscode-radio-inactiveHoverBackground: rgba(90, 93, 94, 0.5);
      --vscode-checkbox-background: #313131;
      --vscode-checkbox-selectBackground: #202020;
      --vscode-checkbox-foreground: #cccccc;
      --vscode-checkbox-border: #3c3c3c;
      --vscode-checkbox-selectBorder: #cccccc;
      --vscode-keybindingLabel-background: rgba(128, 128, 128, 0.17);
      --vscode-keybindingLabel-foreground: #cccccc;
      --vscode-keybindingLabel-border: rgba(51, 51, 51, 0.6);
      --vscode-keybindingLabel-bottomBorder: rgba(68, 68, 68, 0.6);
      --vscode-list-focusOutline: #0078d4;
      --vscode-list-activeSelectionBackground: #04395e;
      --vscode-list-activeSelectionForeground: #ffffff;
      --vscode-list-activeSelectionIconForeground: #ffffff;
      --vscode-list-inactiveSelectionBackground: #37373d;
      --vscode-list-hoverBackground: #2a2d2e;
      --vscode-list-dropBackground: #383b3d;
      --vscode-list-dropBetweenBackground: #cccccc;
      --vscode-list-highlightForeground: #2aaaff;
      --vscode-list-focusHighlightForeground: #2aaaff;
      --vscode-list-invalidItemForeground: #b89500;
      --vscode-list-errorForeground: #f88070;
      --vscode-list-warningForeground: #cca700;
      --vscode-listFilterWidget-background: #202020;
      --vscode-listFilterWidget-outline: rgba(0, 0, 0, 0);
      --vscode-listFilterWidget-noMatchesOutline: #be1100;
      --vscode-listFilterWidget-shadow: rgba(0, 0, 0, 0.36);
      --vscode-list-filterMatchBackground: rgba(234, 92, 0, 0.33);
      --vscode-list-deemphasizedForeground: #8c8c8c;
      --vscode-tree-indentGuidesStroke: #585858;
      --vscode-tree-inactiveIndentGuidesStroke: rgba(88, 88, 88, 0.4);
      --vscode-tree-tableColumnsBorder: rgba(204, 204, 204, 0.13);
      --vscode-tree-tableOddRowsBackground: rgba(204, 204, 204, 0.04);
      --vscode-menu-border: #454545;
      --vscode-menu-foreground: #cccccc;
      --vscode-menu-background: #1f1f1f;
      --vscode-menu-selectionForeground: #ffffff;
      --vscode-menu-selectionBackground: #0078d4;
      --vscode-menu-separatorBackground: #454545;
      --vscode-minimap-findMatchHighlight: #d18616;
      --vscode-minimap-selectionOccurrenceHighlight: #676767;
      --vscode-minimap-selectionHighlight: #264f78;
      --vscode-minimap-infoHighlight: #3794ff;
      --vscode-minimap-warningHighlight: #cca700;
      --vscode-minimap-errorHighlight: rgba(255, 18, 18, 0.7);
      --vscode-minimap-foregroundOpacity: #000000;
      --vscode-minimapSlider-background: rgba(121, 121, 121, 0.2);
      --vscode-minimapSlider-hoverBackground: rgba(100, 100, 100, 0.35);
      --vscode-minimapSlider-activeBackground: rgba(191, 191, 191, 0.2);
      --vscode-charts-foreground: #cccccc;
      --vscode-charts-lines: rgba(204, 204, 204, 0.5);
      --vscode-charts-red: #f14c4c;
      --vscode-charts-blue: #3794ff;
      --vscode-charts-yellow: #cca700;
      --vscode-charts-orange: #d18616;
      --vscode-charts-green: #89d185;
      --vscode-charts-purple: #b180d7;
      --vscode-quickInput-background: #222222;
      --vscode-quickInput-foreground: #cccccc;
      --vscode-quickInputTitle-background: rgba(255, 255, 255, 0.1);
      --vscode-pickerGroup-foreground: #3794ff;
      --vscode-pickerGroup-border: #3c3c3c;
      --vscode-quickInputList-focusForeground: #ffffff;
      --vscode-quickInputList-focusIconForeground: #ffffff;
      --vscode-quickInputList-focusBackground: #04395e;
      --vscode-search-resultsInfoForeground: rgba(204, 204, 204, 0.65);
      --vscode-searchEditor-findMatchBackground: rgba(234, 92, 0, 0.22);
      --vscode-multiDiffEditor-headerBackground: #262626;
      --vscode-multiDiffEditor-border: #2b2b2b;
      --vscode-symbolIcon-arrayForeground: #cccccc;
      --vscode-symbolIcon-booleanForeground: #cccccc;
      --vscode-symbolIcon-classForeground: #ee9d28;
      --vscode-symbolIcon-colorForeground: #cccccc;
      --vscode-symbolIcon-constantForeground: #cccccc;
      --vscode-symbolIcon-constructorForeground: #b180d7;
      --vscode-symbolIcon-enumeratorForeground: #ee9d28;
      --vscode-symbolIcon-enumeratorMemberForeground: #75beff;
      --vscode-symbolIcon-eventForeground: #ee9d28;
      --vscode-symbolIcon-fieldForeground: #75beff;
      --vscode-symbolIcon-fileForeground: #cccccc;
      --vscode-symbolIcon-folderForeground: #cccccc;
      --vscode-symbolIcon-functionForeground: #b180d7;
      --vscode-symbolIcon-interfaceForeground: #75beff;
      --vscode-symbolIcon-keyForeground: #cccccc;
      --vscode-symbolIcon-keywordForeground: #cccccc;
      --vscode-symbolIcon-methodForeground: #b180d7;
      --vscode-symbolIcon-moduleForeground: #cccccc;
      --vscode-symbolIcon-namespaceForeground: #cccccc;
      --vscode-symbolIcon-nullForeground: #cccccc;
      --vscode-symbolIcon-numberForeground: #cccccc;
      --vscode-symbolIcon-objectForeground: #cccccc;
      --vscode-symbolIcon-operatorForeground: #cccccc;
      --vscode-symbolIcon-packageForeground: #cccccc;
      --vscode-symbolIcon-propertyForeground: #cccccc;
      --vscode-symbolIcon-referenceForeground: #cccccc;
      --vscode-symbolIcon-snippetForeground: #cccccc;
      --vscode-symbolIcon-stringForeground: #cccccc;
      --vscode-symbolIcon-structForeground: #cccccc;
      --vscode-symbolIcon-textForeground: #cccccc;
      --vscode-symbolIcon-typeParameterForeground: #cccccc;
      --vscode-symbolIcon-unitForeground: #cccccc;
      --vscode-symbolIcon-variableForeground: #75beff;
      --vscode-actionBar-toggledBackground: #383a49;
      --vscode-editorHoverWidget-highlightForeground: #2aaaff;
      --vscode-editor-lineHighlightBorder: #282828;
      --vscode-editor-rangeHighlightBackground: rgba(255, 255, 255, 0.04);
      --vscode-editor-symbolHighlightBackground: rgba(234, 92, 0, 0.33);
      --vscode-editorCursor-foreground: #aeafad;
      --vscode-editorMultiCursor-primary\.foreground: #aeafad;
      --vscode-editorMultiCursor-secondary\.foreground: #aeafad;
      --vscode-editorWhitespace-foreground: rgba(227, 228, 226, 0.16);
      --vscode-editorLineNumber-foreground: #6e7681;
      --vscode-editorIndentGuide-background: rgba(227, 228, 226, 0.16);
      --vscode-editorIndentGuide-activeBackground: rgba(227, 228, 226, 0.16);
      --vscode-editorIndentGuide-background1: #404040;
      --vscode-editorIndentGuide-background2: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-background3: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-background4: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-background5: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-background6: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground1: #707070;
      --vscode-editorIndentGuide-activeBackground2: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground3: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground4: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground5: rgba(0, 0, 0, 0);
      --vscode-editorIndentGuide-activeBackground6: rgba(0, 0, 0, 0);
      --vscode-editorActiveLineNumber-foreground: #c6c6c6;
      --vscode-editorLineNumber-activeForeground: #cccccc;
      --vscode-editorRuler-foreground: #5a5a5a;
      --vscode-editorCodeLens-foreground: #999999;
      --vscode-editorBracketMatch-background: rgba(0, 100, 0, 0.1);
      --vscode-editorBracketMatch-border: #888888;
      --vscode-editorOverviewRuler-border: #010409;
      --vscode-editorGutter-background: #1f1f1f;
      --vscode-editorUnnecessaryCode-opacity: rgba(0, 0, 0, 0.67);
      --vscode-editorGhostText-foreground: rgba(255, 255, 255, 0.34);
      --vscode-editorOverviewRuler-rangeHighlightForeground: rgba(
        0,
        122,
        204,
        0.6
      );
      --vscode-editorOverviewRuler-errorForeground: rgba(255, 18, 18, 0.7);
      --vscode-editorOverviewRuler-warningForeground: #cca700;
      --vscode-editorOverviewRuler-infoForeground: #3794ff;
      --vscode-editorBracketHighlight-foreground1: #ffd700;
      --vscode-editorBracketHighlight-foreground2: #da70d6;
      --vscode-editorBracketHighlight-foreground3: #179fff;
      --vscode-editorBracketHighlight-foreground4: rgba(0, 0, 0, 0);
      --vscode-editorBracketHighlight-foreground5: rgba(0, 0, 0, 0);
      --vscode-editorBracketHighlight-foreground6: rgba(0, 0, 0, 0);
      --vscode-editorBracketHighlight-unexpectedBracket\.foreground: rgba(
        255,
        18,
        18,
        0.8
      );
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
      --vscode-editorUnicodeHighlight-border: #cca700;
      --vscode-editor-placeholder\.foreground: rgba(255, 255, 255, 0.34);
      --vscode-diffEditor-move\.border: rgba(139, 139, 139, 0.61);
      --vscode-diffEditor-moveActive\.border: #ffa500;
      --vscode-diffEditor-unchangedRegionShadow: #000000;
      --vscode-editorOverviewRuler-bracketMatchForeground: #a0a0a0;
      --vscode-editor-foldBackground: rgba(38, 79, 120, 0.3);
      --vscode-editor-foldPlaceholderForeground: #808080;
      --vscode-editorGutter-foldingControlForeground: #cccccc;
      --vscode-editor-linkedEditingBackground: rgba(255, 0, 0, 0.3);
      --vscode-editor-wordHighlightBackground: rgba(87, 87, 87, 0.72);
      --vscode-editor-wordHighlightStrongBackground: rgba(0, 73, 114, 0.72);
      --vscode-editor-wordHighlightTextBackground: rgba(87, 87, 87, 0.72);
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
      --vscode-peekViewTitle-background: #252526;
      --vscode-peekViewTitleLabel-foreground: #ffffff;
      --vscode-peekViewTitleDescription-foreground: rgba(204, 204, 204, 0.7);
      --vscode-peekView-border: #3794ff;
      --vscode-peekViewResult-background: #1f1f1f;
      --vscode-peekViewResult-lineForeground: #bbbbbb;
      --vscode-peekViewResult-fileForeground: #ffffff;
      --vscode-peekViewResult-selectionBackground: rgba(51, 153, 255, 0.2);
      --vscode-peekViewResult-selectionForeground: #ffffff;
      --vscode-peekViewEditor-background: #1f1f1f;
      --vscode-peekViewEditorGutter-background: #1f1f1f;
      --vscode-peekViewEditorStickyScroll-background: #1f1f1f;
      --vscode-peekViewResult-matchHighlightBackground: rgba(187, 128, 9, 0.4);
      --vscode-peekViewEditor-matchHighlightBackground: rgba(187, 128, 9, 0.4);
      --vscode-editorMarkerNavigationError-background: #f14c4c;
      --vscode-editorMarkerNavigationError-headerBackground: rgba(
        241,
        76,
        76,
        0.1
      );
      --vscode-editorMarkerNavigationWarning-background: #cca700;
      --vscode-editorMarkerNavigationWarning-headerBackground: rgba(
        204,
        167,
        0,
        0.1
      );
      --vscode-editorMarkerNavigationInfo-background: #3794ff;
      --vscode-editorMarkerNavigationInfo-headerBackground: rgba(
        55,
        148,
        255,
        0.1
      );
      --vscode-editorMarkerNavigation-background: #1f1f1f;
      --vscode-editorSuggestWidget-background: #202020;
      --vscode-editorSuggestWidget-border: #454545;
      --vscode-editorSuggestWidget-foreground: #cccccc;
      --vscode-editorSuggestWidget-selectedForeground: #ffffff;
      --vscode-editorSuggestWidget-selectedIconForeground: #ffffff;
      --vscode-editorSuggestWidget-selectedBackground: #04395e;
      --vscode-editorSuggestWidget-highlightForeground: #2aaaff;
      --vscode-editorSuggestWidget-focusHighlightForeground: #2aaaff;
      --vscode-editorSuggestWidgetStatus-foreground: rgba(204, 204, 204, 0.5);
      --vscode-editorWatermark-foreground: rgba(204, 204, 204, 0.6);
      --vscode-tab-activeBackground: #1f1f1f;
      --vscode-tab-unfocusedActiveBackground: #1f1f1f;
      --vscode-tab-inactiveBackground: #181818;
      --vscode-tab-unfocusedInactiveBackground: #181818;
      --vscode-tab-activeForeground: #ffffff;
      --vscode-tab-inactiveForeground: #9d9d9d;
      --vscode-tab-unfocusedActiveForeground: rgba(255, 255, 255, 0.5);
      --vscode-tab-unfocusedInactiveForeground: rgba(157, 157, 157, 0.5);
      --vscode-tab-hoverBackground: #1f1f1f;
      --vscode-tab-unfocusedHoverBackground: #1f1f1f;
      --vscode-tab-border: #2b2b2b;
      --vscode-tab-lastPinnedBorder: rgba(204, 204, 204, 0.2);
      --vscode-tab-activeBorder: #1f1f1f;
      --vscode-tab-unfocusedActiveBorder: #1f1f1f;
      --vscode-tab-activeBorderTop: #0078d4;
      --vscode-tab-unfocusedActiveBorderTop: #2b2b2b;
      --vscode-tab-selectedBorderTop: #6caddf;
      --vscode-tab-selectedBackground: #222222;
      --vscode-tab-selectedForeground: rgba(255, 255, 255, 0.63);
      --vscode-tab-dragAndDropBorder: #ffffff;
      --vscode-tab-activeModifiedBorder: #3399cc;
      --vscode-tab-inactiveModifiedBorder: rgba(51, 153, 204, 0.5);
      --vscode-tab-unfocusedActiveModifiedBorder: rgba(51, 153, 204, 0.5);
      --vscode-tab-unfocusedInactiveModifiedBorder: rgba(51, 153, 204, 0.25);
      --vscode-editorPane-background: #1f1f1f;
      --vscode-editorGroupHeader-tabsBackground: #181818;
      --vscode-editorGroupHeader-tabsBorder: #2b2b2b;
      --vscode-editorGroupHeader-noTabsBackground: #1f1f1f;
      --vscode-editorGroup-border: rgba(255, 255, 255, 0.09);
      --vscode-editorGroup-dropBackground: rgba(83, 89, 93, 0.5);
      --vscode-editorGroup-dropIntoPromptForeground: #cccccc;
      --vscode-editorGroup-dropIntoPromptBackground: #202020;
      --vscode-sideBySideEditor-horizontalBorder: rgba(255, 255, 255, 0.09);
      --vscode-sideBySideEditor-verticalBorder: rgba(255, 255, 255, 0.09);
      --vscode-panel-background: #181818;
      --vscode-panel-border: #2b2b2b;
      --vscode-panelTitle-activeForeground: #cccccc;
      --vscode-panelTitle-inactiveForeground: #9d9d9d;
      --vscode-panelTitle-activeBorder: #0078d4;
      --vscode-panelInput-border: #2b2b2b;
      --vscode-panel-dropBorder: #cccccc;
      --vscode-panelSection-dropBackground: rgba(83, 89, 93, 0.5);
      --vscode-panelSectionHeader-background: rgba(128, 128, 128, 0.2);
      --vscode-panelSection-border: #2b2b2b;
      --vscode-panelStickyScroll-background: #181818;
      --vscode-panelStickyScroll-shadow: #000000;
      --vscode-banner-background: #04395e;
      --vscode-banner-foreground: #ffffff;
      --vscode-banner-iconForeground: #3794ff;
      --vscode-statusBar-foreground: #cccccc;
      --vscode-statusBar-noFolderForeground: #cccccc;
      --vscode-statusBar-background: #181818;
      --vscode-statusBar-noFolderBackground: #1f1f1f;
      --vscode-statusBar-border: #2b2b2b;
      --vscode-statusBar-focusBorder: #0078d4;
      --vscode-statusBar-noFolderBorder: #2b2b2b;
      --vscode-statusBarItem-activeBackground: rgba(255, 255, 255, 0.18);
      --vscode-statusBarItem-focusBorder: #0078d4;
      --vscode-statusBarItem-hoverBackground: rgba(255, 255, 255, 0.12);
      --vscode-statusBarItem-hoverForeground: #cccccc;
      --vscode-statusBarItem-compactHoverBackground: rgba(255, 255, 255, 0.2);
      --vscode-statusBarItem-prominentForeground: #cccccc;
      --vscode-statusBarItem-prominentBackground: rgba(110, 118, 129, 0.4);
      --vscode-statusBarItem-prominentHoverForeground: #cccccc;
      --vscode-statusBarItem-prominentHoverBackground: rgba(0, 0, 0, 0.3);
      --vscode-statusBarItem-errorBackground: #b91007;
      --vscode-statusBarItem-errorForeground: #ffffff;
      --vscode-statusBarItem-errorHoverForeground: #cccccc;
      --vscode-statusBarItem-errorHoverBackground: rgba(255, 255, 255, 0.12);
      --vscode-statusBarItem-warningBackground: #7a6400;
      --vscode-statusBarItem-warningForeground: #ffffff;
      --vscode-statusBarItem-warningHoverForeground: #cccccc;
      --vscode-statusBarItem-warningHoverBackground: rgba(255, 255, 255, 0.12);
      --vscode-activityBar-background: #181818;
      --vscode-activityBar-foreground: #d7d7d7;
      --vscode-activityBar-inactiveForeground: #868686;
      --vscode-activityBar-border: #2b2b2b;
      --vscode-activityBar-activeBorder: #0078d4;
      --vscode-activityBar-dropBorder: #d7d7d7;
      --vscode-activityBarBadge-background: #0078d4;
      --vscode-activityBarBadge-foreground: #ffffff;
      --vscode-activityBarTop-foreground: #e7e7e7;
      --vscode-activityBarTop-activeBorder: #e7e7e7;
      --vscode-activityBarTop-inactiveForeground: rgba(231, 231, 231, 0.6);
      --vscode-activityBarTop-dropBorder: #e7e7e7;
      --vscode-profileBadge-background: #4d4d4d;
      --vscode-profileBadge-foreground: #ffffff;
      --vscode-statusBarItem-remoteBackground: #0078d4;
      --vscode-statusBarItem-remoteForeground: #ffffff;
      --vscode-statusBarItem-remoteHoverForeground: #cccccc;
      --vscode-statusBarItem-remoteHoverBackground: rgba(255, 255, 255, 0.12);
      --vscode-statusBarItem-offlineBackground: #6c1717;
      --vscode-statusBarItem-offlineForeground: #ffffff;
      --vscode-statusBarItem-offlineHoverForeground: #cccccc;
      --vscode-statusBarItem-offlineHoverBackground: rgba(255, 255, 255, 0.12);
      --vscode-extensionBadge-remoteBackground: #0078d4;
      --vscode-extensionBadge-remoteForeground: #ffffff;
      --vscode-sideBar-background: #181818;
      --vscode-sideBar-foreground: #cccccc;
      --vscode-sideBar-border: #2b2b2b;
      --vscode-sideBarTitle-background: #181818;
      --vscode-sideBarTitle-foreground: #cccccc;
      --vscode-sideBar-dropBackground: rgba(83, 89, 93, 0.5);
      --vscode-sideBarSectionHeader-background: #181818;
      --vscode-sideBarSectionHeader-foreground: #cccccc;
      --vscode-sideBarSectionHeader-border: #2b2b2b;
      --vscode-sideBarActivityBarTop-border: #2b2b2b;
      --vscode-sideBarStickyScroll-background: #181818;
      --vscode-sideBarStickyScroll-shadow: #000000;
      --vscode-titleBar-activeForeground: #cccccc;
      --vscode-titleBar-inactiveForeground: #9d9d9d;
      --vscode-titleBar-activeBackground: #181818;
      --vscode-titleBar-inactiveBackground: #1f1f1f;
      --vscode-titleBar-border: #2b2b2b;
      --vscode-menubar-selectionForeground: #cccccc;
      --vscode-menubar-selectionBackground: rgba(90, 93, 94, 0.31);
      --vscode-commandCenter-foreground: #cccccc;
      --vscode-commandCenter-activeForeground: #cccccc;
      --vscode-commandCenter-inactiveForeground: #9d9d9d;
      --vscode-commandCenter-background: rgba(255, 255, 255, 0.05);
      --vscode-commandCenter-activeBackground: rgba(255, 255, 255, 0.08);
      --vscode-commandCenter-border: rgba(204, 204, 204, 0.2);
      --vscode-commandCenter-activeBorder: rgba(204, 204, 204, 0.3);
      --vscode-commandCenter-inactiveBorder: rgba(157, 157, 157, 0.25);
      --vscode-notificationCenter-border: #313131;
      --vscode-notificationToast-border: #313131;
      --vscode-notifications-foreground: #cccccc;
      --vscode-notifications-background: #1f1f1f;
      --vscode-notificationLink-foreground: #4daafc;
      --vscode-notificationCenterHeader-foreground: #cccccc;
      --vscode-notificationCenterHeader-background: #1f1f1f;
      --vscode-notifications-border: #2b2b2b;
      --vscode-notificationsErrorIcon-foreground: #f14c4c;
      --vscode-notificationsWarningIcon-foreground: #cca700;
      --vscode-notificationsInfoIcon-foreground: #3794ff;
      --vscode-chat-requestBorder: rgba(255, 255, 255, 0.1);
      --vscode-chat-requestBackground: rgba(31, 31, 31, 0.62);
      --vscode-chat-slashCommandBackground: #34414b;
      --vscode-chat-slashCommandForeground: #40a6ff;
      --vscode-chat-avatarBackground: #1f1f1f;
      --vscode-chat-avatarForeground: #cccccc;
      --vscode-simpleFindWidget-sashBorder: #454545;
      --vscode-commentsView-resolvedIcon: rgba(204, 204, 204, 0.5);
      --vscode-commentsView-unresolvedIcon: #0078d4;
      --vscode-editorCommentsWidget-replyInputBackground: #252526;
      --vscode-editorCommentsWidget-resolvedBorder: rgba(204, 204, 204, 0.5);
      --vscode-editorCommentsWidget-unresolvedBorder: #0078d4;
      --vscode-editorCommentsWidget-rangeBackground: rgba(0, 120, 212, 0.1);
      --vscode-editorCommentsWidget-rangeActiveBackground: rgba(
        0,
        120,
        212,
        0.1
      );
      --vscode-editorGutter-commentRangeForeground: #37373d;
      --vscode-editorOverviewRuler-commentForeground: #37373d;
      --vscode-editorOverviewRuler-commentUnresolvedForeground: #37373d;
      --vscode-editorGutter-commentGlyphForeground: #cccccc;
      --vscode-editorGutter-commentUnresolvedGlyphForeground: #cccccc;
      --vscode-debugToolBar-background: #181818;
      --vscode-debugIcon-startForeground: #89d185;
      --vscode-editor-stackFrameHighlightBackground: rgba(255, 255, 0, 0.2);
      --vscode-editor-focusedStackFrameHighlightBackground: rgba(
        122,
        189,
        122,
        0.3
      );
      --vscode-inlineChat-foreground: #cccccc;
      --vscode-inlineChat-background: #202020;
      --vscode-inlineChat-border: #454545;
      --vscode-inlineChat-shadow: rgba(0, 0, 0, 0.36);
      --vscode-inlineChatInput-border: #454545;
      --vscode-inlineChatInput-focusBorder: #0078d4;
      --vscode-inlineChatInput-placeholderForeground: #989898;
      --vscode-inlineChatInput-background: #313131;
      --vscode-inlineChatDiff-inserted: rgba(156, 204, 44, 0.1);
      --vscode-editorOverviewRuler-inlineChatInserted: rgba(156, 204, 44, 0.12);
      --vscode-inlineChatDiff-removed: rgba(255, 0, 0, 0.1);
      --vscode-editorOverviewRuler-inlineChatRemoved: rgba(255, 0, 0, 0.12);
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
      --vscode-mergeEditor-conflict\.input1\.background: rgba(
        64,
        200,
        174,
        0.2
      );
      --vscode-mergeEditor-conflict\.input2\.background: rgba(
        64,
        166,
        255,
        0.2
      );
      --vscode-settings-headerForeground: #ffffff;
      --vscode-settings-settingsHeaderHoverForeground: rgba(255, 255, 255, 0.7);
      --vscode-settings-modifiedItemIndicator: rgba(187, 128, 9, 0.4);
      --vscode-settings-headerBorder: #2b2b2b;
      --vscode-settings-sashBorder: #2b2b2b;
      --vscode-settings-dropdownBackground: #313131;
      --vscode-settings-dropdownForeground: #cccccc;
      --vscode-settings-dropdownBorder: #3c3c3c;
      --vscode-settings-dropdownListBorder: #454545;
      --vscode-settings-checkboxBackground: #313131;
      --vscode-settings-checkboxForeground: #cccccc;
      --vscode-settings-checkboxBorder: #3c3c3c;
      --vscode-settings-textInputBackground: #313131;
      --vscode-settings-textInputForeground: #cccccc;
      --vscode-settings-textInputBorder: #3c3c3c;
      --vscode-settings-numberInputBackground: #313131;
      --vscode-settings-numberInputForeground: #cccccc;
      --vscode-settings-numberInputBorder: #3c3c3c;
      --vscode-settings-focusedRowBackground: rgba(42, 45, 46, 0.6);
      --vscode-settings-rowHoverBackground: rgba(42, 45, 46, 0.3);
      --vscode-settings-focusedRowBorder: #0078d4;
      --vscode-scm-historyGraph\.historyItemGroupLocal: #3794ff;
      --vscode-scm-historyGraph\.historyItemGroupRemote: #b180d7;
      --vscode-scm-historyGraph\.historyItemGroupBase: #d18616;
      --vscode-scm-historyGraph\.historyItemGroupHoverLabelForeground: #ffffff;
      --vscode-scm-historyGraph\.green: #89d185;
      --vscode-scm-historyGraph\.red: #f14c4c;
      --vscode-scm-historyGraph\.yellow: #cca700;
      --vscode-terminal-foreground: #cccccc;
      --vscode-terminal-selectionBackground: #264f78;
      --vscode-terminal-inactiveSelectionBackground: #3a3d41;
      --vscode-terminalCommandDecoration-defaultBackground: rgba(
        255,
        255,
        255,
        0.25
      );
      --vscode-terminalCommandDecoration-successBackground: #1b81a8;
      --vscode-terminalCommandDecoration-errorBackground: #f14c4c;
      --vscode-terminalOverviewRuler-cursorForeground: rgba(160, 160, 160, 0.8);
      --vscode-terminal-border: #2b2b2b;
      --vscode-terminalOverviewRuler-border: #010409;
      --vscode-terminal-findMatchBackground: #9e6a03;
      --vscode-terminal-hoverHighlightBackground: rgba(38, 79, 120, 0.13);
      --vscode-terminal-findMatchHighlightBackground: rgba(234, 92, 0, 0.33);
      --vscode-terminalOverviewRuler-findMatchForeground: rgba(
        209,
        134,
        22,
        0.49
      );
      --vscode-terminal-dropBackground: rgba(83, 89, 93, 0.5);
      --vscode-terminal-tab\.activeBorder: #0078d4;
      --vscode-terminal-initialHintForeground: rgba(255, 255, 255, 0.34);
      --vscode-terminalStickyScrollHover-background: #2a2d2e;
      --vscode-testing-iconFailed: #f14c4c;
      --vscode-testing-iconErrored: #f14c4c;
      --vscode-testing-iconPassed: #73c991;
      --vscode-testing-runAction: #73c991;
      --vscode-testing-iconQueued: #cca700;
      --vscode-testing-iconUnset: #848484;
      --vscode-testing-iconSkipped: #848484;
      --vscode-testing-peekBorder: #f14c4c;
      --vscode-testing-messagePeekBorder: #3794ff;
      --vscode-testing-peekHeaderBackground: rgba(241, 76, 76, 0.1);
      --vscode-testing-messagePeekHeaderBackground: rgba(55, 148, 255, 0.1);
      --vscode-testing-coveredBackground: rgba(156, 204, 44, 0.2);
      --vscode-testing-coveredBorder: rgba(156, 204, 44, 0.15);
      --vscode-testing-coveredGutterBackground: rgba(156, 204, 44, 0.12);
      --vscode-testing-uncoveredBranchBackground: #781212;
      --vscode-testing-uncoveredBackground: rgba(255, 0, 0, 0.2);
      --vscode-testing-uncoveredBorder: rgba(255, 0, 0, 0.15);
      --vscode-testing-uncoveredGutterBackground: rgba(255, 0, 0, 0.3);
      --vscode-testing-coverCountBadgeBackground: #616161;
      --vscode-testing-coverCountBadgeForeground: #f8f8f8;
      --vscode-testing-message\.error\.decorationForeground: #f14c4c;
      --vscode-testing-message\.error\.lineBackground: rgba(255, 0, 0, 0.2);
      --vscode-testing-message\.info\.decorationForeground: rgba(
        204,
        204,
        204,
        0.5
      );
      --vscode-testing-iconErrored\.retired: rgba(241, 76, 76, 0.7);
      --vscode-testing-iconFailed\.retired: rgba(241, 76, 76, 0.7);
      --vscode-testing-iconPassed\.retired: rgba(115, 201, 145, 0.7);
      --vscode-testing-iconQueued\.retired: rgba(204, 167, 0, 0.7);
      --vscode-testing-iconUnset\.retired: rgba(132, 132, 132, 0.7);
      --vscode-testing-iconSkipped\.retired: rgba(132, 132, 132, 0.7);
      --vscode-welcomePage-tileBackground: #2b2b2b;
      --vscode-welcomePage-tileHoverBackground: #262626;
      --vscode-welcomePage-tileBorder: rgba(255, 255, 255, 0.1);
      --vscode-welcomePage-progress\.background: #313131;
      --vscode-welcomePage-progress\.foreground: #0078d4;
      --vscode-walkthrough-stepTitle\.foreground: #ffffff;
      --vscode-walkThrough-embeddedEditorBackground: rgba(0, 0, 0, 0.4);
      --vscode-debugExceptionWidget-border: #a31515;
      --vscode-debugExceptionWidget-background: #420b0d;
      --vscode-statusBar-debuggingBackground: #0078d4;
      --vscode-statusBar-debuggingForeground: #ffffff;
      --vscode-statusBar-debuggingBorder: #2b2b2b;
      --vscode-commandCenter-debuggingBackground: rgba(0, 120, 212, 0.26);
      --vscode-editorGutter-modifiedBackground: #0078d4;
      --vscode-editorGutter-addedBackground: #2ea043;
      --vscode-editorGutter-deletedBackground: #f85149;
      --vscode-minimapGutter-modifiedBackground: #0078d4;
      --vscode-minimapGutter-addedBackground: #2ea043;
      --vscode-minimapGutter-deletedBackground: #f85149;
      --vscode-editorOverviewRuler-modifiedForeground: rgba(0, 120, 212, 0.6);
      --vscode-editorOverviewRuler-addedForeground: rgba(46, 160, 67, 0.6);
      --vscode-editorOverviewRuler-deletedForeground: rgba(248, 81, 73, 0.6);
      --vscode-keybindingTable-headerBackground: rgba(204, 204, 204, 0.04);
      --vscode-keybindingTable-rowsBackground: rgba(204, 204, 204, 0.04);
      --vscode-debugIcon-breakpointForeground: #e51400;
      --vscode-debugIcon-breakpointDisabledForeground: #848484;
      --vscode-debugIcon-breakpointUnverifiedForeground: #848484;
      --vscode-debugIcon-breakpointCurrentStackframeForeground: #ffcc00;
      --vscode-debugIcon-breakpointStackframeForeground: #89d185;
      --vscode-editor-inlineValuesForeground: rgba(255, 255, 255, 0.5);
      --vscode-editor-inlineValuesBackground: rgba(255, 200, 0, 0.2);
      --vscode-ports-iconRunningProcessForeground: #369432;
      --vscode-profiles-sashBorder: #2b2b2b;
      --vscode-debugTokenExpression-name: #c586c0;
      --vscode-debugTokenExpression-type: #4a90e2;
      --vscode-debugTokenExpression-value: rgba(204, 204, 204, 0.6);
      --vscode-debugTokenExpression-string: #ce9178;
      --vscode-debugTokenExpression-boolean: #4e94ce;
      --vscode-debugTokenExpression-number: #b5cea8;
      --vscode-debugTokenExpression-error: #f48771;
      --vscode-debugView-exceptionLabelForeground: #cccccc;
      --vscode-debugView-exceptionLabelBackground: #6c2022;
      --vscode-debugView-stateLabelForeground: #cccccc;
      --vscode-debugView-stateLabelBackground: rgba(136, 136, 136, 0.27);
      --vscode-debugView-valueChangedHighlight: #569cd6;
      --vscode-debugConsole-infoForeground: #3794ff;
      --vscode-debugConsole-warningForeground: #cca700;
      --vscode-debugConsole-errorForeground: #f85149;
      --vscode-debugConsole-sourceForeground: #cccccc;
      --vscode-debugConsoleInputIcon-foreground: #cccccc;
      --vscode-debugIcon-pauseForeground: #75beff;
      --vscode-debugIcon-stopForeground: #f48771;
      --vscode-debugIcon-disconnectForeground: #f48771;
      --vscode-debugIcon-restartForeground: #89d185;
      --vscode-debugIcon-stepOverForeground: #75beff;
      --vscode-debugIcon-stepIntoForeground: #75beff;
      --vscode-debugIcon-stepOutForeground: #75beff;
      --vscode-debugIcon-continueForeground: #75beff;
      --vscode-debugIcon-stepBackForeground: #75beff;
      --vscode-scm-historyItemAdditionsForeground: #81b88b;
      --vscode-scm-historyItemDeletionsForeground: #c74e39;
      --vscode-scm-historyItemStatisticsBorder: rgba(204, 204, 204, 0.2);
      --vscode-scm-historyItemSelectedStatisticsBorder: rgba(
        255,
        255,
        255,
        0.2
      );
      --vscode-extensionButton-background: #0078d4;
      --vscode-extensionButton-foreground: #ffffff;
      --vscode-extensionButton-hoverBackground: #026ec1;
      --vscode-extensionButton-separator: rgba(255, 255, 255, 0.4);
      --vscode-extensionButton-prominentBackground: #0078d4;
      --vscode-extensionButton-prominentForeground: #ffffff;
      --vscode-extensionButton-prominentHoverBackground: #026ec1;
      --vscode-extensionIcon-starForeground: #ff8e00;
      --vscode-extensionIcon-verifiedForeground: #4daafc;
      --vscode-extensionIcon-preReleaseForeground: #1d9271;
      --vscode-extensionIcon-sponsorForeground: #d758b3;
      --vscode-notebook-cellBorderColor: #37373d;
      --vscode-notebook-focusedEditorBorder: #0078d4;
      --vscode-notebookStatusSuccessIcon-foreground: #89d185;
      --vscode-notebookEditorOverviewRuler-runningCellForeground: #89d185;
      --vscode-notebookStatusErrorIcon-foreground: #f85149;
      --vscode-notebookStatusRunningIcon-foreground: #cccccc;
      --vscode-notebook-cellToolbarSeparator: rgba(128, 128, 128, 0.35);
      --vscode-notebook-selectedCellBackground: #37373d;
      --vscode-notebook-selectedCellBorder: #37373d;
      --vscode-notebook-focusedCellBorder: #0078d4;
      --vscode-notebook-inactiveFocusedCellBorder: #37373d;
      --vscode-notebook-cellStatusBarItemHoverBackground: rgba(
        255,
        255,
        255,
        0.15
      );
      --vscode-notebook-cellInsertionIndicator: #0078d4;
      --vscode-notebookScrollbarSlider-background: rgba(121, 121, 121, 0.4);
      --vscode-notebookScrollbarSlider-hoverBackground: rgba(
        100,
        100,
        100,
        0.7
      );
      --vscode-notebookScrollbarSlider-activeBackground: rgba(
        191,
        191,
        191,
        0.4
      );
      --vscode-notebook-symbolHighlightBackground: rgba(255, 255, 255, 0.04);
      --vscode-notebook-cellEditorBackground: #181818;
      --vscode-notebook-editorBackground: #1f1f1f;
      --vscode-interactive-activeCodeBorder: #007acc;
      --vscode-interactive-inactiveCodeBorder: #37373d;
      --vscode-searchEditor-textInputBorder: #3c3c3c;
      --vscode-terminal-ansiBlack: #000000;
      --vscode-terminal-ansiRed: #cd3131;
      --vscode-terminal-ansiGreen: #0dbc79;
      --vscode-terminal-ansiYellow: #e5e510;
      --vscode-terminal-ansiBlue: #2472c8;
      --vscode-terminal-ansiMagenta: #bc3fbc;
      --vscode-terminal-ansiCyan: #11a8cd;
      --vscode-terminal-ansiWhite: #e5e5e5;
      --vscode-terminal-ansiBrightBlack: #666666;
      --vscode-terminal-ansiBrightRed: #f14c4c;
      --vscode-terminal-ansiBrightGreen: #23d18b;
      --vscode-terminal-ansiBrightYellow: #f5f543;
      --vscode-terminal-ansiBrightBlue: #3b8eea;
      --vscode-terminal-ansiBrightMagenta: #d670d6;
      --vscode-terminal-ansiBrightCyan: #29b8db;
      --vscode-terminal-ansiBrightWhite: #e5e5e5;
      --vscode-gitDecoration-addedResourceForeground: #81b88b;
      --vscode-gitDecoration-modifiedResourceForeground: #e2c08d;
      --vscode-gitDecoration-deletedResourceForeground: #c74e39;
      --vscode-gitDecoration-renamedResourceForeground: #73c991;
      --vscode-gitDecoration-untrackedResourceForeground: #73c991;
      --vscode-gitDecoration-ignoredResourceForeground: #8c8c8c;
      --vscode-gitDecoration-stageModifiedResourceForeground: #e2c08d;
      --vscode-gitDecoration-stageDeletedResourceForeground: #c74e39;
      --vscode-gitDecoration-conflictingResourceForeground: #e4676b;
      --vscode-gitDecoration-submoduleResourceForeground: #8db9e2;
      --vscode-lintlens-annotationColor: rgba(153, 153, 153, 0.31);
      --vscode-issues-newIssueDecoration: rgba(255, 255, 255, 0.28);
      --vscode-issues-open: #3fb950;
      --vscode-issues-closed: #cb2431;
      --vscode-pullRequests-merged: #8957e5;
      --vscode-pullRequests-draft: #6e7681;
      --vscode-pullRequests-open: #3fb950;
      --vscode-pullRequests-closed: #cb2431;
      --vscode-pullRequests-notification: #3794ff;
    }
  `
);

export default theme;
