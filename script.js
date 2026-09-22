(() => {
  const { contact, projects, images } = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // Full-bleed images (fall back to the dark placeholder when empty)
  $$("[data-img]").forEach(el => {
    const src = images[el.dataset.img];
    if (src) el.style.backgroundImage = `url("${src}")`;
  });

  // Contact links
  const hrefs = { phone: contact.phoneLink, whatsapp: contact.whatsapp, instagram: contact.instagram,
                  spotify: contact.spotify, youtube: contact.youtube, email: contact.email && `mailto:${contact.email}` };
  $$("[data-contact]").forEach(a => {
    const href = hrefs[a.dataset.contact];
    if (!href) { (a.closest("li") || a).hidden = true; return; }
    a.href = href;
    if (a.dataset.contact === "phone") a.textContent = contact.phoneDisplay;
    if (a.dataset.contact === "whatsapp" && a.classList.contains("btn")) a.target = "_blank", a.rel = "noopener";
  });

  // Portfolio grid
  const grid = $("#grid");
  projects.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.style.cssText = `--h:${200 + (i * 17) % 40};--a:${120 + (i * 47) % 90}deg;--x:${20 + (i * 23) % 60}%;--y:${10 + (i * 31) % 60}%;transition-delay:${(i % 3) * 0.12}s`;
    const img = p.cover ? ` style="background-image:url('${p.cover}')"` : "";
    const listen = p.link ? `<a class="listen latin" href="${p.link}" target="_blank" rel="noopener">LISTEN</a>` : "";
    card.innerHTML = `
      <div class="card__img"${img}></div>
      <span class="card__idx latin">${String(i + 1).padStart(2, "0")}</span>
      <div class="card__info">
        <h3>${p.title}</h3>
        <p>${p.artist} · ${p.role}</p>
        ${listen}
      </div>`;
    grid.appendChild(card);
  });

  // Menu
  const btn = $(".menu-btn"), menu = $("#menu");
  const setMenu = open => {
    menu.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    menu.setAttribute("aria-hidden", !open);
    $(".menu-btn__label").textContent = open ? "סגור" : "תפריט";
    document.body.style.overflow = open ? "hidden" : "";
  };
  btn.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  $$("#menu a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  addEventListener("keydown", e => e.key === "Escape" && setMenu(false));

  // Reveal on scroll
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .15 });
  $$(".reveal").forEach(el => io.observe(el));

  $("#year").textContent = new Date().getFullYear();
})();
