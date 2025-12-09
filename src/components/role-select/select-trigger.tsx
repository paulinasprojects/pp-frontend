import React from "react";
import { useSelectContext } from "./select";
import type { SelectTriggerProps } from './types';
import { cn } from "../../lib/utils";
import { BiChevronDown } from "react-icons/bi";

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, placeholder, ...props }, ref) => {

    const { open, setOpen, value } = useSelectContext();

    return (
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center justify-between w-full whitespace-nowrap px-3 py-2 border rounded-sm text-sm",
          "bg-white text-black",
          "hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40",
          className
        )}
        ref={ref}
        type="button"
        {...props}
      >
        <span className={cn(value ? "text-gray-900" : "text-gray-400")} >
          {value ? value : (
            <span className="text-black dark:text-gray-500">
              {placeholder}
            </span>
          )}
        </span>
        <BiChevronDown
          className={cn(
            "w-4 h-4 text-gray-500 transition-transform",
            open && "rotate-180"
          )} />
      </button>
    )
  }
)

export { SelectTrigger }