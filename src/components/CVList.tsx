"use client";

import { CVItem, CVPage, CVSection, PDF } from "@/models/CV";
import { Dispatch, SetStateAction, useState } from "react";
import { useCollapse } from "react-collapsed";
import Image from "next/image";
import Richtext from "@/components/Richtext";

type SectionState =
  | "initial"
  | "hovered"
  | "collapsed"
  | "expanded"
  | "unhovered";

export default function CVList({ cvPage }: { cvPage: CVPage }) {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [hoveredSection, sethoveredSection] = useState<number | null>(null);

  return (
    <>
      <div className="pointer-events-none fixed top-0 max-w-[140rem] w-full left-1/2 -translate-x-1/2 justify-end hidden md:flex z-50">
        <PDFLink pdf={cvPage.pdf} />
      </div>
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="md:w-[86%]">
          {cvPage.sections.map((section) => (
            <div
              key={section.id}
              onMouseEnter={() => sethoveredSection(section.id)}
              onMouseLeave={() => sethoveredSection(null)}
              className="w-fit"
            >
              <CVSection
                key={section.id}
                section={section}
                expandedSection={expandedSection}
                setExpandedSection={setExpandedSection}
                sectionState={getSectionState(
                  section.id,
                  expandedSection,
                  hoveredSection
                )}
              />
            </div>
          ))}
        </div>
        <PDFLink
          pdf={cvPage.pdf}
          className="text-nav text-lg md:hidden md:-mt-2 mt-4  md:relative sticky bottom-0 w-fit"
        />
      </div>
    </>
  );
}

function PDFLink({ pdf, className }: { pdf: PDF; className?: string }) {
  return (
    <a
      download={`${pdf.name}.pdf`}
      href={pdf.url}
      className={`${className} text-nav pointer-events-auto`}
      target="_blank"
    >
      PDF
    </a>
  );
}

function CVSection({
  section,
  expandedSection,
  setExpandedSection,
  sectionState,
}: {
  section: CVSection;
  expandedSection: number | null;
  setExpandedSection: Dispatch<SetStateAction<number | null>>;
  sectionState: SectionState;
}) {
  const isExpanded = expandedSection === section.id;
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const sectionStyle = getSectionStyle(sectionState);

  return (
    <div className={sectionStyle}>
      <div className="flex transition-all duration-300 items-center">
        <div
          className={`${
            sectionState === "hovered" || sectionState === "expanded"
              ? "opacity-100 w-[2rem] lg:w-[3rem]"
              : "opacity-0 w-0"
          } transition-all duration-300`}
        >
          <div className="mr-2 -mb-1">
            <Image src="/icons/arrow.svg" height={42} width={42} alt="" />
          </div>
        </div>

        <h1>
          <button
            className="text-left"
            {...getToggleProps()}
            onClick={() =>
              setExpandedSection(
                expandedSection === section.id ? null : section.id
              )
            }
          >
            {section.title}
          </button>
        </h1>
      </div>

      <div {...getCollapseProps()}>
        {section.items && <CVItems items={section.items} />}
      </div>
    </div>
  );
}

function CVItems({ items }: { items: CVItem[] }) {
  return (
    <div className="flex flex-col gap-5 lg:gap-10 my-4 lg:my-10">
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.year}</h2>
            <Richtext document={item.title} />
          </div>
        );
      })}
    </div>
  );
}

function getSectionStyle(sectionState: SectionState): string {
  switch (sectionState) {
    case "collapsed":
      return "text-mirage/50";
    case "unhovered":
      return "text-mirage/50";
    default:
      return "text-mirage";
  }
}

function getSectionState(
  id: number,
  expandedSection: number | null,
  hoveredSection: number | null
): SectionState {
  if (hoveredSection === id) {
    return "hovered";
  } else if (hoveredSection !== id && hoveredSection !== null) {
    return "unhovered";
  } else if (expandedSection === id) {
    return "expanded";
  } else if (expandedSection !== id && expandedSection !== null) {
    return "collapsed";
  } else {
    return "initial";
  }
}
