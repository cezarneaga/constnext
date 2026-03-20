import { useEffect, useState } from "react";

export const useHasScrolledDown = () => {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);

  const onScroll = () => {
    setHasScrolledDown(document.documentElement.scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return hasScrolledDown;
};
