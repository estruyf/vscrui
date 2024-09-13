import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';
import { Label } from '../Label';
import useId from '../../hooks/useId';

export interface ITextFieldProps extends Omit<BaseComponentProps, 'onChange'> {
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
  min-width: 100px;
`;

const LabelElm = styled(Label)`
  margin-bottom: 2px;
`;

const InputElm = styled.input`
  appearance: none;
  font-size: var(--vscode-font-size);
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  color: var(--vscode-input-foreground);
  background: var(--vscode-input-background);
  border-radius: 2px;
  border: 1px solid var(--vscode-dropdown-border);
  height: 26px;
  padding: 0 9px;
  width: 100%;

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
`;

export const TextField = ({
  className,
  children,
  disabled,
  readonly,
  value,
  onChange,
  placeholder,
  ...rest
}: React.PropsWithChildren<ITextFieldProps>) => {
  const [inputValue, setInputValue] = React.useState(value);
  const id = useId();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);


  return (
    <TextFieldElm
      className={`${className || ""}`}
      {...rest}>
      {children && <LabelElm htmlFor={id}>{children}</LabelElm>}

      <InputElm
        type='text'
        id={id}
        defaultValue={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        onChange={onInputChange}
      />
    </TextFieldElm>
  );
};