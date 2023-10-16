import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document, INLINES, Block, Inline } from "@contentful/rich-text-types";
import { ReactNode } from "react";

export default function Richtext({ document }: { document: Document }) {
  const formattedText = documentToReactComponents(document, {
    renderNode: {
      [INLINES.HYPERLINK]: openLinksInNewTabs,
    },
  });

  return <div className="flex flex-col gap-8">{formattedText}</div>;
}

function openLinksInNewTabs(
  node: Block | Inline,
  children: ReactNode
): JSX.Element {
  return (
    <a target="_blank" rel="noopener noreferrer" href={node.data.uri}>
      {children}
    </a>
  );
}
