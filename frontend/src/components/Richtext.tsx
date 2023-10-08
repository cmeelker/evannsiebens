import Markdown from "react-markdown";

export default function Richtext({ text }: { text: string }) {
  const formattedText = text.replace(/\n/gi, "&nbsp;  &nbsp;  \n");

  return <Markdown className="break-words">{formattedText}</Markdown>;
}
