import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
        const onWheel = e => {
            if (e.deltaY == 0) {
                return;
            } else if (e.deltaY > 0) {
                e.preventDefault();
                    el.scrollTo({
                        left: el.scrollLeft - 100,
                });
            } else {
                e.preventDefault();
                el.scrollTo({
                left: el.scrollLeft + 100,
                });
            }
        };

        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}