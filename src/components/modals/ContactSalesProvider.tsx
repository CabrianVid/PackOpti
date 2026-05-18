"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ContactSalesModal } from "./ContactSalesModal";

type ContactSalesContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ContactSalesContext = createContext<ContactSalesContextValue | null>(null);

export function ContactSalesProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <ContactSalesContext.Provider value={value}>
      {children}
      <ContactSalesModal open={isOpen} onOpenChange={setIsOpen} />
    </ContactSalesContext.Provider>
  );
}

export function useContactSales(): ContactSalesContextValue {
  const ctx = useContext(ContactSalesContext);
  if (!ctx) {
    throw new Error("useContactSales must be used within ContactSalesProvider");
  }
  return ctx;
}
