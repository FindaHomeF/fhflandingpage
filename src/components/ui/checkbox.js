import * as React from "react"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef(({ className, onCheckedChange, checked, ...props }, ref) => {
  const handleChange = (e) => {
    if (onCheckedChange) {
      onCheckedChange(e.target.checked)
    }
  }

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      className={cn(
        "h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }
