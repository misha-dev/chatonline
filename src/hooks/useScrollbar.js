import OverlayScrollbars from "overlayscrollbars";
import { useEffect } from "react";

const config = {};

export const useScrollbar = (root, hasScroll) => {
  useEffect(() => {
    let overlayScrollbar;
    if (root.current && hasScroll) {
      overlayScrollbar = OverlayScrollbars(root.current, config);
    }
    return () => {
      if (overlayScrollbar) {
        overlayScrollbar.destroy();
      }
    };
  }, [root, hasScroll]);
};
