"use client";

import { useEffect } from "react";

// Re-adds the category-filter behavior from the finished insights.html
// (the port strips inline <script>). Clicking a `.filters a` toggles which
// `.ilist li` rows show, matching li[data-cat] to the link's data-f.
export default function InsightsFilter() {
  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".filters a")
    );
    const rows = Array.from(
      document.querySelectorAll<HTMLLIElement>(".ilist li")
    );
    if (!links.length) return;

    const handlers: Array<[HTMLAnchorElement, (e: Event) => void]> = [];
    for (const a of links) {
      const onClick = (e: Event) => {
        e.preventDefault();
        const f = a.dataset.f;
        links.forEach((x) => x.classList.toggle("active", x === a));
        rows.forEach((li) => {
          li.style.display = f === "All" || li.dataset.cat === f ? "" : "none";
        });
      };
      a.addEventListener("click", onClick);
      handlers.push([a, onClick]);
    }
    return () => handlers.forEach(([a, h]) => a.removeEventListener("click", h));
  }, []);

  return null;
}
