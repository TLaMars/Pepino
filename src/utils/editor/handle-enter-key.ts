import addToTextArea from "./add-to-textarea";
import getCurrentLine from "./get-current-line";

const handleEnterKey = (
  textarea: HTMLTextAreaElement,
  onChange: (text: string) => void,
) => {
  const currentLine = getCurrentLine(textarea);
  const currentIndentationMatch = currentLine.match(/^(\s+)/);
  let wantedIndentation = currentIndentationMatch
    ? currentIndentationMatch[0]
    : "";

  if (currentLine.match(/([{[:])$/)) {
    wantedIndentation += "  ";
  }

  addToTextArea(`\n${wantedIndentation}`, textarea, onChange);
};

export default handleEnterKey;
