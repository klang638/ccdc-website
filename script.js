
/* =========================================================
   EDIT THIS SECTION. Everything else updates automatically.
   ========================================================= */
const CONFIG = {
  clubName: "Cosplay & Costume Design Club",
  school: "University of Tennessee, Knoxville",
  instagram: "https://www.instagram.com/ccdc.utk",
  discord: "https://discord.gg/rMWPtCz6fk",
  volink: "https://utk.campuslabs.com/engage/organization/ccdc",
  email: "ccdc.utk@gmail.com"
};

// NEXT MEETING. Date format: YYYY-MM-DDTHH:MM (24-hour time)
const NEXT = {
  title: "Free Cosplay Workshop",
  date: "2026-10-23T18:00",
  location: "Strong Hall, Room 103",
  description: "Halloween is so close!! Join us to work on any cosplay project, whether it be wigs, costumes, props, or anything else!",
  bring: ["A cosplay to work on (optional)", "Cosplay materials (We will provide some, but bring what you can!)"]
};

// PAST MEETINGS. Newest first. Resources are optional.
const PAST = [
  {
    date: "2026-10-16",
    title: "Wig Styling Workshop",
    summary: "In this meeting we covered how to style wigs, from crimping, teasing, cutting, and hairspraying!",
    resources: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1PezqsW2KVnWbk8fnbi7b4hRUTFaDQgTph3JNEFi1fBg/edit?usp=sharing" },
    ]
  },
  {
    date: "2026-10-09",
    title: "How to Cosplay on a Budget",
    summary: "In this meeting we covered how to cosplay on a budget: including how to closet cosplay, and where to find cosplay materials for cheap in Knoxville!",
    resources: [
      { label: "Slides", url: "https://liveutk-my.sharepoint.com/:p:/g/personal/klang4_vols_utk_edu/IQAzSO_mkHcbQ6i4p9DCpBpTAew_G_CF0hyLY00Za28ChzQ?e=bHbGsp" },
    ]
  },
  {
    date: "2026-10-02",
    title: "Photography 101",
    summary: "In this meeting we had a presentation on everything cosplay photgraphy, like composition, storytelling, camera basics, and more! We ended with a photography workshop with a lighting demonstration!",
    resources: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1zZyXgA39MMFf_Ya9P4A9IEOMvpQj2TEVVg-H-3OkOBc/edit?usp=sharing" },
      ]
  },
    {
    date: "2026-09-25",
    title: "Cosplay  Showcase",
    summary: "In this meeting we had members present their cosplays! Whether it was a work-in-progress, a completed cosplay, or a future cosplan, everybody had the opportunity to talk about their cosplays!",

  },
    {
    date: "2026-09-18",
    title: "Resident Evil Movie Outing",
    summary: "In this club outing, we went to see the new Resident Evil movie in theaters!",

  },
    {
    date: "2026-09-11",
    title: "Game Night",
    summary: "In this meeting we had a fun game night! We played Mario Kart, Gartic Phone, and board games, then adventured out to Waffle House to refuel!",

  },

    {
    date: "2026-09-04",
    title: "Freeplay Cosplay Workshop",
    summary: "In this meeting, we brought our cosplay projects in and worked on it together!",

  },

      {
    date: "2026-08-28",
    title: "Intro Meeting",
    summary: "For our first meeting, we introduced the club and officers, played a fun game of Would You Rather, and socialized!",

  },
];

