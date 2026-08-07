import * as React from "react";

import { cn } from "@/lib/utils";

export function PreviewFrame({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      aria-hidden
      className={cn("mt-4 min-h-48 flex-1", className)}
      {...props}
    />
  );
}
