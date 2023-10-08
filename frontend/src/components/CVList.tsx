"use client";

import { CVItem, CVSection } from "@/models/CV";
import { useCollapse } from "react-collapsed";

export default function CVList({ sections }: { sections: CVSection[] }) {
  return (
    <div className="md:w-[86%]">
      {sections.map((section, index) => (
        <CVSection key={index} section={section} />
      ))}
    </div>
  );
}

function CVSection({ section }: { section: CVSection }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <>
      <div className="flex">
        <div className="mr-2">⇉</div>
        <h1>
          <button {...getToggleProps()}>{section.title}</button>
        </h1>
      </div>

      <div {...getCollapseProps()}>
        <CVItems items={section.items} />
      </div>
    </>
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