// GALLERY. Put photos in /images and list them here.
// tag is used for the filter buttons (e.g. "Meetings", "Member Work").
const GALLERY = [
  { src: "images/photo (1).jpg", tag: "Meetings" },
  { src: "images/photo (2).jpg", tag: "Meetings" },
  { src: "images/photo (3).jpg", tag: "Meetings" },
  { src: "images/photo (4).jpg", tag: "Meetings" },
  { src: "images/photo (5).jpg", tag: "Meetings" },
  { src: "images/photo (6).jpg", tag: "Meetings" },
  { src: "images/photo (7).jpg", tag: "Meetings" },
  { src: "images/photo (8).jpg", tag: "Meetings" },
  { src: "images/photo (9).jpg", tag: "Meetings" },
  { src: "images/photo (10).jpg", tag: "Meetings" },
  { src: "images/photo (11).jpg", tag: "Meetings" },
  { src: "images/photo (12).jpg", tag: "Meetings" },
  { src: "images/photo (13).jpg", tag: "Meetings" },
  { src: "images/photo (14).jpg", tag: "Meetings" },
  { src: "images/photo (15).jpg", tag: "Meetings" },
  { src: "images/photo (16).jpg", tag: "Meetings" },
  { src: "images/photo (17).jpg", tag: "Meetings" },
  { src: "images/photo (18).jpg", tag: "Meetings" },
  { src: "images/photo (19).jpg", tag: "Meetings" },
  { src: "images/photo (20).jpg", tag: "Meetings" },
  { src: "images/photo (21).jpg", tag: "Meetings" },
  { src: "images/photo (22).jpg", tag: "Meetings" },
  { src: "images/photo (23).jpg", tag: "Meetings" },
  { src: "images/photo (24).jpg", tag: "Meetings" },
  { src: "images/photo (25).jpg", tag: "Meetings" },
  { src: "images/photo (26).jpg", tag: "Member Work" },
  { src: "images/photo (27).jpg", tag: "Member Work" },
  { src: "images/photo (28).jpg", tag: "Member Work" },
  { src: "images/photo (29).jpg", tag: "Member Work" },
  { src: "images/photo (30).jpg", tag: "Meetings" },
  { src: "images/photo (31).jpg", tag: "Meetings" },
  { src: "images/photo (32).jpg", tag: "Meetings" },
  { src: "images/photo (33).jpg", tag: "Meetings" },
  { src: "images/photo (34).jpg", tag: "Meetings" },
  { src: "images/photo (35).jpg", tag: "Meetings" },
  { src: "images/photo (36).jpg", tag: "Meetings" },
  { src: "images/photo (37).jpg", tag: "Meetings" },
  { src: "images/photo (38).jpg", tag: "Meetings" },
  { src: "images/photo (39).jpg", tag: "Meetings" },
  { src: "images/photo (40).jpg", tag: "Member Work" },
  { src: "images/photo (41).jpg", tag: "Member Work" },
  { src: "images/photo (42).jpg", tag: "Member Work" },
  { src: "images/photo (43).jpg", tag: "Member Work" },
  { src: "images/photo (44).jpg", tag: "Member Work" },
  { src: "images/photo (45).jpg", tag: "Member Work" },
  { src: "images/photo (46).jpg", tag: "Member Work" },
  { src: "images/photo (47).jpg", tag: "Member Work" },
  { src: "images/photo (48).jpg", tag: "Member Work" },
  { src: "images/photo (49).jpg", tag: "Member Work" },
  { src: "images/photo (50).jpg", tag: "Member Work" }

];
// OFFICERS. photo is optional (e.g. "images/officers/jane.jpg"); emoji shows if no photo.
const OFFICERS = [
  { name: "Tyler", role: "President", emoji: "👑", photo: "images/officers/tyler.jpg", bio: "Junior - Studying Electrical Engineering - Favorites: Jujutsu Kaisen, Chainsaw Man, Genshin Impact, Persona, My Hero Academia, Attack on Titan" },
  { name: "Lilac", role: "Vice President", emoji: "✨", photo: "images/officers/lilac.jpg", bio: "Sophomore - Exploratory Track with a Music Composition Minor - Favorites: Liz and the Blue Bird, Sound! Euphonium, Persona, One Piece" },
  { name: "Lilly", role: "Treasurer", emoji: "🪙", photo: "images/officers/lilly.jpg", bio: "Junior - Studying Psychology with a Linguistics and Counseling Minor - Favorites: Cowboy Bebop, DC Comics, Bungo Stray Dogs, Resident Evil, X-Men" },
  { name: "Kaylah", role: "Marketing", emoji: "🎪", photo: "images/officers/Kaylah.jpeg", bio: "Junior - Studying Supply Chain Management and Marketing with an International Business Collateral - Favorites: JJBA, Goodnight Punpun, Vagabond, Genshin Impact, Ensemble Stars, Love Live" }
];

