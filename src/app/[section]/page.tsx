import { notFound } from "next/navigation";
import { HomePage } from "@/components/HomePage";
import { SectionScroller } from "@/components/navigation/SectionScroller";
import { isSectionPath, SECTION_PATHS } from "@/lib/sections";

type SectionPageProps = {
  params: Promise<{ section: string }>;
};

export function generateStaticParams() {
  return SECTION_PATHS.map((section) => ({ section }));
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;

  if (!isSectionPath(section)) {
    notFound();
  }

  return (
    <>
      <SectionScroller sectionId={section} />
      <HomePage />
    </>
  );
}
