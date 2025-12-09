import React from "react";
import { cn } from "../../lib/utils";
import { useSelectContext } from "./select"
import type { SelectOptionProps } from "./types";

const SelectOption = React.forwardRef<HTMLDivElement, SelectOptionProps>(
  ({ className, children, value, ...props }, ref) => {
    const { setValue, value: selectedValue } = useSelectContext();

    const isSelected = selectedValue == value;

    return (
      <div
        role="option"
        onClick={() => setValue(value)}
        ref={ref}
        {...props}
        className={cn(
          "px-3 py-2 text-sm cursor-pointer transition-colors rounded-sm",
          isSelected ? "bg-primary-green text-white" : "bg-white text-black",
          className
        )}
      >
        {children}
      </div>
    )
  }
)

export { SelectOption }