// FAQ. Add or remove questions freely.
const FAQ = [
  { q: "Do I need to know how to sew?", a: "Not at all! Plenty of members are total beginners. Like, I don't even know how to sew. But there's so much more to cosplay than just sewing! Join us and explore the world of Cosplay with us!!!" },
  { q: "Do I need a costume or character to join?", a: "Nope. Come as you are~ A lot of us don't cosplay to EVERY meeting, it's really whatever you are comfortable with!! You do not have to have a cosplay to join!!" },
  { q: "Are there dues?", a: "Yes- $50 to my venmo. Just kidding hehe :3 We have no dues!! To join is free!!! " },
  { q: "How do I become an official member?", a: "Join through our VOLink page, then hop in the Discord and follow our insta >-<" },
  { q: "Where and when do you meet?", a: "Check the Next Meeting page in this website! We also post announcements on our social media!" },
  { q: "Can I join if I'm not a UT student?", a: "Yurrppp! Although you might not be able to join the VOLink officially, you can still come to our meetings as you wish~!" }
];


/* ================== END OF EDIT SECTION ================== */


/* ---------- Shared: header, footer, links ---------- */
const PAGES = [
  ["home", "index.html", "Home"],
  ["about", "about.html", "About"],
  ["next", "next-meeting.html", "Next Meeting"],
  ["past", "past-meetings.html", "Past Meetings"],
  ["gallery", "gallery.html", "Gallery"],
  ["faq", "faq.html", "FAQ"]
];
const current = document.body.dataset.page;

/* Polish: favicon, theme color, skip link */
document.head.insertAdjacentHTML("beforeend",
  '<link rel="icon" href="favicon.svg" type="image/svg+xml"><meta name="theme-color" content="#ff8200">');
document.body.insertAdjacentHTML("afterbegin", '<a class="skip" href="#main">Skip to content</a>');
document.querySelector("main")?.setAttribute("id", "main");

document.getElementById("site-header").innerHTML = `
  <header><nav class="nav" aria-label="Main">
    <a class="logo" href="index.html">🧵 Cosplay &amp; Costume Design @ UTK </a>
    <ul>${PAGES.map(([id, href, label]) =>
      `<li><a href="${href}" ${id === current ? 'class="active" aria-current="page"' : ""}>${label}</a></li>`).join("")}
    </ul>
  </nav></header>`;

document.getElementById("site-footer").innerHTML = `
  <footer>
    <p>
      <a href="${CONFIG.instagram}" target="_blank" rel="noopener">Instagram</a>
      <a href="${CONFIG.discord}" target="_blank" rel="noopener">Discord</a>
      <a href="${CONFIG.volink}" target="_blank" rel="noopener">VOLink</a>
    </p>
    <p>© ${new Date().getFullYear()} ${CONFIG.clubName} · ${CONFIG.school}</p>
    <p><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></p>
  </footer>`;

document.querySelectorAll("[data-link]").forEach(el => el.href = CONFIG[el.dataset.link]);

const fmtDate = (d, withTime) => new Date(d).toLocaleDateString("en-US", {
  weekday: "long", month: "long", day: "numeric", year: "numeric",
  ...(withTime && { hour: "numeric", minute: "2-digit" })
});

