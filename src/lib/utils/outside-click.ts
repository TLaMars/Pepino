export default function outsideClick(
  node: HTMLElement,
  onOutsideClick: () => void
) {
  function handleClick({ target }: MouseEvent) {
    if (!target) return;
    const clickedOutside = !node.contains(target as HTMLElement);

    if (clickedOutside) {
      onOutsideClick();
    }
  }

  window.addEventListener("click", handleClick);

  return {
    destroy() {
      window.removeEventListener("click", handleClick);
    },
  };
}
