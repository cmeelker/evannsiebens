"use client";

import { CVItem, CVSection } from "@/models/CV";
import { Dispatch, SetStateAction, useState } from "react";
import { useCollapse } from "react-collapsed";

type SectionState =
  | "initial"
  | "hovered"
  | "collapsed"
  | "expanded"
  | "unhovered";

export default function CVList({ sections }: { sections: CVSection[] }) {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [hoveredSection, sethoveredSection] = useState<number | null>(null);

  return (
    <div className="md:w-[86%]">
      {sections.map((section) => (
        <div
          key={section.id}
          onMouseEnter={() => sethoveredSection(section.id)}
          onMouseLeave={() => sethoveredSection(null)}
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
          <div className="mr-2 pb-1">⇉</div>
        </div>

        <h1>
          <button
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
        <CVItems items={section.items} />
      </div>
    </div>
  );
}

function CVItems({ items }: { items: CVItem[] }) {
  return (
    <div className="flex flex-col gap-10 my-4 lg:my-10">
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.year}</h2>
            <div>{item.title}</div>
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
