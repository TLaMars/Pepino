import { RefObject, useEffect } from "react";
import { AnyFunction } from "src/utils/generics";

const useClickOutside = <T>(ref: RefObject<T>, callback: AnyFunction) => {
  const handleClick = (event: MouseEvent) => {
    if (
      ref.current instanceof Node &&
      !ref.current.contains(event.target as Node)
    ) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};

export default useClickOutside;
