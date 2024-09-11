import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';
import { Label } from '../Label';

export interface ITextFieldProps extends BaseComponentProps {
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const TextFieldElm = styled.div`
  font-family: var(--vscode-font-family);
  font-size: var(--vscode-font-size);
  display: inline-block;
`;

const LabelElm = styled(Label)`
  margin-bottom: 2px;
`;

const InputElm = styled.input`
  appearance: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  color: var(--vscode-input-foreground, #cccccc);
  background: var(--vscode-input-background, #3c3c3c);
  border-radius: 2px;
  border: 1px solid var(--vscode-dropdown-border, #3c3c3c);
  height: 26px;
  min-width: 100px;
  padding: 0 9px;

  &:hover,
	&:focus-visible,
	&:disabled,
	&:active {
		outline: none;
	}

  &:not([disabled]):hover {
    background: var(--vscode-input-background, #3c3c3c);
    border-color: var(--vscode-dropdown-border, #3c3c3c);
  }

  &:not([disabled]):active {
    background: var(--vscode-input-background, #3c3c3c);
		border-color: var(--vscode-focusBorder, #007fd4);
	}

  &:not([disabled]):focus-within {
		border-color: var(--vscode-focusBorder, #007fd4);
  }

  &:disabled,
	&:readonly {
		cursor: not-allowed;
	}

  &:disabled {
    opacity: 0.4;
    border-color: var(--vscode-dropdown-border, #3c3c3c);
  }
`;

export const TextField = ({
  className,
  children,
  disabled,
  readonly,
  value,
  onChange,
  placeholder,
}: React.PropsWithChildren<ITextFieldProps>) => {
  const [inputValue, setInputValue] = React.useState(value);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);


  return (
    <TextFieldElm className={`${className || ""}`}>
      {children && <LabelElm>{children}</LabelElm>}

      <InputElm
        type='text'
        defaultValue={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        onChange={onInputChange}
      />
    </TextFieldElm>
  );
};