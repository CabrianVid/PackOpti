/** Public FormSpark form id — safe to embed in client code. */
export const FORMSPARK_FORM_ID =
  process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID ?? "VIwP8pVZ6";

export const FORMSPARK_SUBMIT_URL = `https://submit-form.com/${FORMSPARK_FORM_ID}`;
