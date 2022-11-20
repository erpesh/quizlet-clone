import React, {useEffect} from "react";

function useOutsideClickAndScroll(
  ref: React.RefObject<HTMLDivElement>,
  ignoredRef: React.RefObject<HTMLDivElement> | React.RefObject<HTMLButtonElement>,
  callBack: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ignoredRef && ignoredRef.current && ignoredRef.current.contains((event.target as HTMLElement)))
        return;
      if (ref && ref.current && !ref.current.contains((event.target as HTMLElement))) {
        callBack();
      }
    }

    function handleScroll() {
      callBack();
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);
}

export default useOutsideClickAndScroll;