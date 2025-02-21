const getCurrentLine = (textarea: HTMLTextAreaElement) => {
  const original = textarea.value;

  const { selectionStart } = textarea;
  const beforeStart = original.slice(0, selectionStart);

  return original
    .slice(
      beforeStart.lastIndexOf("\n") !== -1
        ? beforeStart.lastIndexOf("\n") + 1
        : 0,
    )
    .split("\n")[0];
};

export default getCurrentLine;
