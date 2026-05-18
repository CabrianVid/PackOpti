import { ContactSalesButton } from "@/components/ui/ContactSalesButton";

export function FinalCTA() {
  return (
    <section className="bg-secondary-container py-24">
      <div className="mx-auto max-w-max-width space-y-8 px-margin-mobile text-center md:px-margin-desktop">
        <h2 className="font-headline-lg text-5xl text-primary-container md:text-6xl">
          Ready to optimize every shipment?
        </h2>
        <p className="font-body-lg mx-auto max-w-2xl text-body-lg text-primary-container/80">
          Join hundreds of logistics leaders who have turned their packing stations into a
          competitive advantage. Start reducing costs today with data-driven precision.
        </p>
        <div>
          <ContactSalesButton variant="dark" size="xl">
            BOOK YOUR DEMO NOW
          </ContactSalesButton>
        </div>
      </div>
    </section>
  );
}
