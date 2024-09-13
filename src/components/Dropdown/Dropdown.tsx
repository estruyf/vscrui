import * as React from 'react';
import { BaseComponentProps } from '../../models';
import styled from 'styled-components';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface IDropdownProps extends Omit<BaseComponentProps, 'onChange'> {
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
  background: var(--vscode-dropdown-background);
  border: 1px solid var(--vscode-dropdown-border);
  border-radius: 2px;
  height: 26px;
  box-sizing: border-box;
  contain: content;
  width: 100px;
  cursor: pointer;
  line-height: normal;
  padding: 2px 6px 2px 8px;

  &:not([disabled]):active,
  &.open {
    border-color: var(--vscode-focusBorder);
  }

  &:focus {
    border-color: var(--vscode-focusBorder);
  }
`;

const ListboxElm = styled.div<{ position: string }>`
  background: var(--vscode-dropdown-background);
  border: 1px solid var(--vscode-focusBorder);
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

const ListItemElm = styled.button`
  all: unset;
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
  width: 100%;

  &:focus-visible {
		border-color: var(--vscode-focusBorder);
		background: var(--vscode-list-activeSelectionBackground);
		color: var(--vscode-foreground);
  }

  &.active {
    background: var(--vscode-list-activeSelectionBackground);
    border: 1px solid transparent;
    color: var(--vscode-list-activeSelectionForeground);
  }

  &:active {
		background: var(--vscode-list-activeSelectionBackground);
		color: var(--vscode-list-activeSelectionForeground);
  }

  &:not(.active):hover {
    background: var(--vscode-list-activeSelectionBackground);
		border: 1px solid transparent;
		color: var(--vscode-list-activeSelectionForeground);
  }

  &:not(.active):active {
		background: var(--vscode-list-activeSelectionBackground);
		color: var(--vscode-list-activeSelectionForeground);
	}

  body[data-vscode-theme-kind='vscode-high-contrast'] &.active,
  body[data-vscode-theme-kind='vscode-high-contrast-light'] &.active,
  body[data-vscode-theme-kind='vscode-high-contrast'] &:not(.active):hover,
  body[data-vscode-theme-kind='vscode-high-contrast-light'] &:not(.active):hover {
    border-style: dotted;
    border-color: var(--vscode-list-focusOutline);
  }

  &:disabled {
		cursor: not-allowed;
		opacity: 0.4;

    &:hover {
      background: inherit;
      border-color: transparent;
    }
	}

  body[data-vscode-theme-kind='vscode-high-contrast'] &:disabled,
  body[data-vscode-theme-kind='vscode-high-contrast-light'] &:disabled,
  body[data-vscode-theme-kind='vscode-high-contrast'] &:disabled:hover,
  body[data-vscode-theme-kind='vscode-high-contrast-light'] &:disabled:hover {
    background: inherit;
    border-color: transparent;
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
  ...rest
}: React.PropsWithChildren<IDropdownProps>) => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(undefined);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [isOpen, setIsOpen] = React.useState(open);

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      setActiveIndex(null);
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

  const onKeyDown = React.useCallback((e: React.KeyboardEvent) => {
    if (isOpen) {
      e.preventDefault();
    }

    if (isOpen && e.key === 'Escape') {
      setIsOpen(false);
    } else if (isOpen && e.key === 'ArrowDown') {
      if (activeIndex === null) {
        setActiveIndex(0);
      } else {
        setActiveIndex(Math.min(activeIndex + 1, options.length - 1));
      }
    } else if (isOpen && e.key === 'ArrowUp') {
      if (activeIndex === null) {
        setActiveIndex(options.length - 1);
      } else {
        setActiveIndex(Math.max(activeIndex - 1, 0));
      }
    } else if (isOpen && e.key === 'Enter') {
      const option = options[activeIndex || 0];
      const value = typeof option === 'string' ? option : option.value;
      setIsOpen(false);
      onSelect(value);
    }
  }, [activeIndex, isOpen, onSelect]);

  const isDisabled = React.useMemo(() => disabled || options.length === 0, [disabled, options]);

  const firstOption = React.useMemo(() => {
    if (options.length > 0) {
      return typeof options[0] === 'string' ? options[0] : options[0].value;
    }
    return '';
  }, [options]);

  const onClick = React.useCallback(() => {
    console.log('onClick', disabled, options.length);
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

      const index = options.findIndex((option) => {
        const optionValue = typeof option === 'string' ? option : option.value;
        return optionValue === value;
      });
      setActiveIndex(index);
    } else {
      setSelectedValue('');
      setActiveIndex(null);
    }
  }, [value, options]);

  return (
    <SelectElm
      className={`${isDisabled ? "disabled" : ""} ${className || ""}`}
      onKeyDown={onKeyDown}
      ref={dropdownRef}
      {...rest}>
      <TriggerElm
        className={`${isOpen ? "open" : ""}`}
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
                    <li key={index} onMouseEnter={() => setActiveIndex(index)}>
                      <ListItemElm
                        key={index}
                        className={`${(activeIndex === null && selectedValue === value) || (activeIndex === index) ? "active" : ""}`}
                        aria-selected={selectedValue === value ? "true" : "false"}
                        disabled={disabled}
                        onClick={() => onSelect(value)}>
                        {label}
                      </ListItemElm>
                    </li>
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