import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-block cursor-pointer rounded text-center border border-transparent bg-transparent text-base font-medium transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        primay:"bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600",
        success: "bg-green-500 text-white hover:bg-green-600 active:bg-green-700 focus:bg-green-600",
        danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:bg-red-600",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 focus:bg-yellow-600",
        info: "bg-cyan-500 text-white hover:bg-cyan-600 active:bg-cyan-700 focus:bg-cyan-600",
        dark: "bg-slate-500 text-white hover:bg-slate-600 active:bg-slate-700 focus:bg-slate-600",

        light: "bg-gray-50/10 text-dark dark:text-white hover:bg-gray-50/20 active:bg-gray-50/30 focus:bg-gray-50/20",
        link: "bg-transparent text-blue-500 hover:underline active:bg-blue-50/30 focus:bg-blue-50/20",
        
        light_primay:"bg-blue-500/10 dark:bg-blue-500/10 text-blue-500 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white focus:bg-blue-600 focus:text-white",
        light_secondary:"bg-gray-500/10 dark:bg-gray-500/10 text-gray-500 hover:bg-gray-500 dark:hover:bg-gray-500 hover:text-white focus:bg-gray-600 focus:text-white",
        light_success:"bg-green-500/10 dark:bg-green-500/10 text-green-500 hover:bg-green-500 dark:hover:bg-green-500 hover:text-white focus:bg-green-600 focus:text-white",
        light_danger:"bg-red-500/10 dark:bg-red-500/10 text-red-500 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white focus:bg-red-600 focus:text-white",
        light_warning:"bg-yellow-500/10 dark:bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500 dark:hover:bg-yellow-500 hover:text-white focus:bg-yellow-600 focus:text-white",
        light_info:"bg-cyan-500/10 dark:bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white focus:bg-cyan-600 focus:text-white",
        light_dark:"bg-slate-500/10 dark:bg-slate-500/10 text-slate-500 hover:bg-slate-500 dark:hover:bg-slate-500 hover:text-white focus:bg-slate-600 focus:text-white",

        outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "py-2 px-4",
        sm: "py-1 px-3",
        lg: "py-3 px-5",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
