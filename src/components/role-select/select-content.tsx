import React, { useEffect, useRef } from "react"
import type { SelectContentProps } from "./types"
import { cn } from "../../lib/utils"
import { useSelectContext } from "./select"

const SelectContent = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement> & SelectContentProps) => {
  const { open, setOpen } = useSelectContext();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute left-0 z-50 mt-1 w-full rounded-sm border ",
        "bg-white",
        "animate-in fade-in-80 slide-in-from-top-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
export {
  SelectContent
}