"use client";

import { useEffect } from "react";

export default function HashScrollManager() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href*="#"]') as
        | HTMLAnchorElement
        | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;
      const hash = href.slice(hashIndex + 1);
      if (!hash) return;

      const base = href.slice(0, hashIndex);
      const [path, search] = base.split("?");
      const targetPath = path || "/";
      const targetSearch = search || "";
      const currentSearch = window.location.search.replace(/^\?/, "");

      if (
        targetPath !== window.location.pathname ||
        targetSearch !== currentSearch
      ) {
        return;
      }

      const el = document.getElementById(hash);
      if (!el) return;

      event.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location.hash !== `#${hash}`) {
        window.history.replaceState(null, "", href);
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
