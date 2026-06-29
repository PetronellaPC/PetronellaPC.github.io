/* ============================================================
   Shared UI components for the ML animations site.

   Load this BEFORE the page's animation script (a plain
   <script src="components.js"></script> in <head> works, since
   the custom elements upgrade synchronously as the parser
   reaches them, so their buttons exist by the time the page's
   bottom-of-body script runs).

   <site-nav current="softmax.html"></site-nav>
       Renders the shared top menu linking to the index and every
       animation page. The `current` attribute (a page filename)
       marks the active link. Styled by theme.css (.site-nav).

   <control-bar prefix="vec"></control-bar>
       Renders the standard Play / Pause / Back / Step / Reset
       buttons inside a .controls wrapper. Button ids are
       `${prefix}Play`, `${prefix}Pause`, `${prefix}Back`,
       `${prefix}Step`, `${prefix}Reset`. With no prefix the ids
       are simply play / pause / back / step / reset.
       The page wires its handlers to those ids as before.
   ============================================================ */
(function () {
  "use strict";

  const LABELS = {
    play: "▶ Play",     // ▶
    pause: "⏸ Pause",   // ⏸
    back: "◂ Back",     // ◂
    step: "Step ▸",     // ▸
    reset: "⟲ Reset",   // ⟲
  };
  const ORDER = ["play", "pause", "back", "step", "reset"];
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  // Single source of truth for the site menu.
  const PAGES = [
    ["cosine_and_euclidian.html", "Comparing vectors"],
    ["matrix_multiplication_animation.html", "Matrix multiplication"],
    ["softmax.html", "Softmax"],
    ["neural_network_animation.html", "Neural network"],
    ["recurrent_neural_network_animation.html", "RNN"],
    ["llm_inference.html", "LLM inference"],
    ["debiasing.html", "Debiasing"],
  ];

  class SiteNav extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = "1";
      const current = this.getAttribute("current") || "";
      const nav = document.createElement("nav");
      nav.className = "site-nav";
      nav.setAttribute("aria-label", "Animations");

      const home = document.createElement("a");
      home.className = "site-nav-home" + (current === "index.html" ? " active" : "");
      home.href = "index.html";
      home.textContent = "ML animations";
      nav.appendChild(home);

      const links = document.createElement("div");
      links.className = "site-nav-links";
      PAGES.forEach(([href, label]) => {
        const a = document.createElement("a");
        a.href = href;
        a.textContent = label;
        if (href === current) {
          a.className = "active";
          a.setAttribute("aria-current", "page");
        }
        links.appendChild(a);
      });
      nav.appendChild(links);
      this.appendChild(nav);
    }
  }

  class ControlBar extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = "1";
      const prefix = this.getAttribute("prefix") || "";
      const wrap = document.createElement("div");
      wrap.className = "controls";
      ORDER.forEach((name) => {
        const b = document.createElement("button");
        b.type = "button";
        b.id = prefix ? prefix + cap(name) : name;
        if (name === "play") b.className = "primary";
        b.textContent = LABELS[name];
        wrap.appendChild(b);
      });
      this.appendChild(wrap);
    }
  }

  customElements.define("site-nav", SiteNav);
  customElements.define("control-bar", ControlBar);
})();
