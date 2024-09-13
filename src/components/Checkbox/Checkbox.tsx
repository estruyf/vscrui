import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';
import useId from '../../hooks/useId';

export interface ICheckboxProps extends Omit<BaseComponentProps, 'onChange'> {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckboxElm = styled.label`
  font-family: var(--vscode-font-family);
  font-size: var(--vscode-font-size);
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  outline: none;
  user-select: none;

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  input {
    opacity: 0;
    outline: none;
    appearance: none;
    position: absolute;
  }
`;

const SvgElm = styled.svg`
  background: var(--vscode-checkbox-background);
  border: 1px solid var(--vscode-checkbox-border);
  border-radius: 2px;
  color: var(--vscode-checkbox-foreground);
  display: inline-block;
  width: 16px;
  height: 16px;
  transition: 60ms transform ease-in-out;

  &:active, &:focus, &:focus-visible {
    border-color: var(--vscode-focusBorder);
  }
`;

const SpanElm = styled.span`
  padding-left: 10px;
`;

const Checkmark = ({ checked }: React.PropsWithChildren<{ checked: boolean }>) => {
  return (
    <SvgElm
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={checked ? 'currentColor' : 'transparent'}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"></path>
    </SvgElm>
  );
};


const Indeterminate = () => {
  return (
    <SvgElm
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={'currentColor'}>
      <rect x="4" y="4" height="8" width="8" rx="2" />
    </SvgElm>
  );
};


export const Checkbox = ({
  checked,
  children,
  className,
  indeterminate,
  disabled,
  onChange,
  ...rest
}: React.PropsWithChildren<ICheckboxProps>) => {
  const [isChecked, setIsChecked] = React.useState(!!checked);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const id = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange && onChange(e.target.checked);
  }

  React.useEffect(() => {
    setIsChecked(!!checked);
  }, [checked]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate === true;
    }
  }, [indeterminate]);

  return (
    <CheckboxElm
      htmlFor={id}
      className={`${className || ""} ${disabled ? "disabled" : ""}`}
      {...rest}>
      <input
        id={id}
        ref={inputRef}
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />

      {indeterminate === true ? <Indeterminate /> : <Checkmark checked={isChecked} />}

      {children && <SpanElm>{children}</SpanElm>}
    </CheckboxElm>
  );
};