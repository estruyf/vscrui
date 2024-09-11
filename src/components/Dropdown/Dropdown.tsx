import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface IDropdownProps extends BaseComponentProps {
  open?: boolean;
  disabled?: boolean;
  options: string[] | DropdownOption[];
  value?: string | DropdownOption;
  placeholder?: string;
  position: 'above' | 'below';
  onChange?: (value: string | DropdownOption | undefined) => void;
}

const SelectElm = styled.div`
  display: inline-block;
  font-family: var(--vscode-font-family);
  font-size: var(--vscode-font-size);
  color: var(--vscode-foreground);
  cursor: pointer;
  box-sizing: border-box;
  min-width: 100px;
  position: relative;
  user-select: none;
  outline: none;
  vertical-align: top;

  &:focus-visible {
		border-color: var(--vscode-focusBorder, #007fd4);
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

const TriggerElm = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--vscode-dropdown-background, #3c3c3c);
  border: 1px solid var(--vscode-dropdown-border, #3c3c3c);
  border-radius: 2px;
  height: 26px;
  box-sizing: border-box;
  contain: content;
  width: 100px;
  cursor: pointer;
  line-height: normal;
  padding: 2px 6px 2px 8px;

  &:not([disabled]):hover {
		background: var(--vscode-dropdown-background, #3c3c3c);
		border-color: var(--vscode-dropdown-border, #3c3c3c);
	}

  &:not([disabled]):active {
    border-color: var(--vscode-focusBorder, #007fd4);
  }

  &:focus {
    border-color: var(--vscode-focusBorder, #007fd4);
  }
`;

const ListboxElm = styled.div<{ position: string }>`
  background: var(--vscode-dropdown-background, #3c3c3c);
  border: 1px solid var(--vscode-focusBorder, #007fd4);
  box-sizing: border-box;
  left: 0px;
  max-height: 200px;
  padding: 0 0 4px 0;
  overflow-y: auto;
  position: absolute;
  width: 100%;
  z-index: 1;

  // Below
  border-radius: ${props => props.position === "above" ? "2px 2px 0 0" : "0 0 2px 2px"};
  top: ${props => props.position === "above" ? "auto" : "26px"};
  bottom: ${props => props.position === "above" ? "26px" : "auto"};

  ul {
    box-sizing: border-box;
    cursor: pointer;
    list-style: none;
    margin: 0px;
    max-height: 222px;
    overflow: auto;
    padding: 1px;
  }
`;

const ListItemElm = styled.li`
  font-family: var(--vscode-font-family);
  font-size: var(--vscode-font-size);
  color: var(--vscode-foreground);
  border: 1px solid transparent;
  border-radius: 2px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: normal;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 0 2px 1px;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:focus-visible {
		border-color: var(--vscode-focusBorder, #007fd4);
		background: var(--vscode-list-activeSelectionBackground, #094771);
		color: var(--vscode-foreground);
  }

  &[aria-selected="true"] {
    background: var(--vscode-list-activeSelectionBackground, #094771);
    border: 1px solid transparent;
    color: var(--vscode-list-activeSelectionForeground, #ffffff);
  }

  &:active {
		background: var(--vscode-list-activeSelectionBackground, #094771);
		color: var(--vscode-list-activeSelectionForeground, #ffffff);
  }

  &:not([aria-selected='true']):hover {
    background: var(--vscode-list-activeSelectionBackground, #094771);
		border: 1px solid transparent;
		color: var(--vscode-list-activeSelectionForeground, #ffffff);
  }

  &:not([aria-selected='true']):active {
		background: var(--vscode-list-activeSelectionBackground, #094771);
		color: var(--vscode-list-activeSelectionForeground, #ffffff);
	}

  &.disabled {
		cursor: not-allowed;
		opacity: 0.4;

    &:hover {
      background: inherit;
    }
	}
`;

export const Dropdown = ({
  className,
  disabled,
  open,
  value,
  options = [],
  placeholder = "",
  position = 'below',
  onChange,
}: React.PropsWithChildren<IDropdownProps>) => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(undefined);
  const [isOpen, setIsOpen] = React.useState(open);

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const onSelect = React.useCallback((value: string) => {
    if (value !== selectedValue) {
      const selectedOption = options.find((option) => {
        const optionValue = typeof option === 'string' ? option : option.value;
        return optionValue === value;
      });

      setSelectedValue(value);
      onChange && onChange(selectedOption);
      setIsOpen(false);
    }
  }, [selectedValue]);

  const isDisabled = React.useMemo(() => disabled || options.length === 0, [disabled, options]);

  const firstOption = React.useMemo(() => {
    if (options.length > 0) {
      return typeof options[0] === 'string' ? options[0] : options[0].value;
    }
    return '';
  }, [options]);

  const onClick = React.useCallback(() => {
    if (!disabled && options.length > 0) {
      setIsOpen(!isOpen);
    }
  }, [disabled, options, isOpen]);

  React.useEffect(() => {
    setIsOpen(!!open);

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  React.useEffect(() => {
    if (value !== undefined) {
      const optionValue = typeof value === 'string' ? value : value.value;
      setSelectedValue(optionValue);
    } else {
      setSelectedValue('');
    }
  }, [value]);

  return (
    <SelectElm
      className={`${className || ""} ${isDisabled ? "disabled" : ""} ${className || ""}`}
      ref={dropdownRef}>
      <TriggerElm
        disabled={isDisabled}
        onClick={onClick}>
        <span>{selectedValue || placeholder || firstOption}</span>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
          />
        </svg>
      </TriggerElm>

      {
        isOpen && !isDisabled && (
          <ListboxElm position={position}>
            <ul>
              {
                options.map((option, index) => {
                  const value = typeof option === 'string' ? option : option.value;
                  const label = typeof option === 'string' ? option : option.label;
                  const disabled = typeof option === 'string' ? false : option.disabled;

                  return (
                    <ListItemElm
                      key={index}
                      className={`${selectedValue === value ? "selected" : ""} ${disabled ? "disabled" : ""}`}
                      aria-selected={selectedValue === value ? "true" : "false"}
                      aria-disabled={disabled}
                      onClick={() => onSelect(value)}>
                      {label}
                    </ListItemElm>
                  );
                })
              }
            </ul>
          </ListboxElm>
        )
      }
    </SelectElm>
  );
};