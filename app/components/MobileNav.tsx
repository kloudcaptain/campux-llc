"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// The finished designs collapse `nav.primary` below 920px with no way to reveal
// it. The design system's responsive contract permits "a simple menu button
// revealing the primary links (no hamburger animation)" — this adds exactly that,
// enhancing the ported static header. Re-runs on route change because each page
// injects its own header markup.
export default function MobileNav() {
  const pathname = usePathname();

  useEffect(() => {
    const wrap = document.querySelector<HTMLElement>("header .wrap");
    const nav = document.querySelector<HTMLElement>("nav.primary");
    if (!wrap || !nav) return;
    if (wrap.querySelector(".navtoggle")) return; // already enhanced

    if (!nav.id) nav.id = "primary-nav";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "navtoggle";
    btn.textContent = "Menu";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", nav.id);

    const cta = wrap.querySelector(".btn-primary");
    wrap.insertBefore(btn, cta);

    const onClick = () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Close" : "Menu";
    };
    btn.addEventListener("click", onClick);

    return () => {
      btn.removeEventListener("click", onClick);
      btn.remove();
      nav.classList.remove("open");
    };
  }, [pathname]);

  return null;
}
