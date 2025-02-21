import addToTextArea from "./add-to-textarea";
import { indent, unindent } from "./dentation";
import getCurrentLine from "./get-current-line";

const handleTabKey = (
  textarea: HTMLTextAreaElement,
  shiftKey: boolean,
  onChange: (text: string) => void,
) => {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const { value } = textarea;

  if (start === end) {
    if (shiftKey) {
      const currentLine = getCurrentLine(textarea);
      if (currentLine.startsWith("  ")) {
        textarea.setSelectionRange(start - 2, end);
        addToTextArea(currentLine.slice(2), textarea, onChange);
      }

      return;
    }
    addToTextArea("  ", textarea, onChange);
    return;
  }

  if (shiftKey) {
    const unindentedText = unindent(value.slice(start, end));
    addToTextArea(unindentedText, textarea, onChange);
    textarea.setSelectionRange(start, start + unindentedText.length);
    return;
  }

  const indentedText = indent(value.slice(start, end));
  addToTextArea(indentedText, textarea, onChange);
  textarea.setSelectionRange(start, start + indentedText.length);
};

export default handleTabKey;
