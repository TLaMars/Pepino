/* eslint-disable no-param-reassign */
const addToTextArea = function (
  text: string,
  textarea: HTMLTextAreaElement,
  onChange: (text: string) => void,
) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  textarea.value = `${textarea.value.substring(
    0,
    start,
  )}${text}${textarea.value.substring(end, textarea.value.length)}`;

  // Keep the selected text selected
  textarea.selectionStart = start + text.length;
  textarea.selectionEnd = start + text.length;

  onChange(textarea.value);
};
/* eslint-enable no-param-reassign */

export default addToTextArea;