/* ---------- Next meeting ---------- */
if (current === "next") {
  const box = document.getElementById("next-meeting");
  const target = new Date(NEXT.date);
  box.innerHTML = `
    <article class="meeting big">
      <h2>${NEXT.title}</h2>
      <div class="meta">
        <span class="chip">📅 ${fmtDate(NEXT.date, true)}</span>
        <span class="chip">📍 ${NEXT.location}</span>
      </div>
      <p>${NEXT.description}</p>
      <div id="countdown" class="countdown"></div>
      ${NEXT.bring?.length ? `<h3>What to bring</h3><ul>${NEXT.bring.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
      <div class="btn-row" style="justify-content:flex-start;margin-top:1rem">
        <a class="btn" href="${CONFIG.discord}" target="_blank" rel="noopener">Questions? Ask on Discord</a>
      </div>
    </article>`;

  const cd = document.getElementById("countdown");
  const tick = () => {
    const diff = target - new Date();
    if (diff <= 0) { cd.innerHTML = "<p><b>This meeting has started or passed. Check back for the next one!</b></p>"; return; }
    const v = [["Days", 86400000], ["Hours", 3600000], ["Mins", 60000]]
      .map(([l, ms]) => [l, Math.floor(diff / ms) % (l === "Days" ? 9999 : l === "Hours" ? 24 : 60)]);
    cd.innerHTML = v.map(([l, n]) => `<div><b>${n}</b>${l}</div>`).join("");
  };
  tick(); setInterval(tick, 30000);
}

/* ---------- Past meetings ---------- */
if (current === "past") {
  document.getElementById("past-list").innerHTML = PAST.length
    ? PAST.map(m => `
      <article class="meeting">
        <span class="chip">📅 ${fmtDate(m.date + "T12:00")}</span>
        <h2 style="margin-top:.6rem">${m.title}</h2>
        <p>${m.summary}</p>
        ${m.resources?.length ? `<div class="resources"><strong>Resources:</strong><br>${
          m.resources.map(r => `<a href="${r.url}" target="_blank" rel="noopener">${r.label}</a>`).join("")}</div>` : ""}
      </article>`).join("")
    : "<p>No past meetings yet. Stay tuned!</p>";
}

/* ---------- Gallery ---------- */
if (current === "gallery") {
  const grid = document.getElementById("gallery");
  const filters = document.getElementById("filters");
  const tags = ["All", ...new Set(GALLERY.map(g => g.tag).filter(Boolean))];

  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = '<img alt="">';
  document.body.appendChild(lb);
  lb.onclick = () => lb.classList.remove("open");
  document.addEventListener("keydown", e => e.key === "Escape" && lb.classList.remove("open"));

  const render = tag => {
    grid.innerHTML = GALLERY.filter(g => tag === "All" || g.tag === tag)
      .map(g => `<figure><img src="${g.src}" alt="${g.alt}" loading="lazy"></figure>`).join("");
    grid.querySelectorAll("figure").forEach(f => f.onclick = () => {
      const img = f.querySelector("img");
      lb.querySelector("img").src = img.src;
      lb.querySelector("img").alt = img.alt;
      lb.classList.add("open");
    });
    filters.querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.tag === tag));
  };

  filters.innerHTML = tags.map(t => `<button class="btn" data-tag="${t}">${t}</button>`).join("");
  filters.onclick = e => e.target.dataset.tag && render(e.target.dataset.tag);
  render("All");
}

/* ---------- About / officers ---------- */
if (current === "about") {
  document.getElementById("officers").innerHTML = OFFICERS.map(o => `
    <article class="card officer">
      ${o.photo ? `<img src="${o.photo}" alt="${o.name}">` : `<div class="avatar">${o.emoji || "🧵"}</div>`}
      <h3>${o.name}</h3>
      <span class="chip">${o.role}</span>
      <p>${o.bio}</p>
    </article>`).join("");
}

/* ---------- FAQ ---------- */
if (current === "faq") {
  document.getElementById("faq-list").innerHTML = FAQ.map(f =>
    `<details class="faq"><summary>${f.q}</summary><p>${f.a}</p></details>`).join("");
  document.getElementById("faq-contact").innerHTML =
    `Still curious? Ask on <a href="${CONFIG.discord}" target="_blank" rel="noopener">Discord</a> or email <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>.`;
}

/* ---------- Calendar ---------- */
if (current === "calendar") {
  const pad = n => String(n).padStart(2, "0");
  const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const ALL = [
    { date: NEXT.date.slice(0, 10), title: "Club Meeting: " + NEXT.title, time: new Date(NEXT.date).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }), location: NEXT.location, type: "meeting" },
    ...EVENTS
  ];
  const grid = document.getElementById("cal-grid"), title = document.getElementById("cal-title"), list = document.getElementById("cal-list");
  let view = new Date(); view.setDate(1);

  const draw = () => {
    const y = view.getFullYear(), m = view.getMonth();
    title.textContent = view.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    const lead = new Date(y, m, 1).getDay(), days = new Date(y, m + 1, 0).getDate(), today = ymd(new Date());
    let html = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => `<div class="dow">${d}</div>`).join("");
    html += '<div class="day empty"></div>'.repeat(lead);
    for (let d = 1; d <= days; d++) {
      const k = `${y}-${pad(m + 1)}-${pad(d)}`;
      html += `<div class="day${k === today ? " today" : ""}"><span>${d}</span>${
        ALL.filter(e => e.date === k).map(e => `<em class="ev ${e.type}" title="${e.title}">${e.title}</em>`).join("")}</div>`;
    }
    grid.innerHTML = html;
    const inMonth = ALL.filter(e => e.date.startsWith(`${y}-${pad(m + 1)}`)).sort((a, b) => a.date.localeCompare(b.date));
    list.innerHTML = inMonth.length ? inMonth.map(e => `
      <article class="meeting"><span class="chip">📅 ${fmtDate(e.date + "T12:00")}</span>
        <h3 style="margin-top:.5rem">${e.title}</h3>
        <p>🕒 ${e.time} · 📍 ${e.location}</p></article>`).join("") : "<p>Nothing scheduled this month yet. Check back soon!</p>";
  };
  const go = n => { view.setMonth(view.getMonth() + n); draw(); };
  document.getElementById("cal-prev").onclick = () => go(-1);
  document.getElementById("cal-next").onclick = () => go(1);
  document.getElementById("cal-today").onclick = () => { view = new Date(); view.setDate(1); draw(); };
  draw();
}

/* ---------- Polish: gentle fade-in on scroll ---------- */
if (!matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.1 });
  document.querySelectorAll(".card, .meeting, .faq, .gallery figure").forEach(el => {
    el.classList.add("reveal"); io.observe(el);
  });
}
/* ---------- Star effects ---------- */
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const hero = document.querySelector(".hero");
  if (hero) {
    const sky = document.createElement("div");
    sky.className = "stars";
    for (let i = 0; i < 30; i++) {
      const s = document.createElement("span");
      s.className = "star";
      const size = 6 + Math.random() * 14;
      s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;` +
        `width:${size}px;height:${size}px;` +
        `animation-delay:${Math.random() * 4}s;animation-duration:${2 + Math.random() * 3}s`;
      sky.appendChild(s);
    }
    sky.insertAdjacentHTML("beforeend", '<span class="shoot"></span>');
    hero.prepend(sky);
  }

  let last = 0;
  document.addEventListener("mousemove", e => {
    const now = Date.now();
    if (now - last < 60) return;
    last = now;
    const s = document.createElement("span");
    s.className = "spark";
    s.textContent = "✦";
    s.style.left = e.clientX + "px";
    s.style.top = e.clientY + "px";
    s.style.setProperty("--dx", (Math.random() * 40 - 20) + "px");
    s.style.setProperty("--dy", (Math.random() * 40 + 10) + "px");
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 800);
  });
}