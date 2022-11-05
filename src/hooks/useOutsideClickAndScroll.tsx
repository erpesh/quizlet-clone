import React, {useEffect} from "react";

function useOutsideClickAndScroll(ref: any, ignoredRef: any, callBack: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ignoredRef && ignoredRef.current && ignoredRef.current.contains(event.target))
        return;
      if (ref && ref.current && !ref.current.contains(event.target)) {
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