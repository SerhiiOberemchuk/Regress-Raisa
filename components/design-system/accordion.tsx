"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionContextValue = {
  openValue: string | null;
  collapsible: boolean;
  setOpenValue: React.Dispatch<React.SetStateAction<string | null>>;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
const AccordionItemContext = React.createContext<{
  value: string;
} | null>(null);

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: "single";
  collapsible?: boolean;
  defaultValue?: string;
};

function Accordion({
  className,
  collapsible = false,
  defaultValue,
  children,
  ...props
}: AccordionProps) {
  const [openValue, setOpenValue] = React.useState<string | null>(
    defaultValue ?? null
  );

  return (
    <AccordionContext.Provider value={{ openValue, collapsible, setOpenValue }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, ...props }, ref) => (
  <AccordionItemContext.Provider value={{ value }}>
    <div ref={ref} className={cn("border-b", className)} data-value={value} {...props} />
  </AccordionItemContext.Provider>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const accordion = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);

  if (!accordion || !item) {
    throw new Error("AccordionTrigger must be used within AccordionItem");
  }

  const isOpen = accordion.openValue === item.value;

  return (
    <div className="flex">
      <button
        ref={ref}
        type="button"
        aria-expanded={isOpen}
        onClick={() =>
          accordion.setOpenValue((current) => {
            if (current === item.value) {
              return accordion.collapsible ? null : current;
            }
            return item.value;
          })
        }
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium text-foreground transition-all hover:text-primary",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
    </div>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const accordion = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);

  if (!accordion || !item) {
    throw new Error("AccordionContent must be used within AccordionItem");
  }

  const isOpen = accordion.openValue === item.value;

  return (
    <div
      ref={ref}
      hidden={!isOpen}
      className={cn("overflow-hidden text-sm", className)}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
