"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ORDER_BANDS = [
  { value: "", label: "Select..." },
  { value: "lt_1k", label: "Less than 1,000" },
  { value: "1k_10k", label: "1,000 – 10,000" },
  { value: "10k_100k", label: "10,000 – 100,000" },
  { value: "100k_1m", label: "100,000 – 1,000,000" },
  { value: "gt_1m", label: "More than 1,000,000" },
] as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORMSPARK_FORM_ID = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID;

export function ContactSalesModal({ open, onOpenChange }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleClose(nextOpen: boolean) {
    onOpenChange(nextOpen);
    if (!nextOpen) {
      setTimeout(() => {
        setSubmitted(false);
        setIsSubmitting(false);
        setError(null);
      }, 200);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const data = new FormData(e.currentTarget);
    const honeypot = (data.get("_honeypot") as string | null)?.trim() ?? "";
    if (honeypot) return;

    const email = (data.get("email") as string | null)?.trim() ?? "";
    if (!EMAIL_REGEX.test(email)) {
      setError("Please enter a valid work email address.");
      return;
    }

    if (!FORMSPARK_FORM_ID) {
      setError("Form is not configured. Please contact us directly.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://submit-form.com/${FORMSPARK_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email,
          company: data.get("company"),
          orders: data.get("orders"),
          referral: data.get("referral"),
          _replyto: email,
        }),
      });

      if (!response.ok) {
        throw new Error("FormSpark submission failed");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-primary-container/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-[70] w-[min(560px,92vw)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-2xl focus:outline-none"
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between border-b border-outline-variant px-8 py-5">
            <Dialog.Title className="font-headline-md text-headline-md text-on-surface">
              {submitted ? "Thanks — we'll be in touch." : "Contact Sales"}
            </Dialog.Title>
            <Dialog.Close
              className="-mr-2 flex h-9 w-9 items-center justify-center rounded-full text-on-surface-variant transition hover:bg-surface-container hover:text-on-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-container"
              aria-label="Close"
            >
              <span aria-hidden className="material-symbols-outlined text-xl">
                close
              </span>
            </Dialog.Close>
          </div>

          <div className="px-8 py-7">
            {submitted ? (
              <div className="space-y-5 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary-container/15 text-secondary-container">
                  <span aria-hidden className="material-symbols-outlined text-3xl">
                    mark_email_read
                  </span>
                </div>
                <p className="text-body-lg text-on-surface-variant">
                  Your request has been received. An OptiBox specialist will reach out within one
                  business day.
                </p>
                <Button variant="primary" size="md" onClick={() => handleClose(false)}>
                  CLOSE
                </Button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="_honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field id="firstName" name="firstName" label="First name" required />
                  <Field id="lastName" name="lastName" label="Last name" required />
                </div>
                <Field
                  id="email"
                  name="email"
                  label="Work Email"
                  type="email"
                  required
                  inputMode="email"
                  autoComplete="email"
                />
                <Field id="company" name="company" label="Company name" required />
                <div className="space-y-2">
                  <label
                    htmlFor="orders"
                    className="block text-label-caps font-label-caps font-bold text-on-surface"
                  >
                    Estimated Orders Fulfilled Annually <Required />
                  </label>
                  <select
                    id="orders"
                    name="orders"
                    required
                    defaultValue=""
                    className="w-full appearance-none border border-outline-variant bg-white px-4 py-3 text-body-md text-on-surface focus:border-secondary-container focus:outline-none focus:ring-2 focus:ring-secondary-container/30"
                  >
                    {ORDER_BANDS.map((b) => (
                      <option key={b.value} value={b.value} disabled={b.value === ""}>
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="referral"
                    className="block text-label-caps font-label-caps font-bold text-on-surface"
                  >
                    How did you hear about us? <Required />
                  </label>
                  <textarea
                    id="referral"
                    name="referral"
                    required
                    rows={3}
                    className="w-full resize-none border border-outline-variant bg-white px-4 py-3 text-body-md text-on-surface focus:border-secondary-container focus:outline-none focus:ring-2 focus:ring-secondary-container/30"
                  />
                </div>

                {error ? (
                  <p role="alert" className="text-body-md text-error">
                    {error}
                  </p>
                ) : null}

                <div className="flex items-center justify-end gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    disabled={isSubmitting}
                    onClick={() => handleClose(false)}
                  >
                    CANCEL
                  </Button>
                  <Button type="submit" variant="primary" size="md" disabled={isSubmitting}>
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Required() {
  return (
    <span aria-hidden className="text-error">
      *
    </span>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
};

function Field({ id, name, label, required, ...rest }: FieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-label-caps font-label-caps font-bold text-on-surface"
      >
        {label} {required ? <Required /> : null}
      </label>
      <input
        id={id}
        name={name}
        required={required}
        className="w-full border border-outline-variant bg-white px-4 py-3 text-body-md text-on-surface focus:border-secondary-container focus:outline-none focus:ring-2 focus:ring-secondary-container/30"
        {...rest}
      />
    </div>
  );
}
