import * as React from "react"
import { useState } from 'react';
import { X } from 'lucide-react';
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  
  "relative w-full rounded-lg border px-5 py-3 mb-3 has-[.alert-dismissed]:pr-10 text-[14px]",
  {
    variants: {
      variant: {
        primary: "bg-blue-500/20 text-blue-800 border-blue-500/2",
        secondary: "bg-gray-500/20 text-gray-800 border-gray-500/2",
        success: "bg-green-500/20 text-green-800 border-green-500/2",
        danger: "bg-red-500/20 text-red-800 border-red-500/2",
        warning: "bg-yellow-500/20 text-yellow-800 border-yellow-500/2",
        info: "bg-cyan-500/20 text-cyan-800 border-cyan-500/2",
        dark: "bg-slate-500/20 text-slate-800 border-slate-500/2",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
      />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm [&_p]:leading-relaxed [&_a]:inline-block [&_a]:font-semibold",
        className
      )}
      {...props}
    />
  )
}

function AlertDismissible({
  className,
}: React.ComponentProps<"div">) {
  // const [isDismissed, setIsDismissed] = useState(false);

  // // Handle dismiss action
  // const handleDismiss = () => {
  //   setIsDismissed(true);
  // };
  return (
    <div
      data-slot="alert-dismissed"
      className={cn(
        "alert-dismissed absolute right-2 top-2 z-10", className 
      )}
    >
      <button className="text-lg flex items-center justify-center rounded w-7 h-7 text-inherit bg-transparent hover:bg-inherit bg-opacity-10"><X className="w-[18px] h-[18px]"/></button>
    </div>
  )
}

export { Alert, AlertTitle, AlertDescription, AlertDismissible }
