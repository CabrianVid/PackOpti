"use client";

import type { ComponentProps } from "react";
import { Button } from "./Button";
import { useContactSales } from "@/components/modals/ContactSalesProvider";

type Props = Omit<ComponentProps<typeof Button>, "onClick">;

/**
 * Drop-in button that opens the global Contact Sales modal.
 *
 * Use this EVERY time a CTA in the page should trigger the modal
 * (e.g. "Book a Demo", "Contact Sales", "Book Your Demo Now"). Do
 * not hand-roll <button onClick={open}> calls.
 */
export function ContactSalesButton({ children, ...rest }: Props) {
  const { open } = useContactSales();
  return (
    <Button onClick={open} {...rest}>
      {children}
    </Button>
  );
}
