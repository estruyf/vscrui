import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';
import { Label } from '../Label';
import useId from '../../hooks/useId';

export type TextAreaResize = 'none' | 'both' | 'horizontal' | 'vertical';

export interface ITextAreaProps extends Omit<BaseComponentProps, 'onChange'> {
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
  resize: TextAreaResize;
  value?: string;
  onChange?: (value: string) => void;
}

const TextAreaElm = styled.div`
  font-family: var(--vscode-font-family);
  font-size: var(--vscode-font-size);
  display: inline-block;
  min-width: 100px;
`;

const LabelElm = styled(Label)`
  margin-bottom: 2px;
`;

const InputElm = styled.textarea`
  appearance: none;
  font-size: var(--vscode-font-size);
  color: var(--vscode-input-foreground);
  background: var(--vscode-input-background);
  border: 1px solid var(--vscode-dropdown-border);
  border-radius: 2px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  height: 26px;
  padding: 9px;
  width: 100%;
  height: 100%;
  resize: none;

  &:hover,
	&:focus-visible,
	&:disabled,
	&:active,
  &:focus {
		outline: none;
    box-shadow: none;
	}

  &:not([disabled]):hover {
    background: var(--vscode-input-background);
    border-color: var(--vscode-dropdown-border);
  }

  &:not([disabled]):active {
    background: var(--vscode-input-background);
		border-color: var(--vscode-focusBorder);
	}

  &:not([disabled]):focus,
  &:not([disabled]):focus-within {
		border-color: var(--vscode-focusBorder);
  }

  &:disabled,
	&:readonly {
		cursor: not-allowed;
	}

  &:disabled {
    opacity: 0.4;
    border-color: var(--vscode-dropdown-border);
  }

  &[data-resize='both'] {
    resize: both;
  }

  &[data-resize='horizontal'] {
    resize: horizontal;
  }

  &[data-resize='vertical'] {
    resize: vertical;
  }

  &[data-resize='none'] {
    resize: none;
  }
`;

const TextArea = ({
  className,
  children,
  disabled,
  readonly,
  value,
  onChange,
  placeholder,
  resize,
  ...rest
}: React.PropsWithChildren<ITextAreaProps>) => {
  const [inputValue, setInputValue] = React.useState(value);
  const id = useId();

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);


  return (
    <TextAreaElm
      className={`vscrui-TextArea ${className || ""}`}
      {...rest}>
      {children && <LabelElm htmlFor={id}>{children}</LabelElm>}

      <InputElm
        id={id}
        className='vscrui-TextArea__input'
        defaultValue={inputValue}
        placeholder={placeholder}
        data-resize={resize}
        disabled={disabled}
        readOnly={readonly}
        onChange={onInputChange}
      />
    </TextAreaElm>
  );
};

TextArea.displayName = 'VSCRUI_TextArea';
export { TextArea };