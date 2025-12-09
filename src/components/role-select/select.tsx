/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import type { SelectProps, SelectContextProps } from './types';

const SelectContext = createContext<SelectContextProps | null>(null);

const Select = ({ value, onValueChange, children, ...props }: React.HTMLAttributes<HTMLDivElement> & SelectProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(value);
  const [open, setOpen] = useState<boolean>(false);
  const isControlled = value !== undefined;

  const currentValue = isControlled ? value : internalValue;

  const setValue = (value: string) => {
    if (!isControlled) setInternalValue(value);
    onValueChange?.(value);
    setOpen(false);
  }



  return (
    <SelectContext.Provider value={{ value: currentValue, setValue, open, setOpen }}>
      <div className="relative w-full" {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  )
}

function useSelectContext() {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error("Select subcomponents must be used inside <Select>");
  return ctx;
}

export {
  Select,
  useSelectContext
}