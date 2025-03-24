import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-block cursor-pointer rounded text-center border border-transparent bg-transparent text-base font-medium transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        primary:"bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 focus:bg-primary-600",
        secondary: "bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 focus:bg-secondary-600",
        success: "bg-success-500 text-white hover:bg-success-600 active:bg-success-700 focus:bg-success-600",
        danger: "bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700 focus:bg-danger-600",
        warning: "bg-warning-500 text-white hover:bg-warning-600 active:bg-warning-700 focus:bg-warning-600",
        info: "bg-info-500 text-white hover:bg-info-600 active:bg-info-700 focus:bg-info-600",
        dark: "bg-dark-500 text-white hover:bg-dark-600 active:bg-dark-700 focus:bg-dark-600",

        light: "bg-secondary-50/10 text-dark dark:text-white hover:bg-secondary-50/20 active:bg-secondary-50/30 focus:bg-secondary-50/20",
        link: "bg-transparent text-primary-500 hover:underline active:bg-primary-50/30 focus:bg-primary-50/20",
        
        light_primary:"bg-primary-500/10 dark:bg-primary-500/10 text-primary-500 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white focus:bg-primary-600 focus:text-white",
        light_secondary:"bg-secondary-500/10 dark:bg-secondary-500/10 text-secondary-500 hover:bg-secondary-500 dark:hover:bg-secondary-500 hover:text-white focus:bg-secondary-600 focus:text-white",
        light_success:"bg-success-500/10 dark:bg-success-500/10 text-success-500 hover:bg-success-500 dark:hover:bg-success-500 hover:text-white focus:bg-success-600 focus:text-white",
        light_danger:"bg-danger-500/10 dark:bg-danger-500/10 text-danger-500 hover:bg-danger-500 dark:hover:bg-danger-500 hover:text-white focus:bg-danger-600 focus:text-white",
        light_warning:"bg-warning-500/10 dark:bg-warning-500/10 text-warning-500 hover:bg-warning-500 dark:hover:bg-warning-500 hover:text-white focus:bg-warning-600 focus:text-white",
        light_info:"bg-info-500/10 dark:bg-info-500/10 text-info-500 hover:bg-info-500 dark:hover:bg-info-500 hover:text-white focus:bg-info-600 focus:text-white",
        light_dark:"bg-dark-500/10 dark:bg-dark-500/10 text-dark-500 hover:bg-dark-500 dark:hover:bg-dark-500 hover:text-white focus:bg-dark-600 focus:text-white",

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
      variant: "primary",
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
