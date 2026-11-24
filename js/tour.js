/* Виртуальный тур ИГН. Новая локация — объект в SCENES.
   Панорама: equirectangular JPEG 2:1 в папке panoramas/, превью в panoramas/thumbs/. */
const FIRST = "white-tables";
const ROOT = new URL("..", document.currentScript.src);

function asset(path) {
  return new URL(path, ROOT).href;
}

const SCENES = [
  {
    id: "white-tables",
    title: "Белые столы",
    kicker: "Аудитория",
    summary: "Групповые столы, экран и окна на улицу.",
    description: "Учебная аудитория с шестиугольными столами и серыми креслами. У стены — телевизор, полки с растениями и шкаф. Светлая комната для семинаров и групповой работы.",
    capacity: "Около 20 мест",
    equipment: ["Телевизор", "Кондиционер", "Групповые столы"],
    features: ["Окна с рулонными шторами", "Растения у экрана", "Свободная расстановка"],
    panorama: "panoramas/white-tables.jpg",
    thumb: "panoramas/thumbs/white-tables.jpg",
    pitch: 0, yaw: 0, hfov: 100,
    hotspots: [
      { id: "screen", kind: "info", title: "Экран", text: "Телевизор на стене с полками и растениями. Удобная точка для показа материалов группе.", pitch: 2, yaw: -140 },
      { id: "to-computers", kind: "go", title: "В компьютерный класс", text: "Перейти к аудитории с компьютерами.", pitch: -4, yaw: 40, target: "computers" }
    ]
  },
  {
    id: "green-lounge",
    title: "Зелёная гостиная",
    kicker: "Пространство",
    summary: "Мятные стены, круглые столы, полки с книгами.",
    description: "Неформальная зона: бирюзовые стены, жёлтые акустические панели, круглые столики и мягкие кресла. Книжные стеллажи и телевизор.",
    capacity: "Около 16 мест",
    equipment: ["Телевизор", "Флипчарт", "Книжные стеллажи"],
    features: ["Акустические панели", "Мягкая мебель", "Зона у окна"],
    panorama: "panoramas/green-lounge.jpg",
    thumb: "panoramas/thumbs/green-lounge.jpg",
    pitch: 0, yaw: 0, hfov: 105,
    hotspots: [
      { id: "tv", kind: "info", title: "Телевизор и полки", text: "Экран между книжными стеллажами. Рядом флипчарт для обсуждения.", pitch: 0, yaw: -20 },
      { id: "to-meeting", kind: "go", title: "К большому столу", text: "Перейти к переговорной части этой же зоны.", pitch: -6, yaw: 120, target: "green-meeting" }
    ]
  },
  {
    id: "green-meeting",
    title: "Большой стол",
    kicker: "Переговорная",
    summary: "Изогнутый стол и мягкие кресла у зелёной стены.",
    description: "Вторая точка той же зелёной зоны: длинный изогнутый стол, белые и голубые кресла, панно на стене и вход в коридор.",
    capacity: "Около 14 мест за столом",
    equipment: ["Большой стол", "Панно с подсветкой", "Шкаф"],
    features: ["Переговорная рассадка", "Жёлтые панели на стене", "Отдельный вход"],
    panorama: "panoramas/green-meeting.jpg",
    thumb: "panoramas/thumbs/green-meeting.jpg",
    pitch: 0, yaw: 0, hfov: 100,
    hotspots: [
      { id: "table", kind: "info", title: "Стол", text: "Изогнутый стол собирает группу лицом друг к другу. Удобно для обсуждения и защиты работ.", pitch: -8, yaw: 0 },
      { id: "to-lounge", kind: "go", title: "В гостиную", text: "Вернуться к круглым столам.", pitch: -4, yaw: 160, target: "green-lounge" }
    ]
  },
  {
    id: "studio",
    title: "Студия",
    kicker: "Съёмка",
    summary: "Циклорама, свет и экран для съёмки.",
    description: "Съёмочная комната: белая циклорама, осветительные приборы, штативы и большой экран Jalinga. Синий ковёр, тёмные стены.",
    capacity: "Смена до 8 человек",
    equipment: ["Циклорама", "Свет", "Экран Jalinga", "Штативы"],
    features: ["Белый фон для съёмки", "Отдельный вход", "Тёмные стены без бликов"],
    panorama: "panoramas/studio.jpg",
    thumb: "panoramas/thumbs/studio.jpg",
    pitch: 0, yaw: 0, hfov: 100,
    hotspots: [
      { id: "cyclo", kind: "info", title: "Циклорама", text: "Белый фон для предметной и портретной съёмки. Свет стоит сверху и сбоку.", pitch: 0, yaw: -40 },
      { id: "to-media", kind: "go", title: "В медиахаб", text: "Перейти в медиахаб.", pitch: -6, yaw: 90, target: "media-hub" }
    ]
  },
  {
    id: "computers",
    title: "Компьютерный класс",
    kicker: "Аудитория",
    summary: "Ряд компьютеров, синие стены и цитаты.",
    description: "Аудитория с компьютерами вдоль синей стены, партами и маркерной доской. На стенах — цитаты о слове и мире. Два телевизора и шторы.",
    capacity: "Около 24 мест",
    equipment: ["Компьютеры", "Маркерная доска", "Два телевизора", "Кондиционеры"],
    features: ["Ряд рабочих мест у стены", "Парты в центре", "Книжный стеллаж"],
    panorama: "panoramas/computers.jpg",
    thumb: "panoramas/thumbs/computers.jpg",
    pitch: 0, yaw: 0, hfov: 105,
    hotspots: [
      { id: "pcs", kind: "info", title: "Компьютеры", text: "Рабочие места вдоль стены. Отсюда удобно вести практикум с общим экраном.", pitch: -2, yaw: -50 },
      { id: "to-treasure", kind: "go", title: "В класс TREASURE", text: "Перейти в компьютерный класс с надписью TREASURE.", pitch: -4, yaw: 80, target: "treasure" }
    ]
  },
  {
    id: "treasure",
    title: "Класс TREASURE",
    kicker: "Компьютеры",
    summary: "Длинный ряд мониторов у малиновой стены.",
    description: "Компьютерный класс: два ряда рабочих мест, малиновые стены, надпись TREASURE, телевизор и флипчарт у окна.",
    capacity: "Около 20 рабочих мест",
    equipment: ["Мониторы и системные блоки", "Телевизор", "Флипчарт"],
    features: ["Длинный ряд столов", "Окно со шторами", "Отдельная дверь"],
    panorama: "panoramas/treasure.jpg",
    thumb: "panoramas/thumbs/treasure.jpg",
    pitch: 0, yaw: 0, hfov: 100,
    hotspots: [
      { id: "row", kind: "info", title: "Ряд рабочих мест", text: "Мониторы стоят по обе стороны длинного стола. Над дверью — надпись TREASURE.", pitch: -4, yaw: 20 },
      { id: "to-blue", kind: "go", title: "В синюю комнату", text: "Перейти в синюю комнату.", pitch: -6, yaw: 140, target: "blue-room" }
    ]
  },
  {
    id: "media-hub",
    title: "Медиахаб",
    kicker: "Студия",
    summary: "Хромакей, свет и неон Media Hub.",
    description: "Медиахаб: розовые шторы, зелёный экран, софтбоксы, штативы и фиолетовая стена с надписью «Медиа Hub — пространство, где творчество становится реальностью».",
    capacity: "Съёмочная группа до 8 человек",
    equipment: ["Хромакей", "Софтбоксы", "Штативы", "Неоновые вывески"],
    features: ["Фон для съёмки", "Зона с креслами", "Стеллажи с реквизитом"],
    panorama: "panoramas/media-hub.jpg",
    thumb: "panoramas/thumbs/media-hub.jpg",
    pitch: 0, yaw: 0, hfov: 100,
    hotspots: [
      { id: "green", kind: "info", title: "Хромакей", text: "Зелёный экран слева, рядом софтбокс. Здесь снимают с последующей заменой фона.", pitch: 4, yaw: -70 },
      { id: "to-podcast", kind: "go", title: "В подкастную", text: "Перейти в подкастную комнату.", pitch: -6, yaw: 40, target: "podcast" }
    ]
  },
  {
    id: "podcast",
    title: "Подкастная",
    kicker: "Запись",
    summary: "Микрофоны, винил и акустические панели.",
    description: "Комната для записи: акустический поролон, пластинки на стене, фиолетовый диван, микрофоны на столе и рабочее место с монитором.",
    capacity: "До 4 человек в кадре",
    equipment: ["Микрофоны", "Монитор и колонки", "Наушники"],
    features: ["Акустическая отделка", "Виниловые пластинки", "Мягкая зона"],
    panorama: "panoramas/podcast.jpg",
    thumb: "panoramas/thumbs/podcast.jpg",
    pitch: 0, yaw: 0, hfov: 100,
    hotspots: [
      { id: "mics", kind: "info", title: "Микрофоны", text: "Стол с микрофонами и наушниками. Вокруг — панели, которые гасят эхо.", pitch: -2, yaw: 40 },
      { id: "to-studio", kind: "go", title: "В студию", text: "Перейти в съёмочную студию.", pitch: -6, yaw: -90, target: "studio" }
    ]
  },
  {
    id: "blue-room",
    title: "Синяя комната",
    kicker: "Студия",
    summary: "Синие шторы, стеллаж и зелёный фон.",
    description: "Комната со шторами по периметру, фиолетовой стеной, стеллажом и свёрнутым хромакеем. Столы и кресла для небольшой группы.",
    capacity: "Около 10 мест",
    equipment: ["Хромакей", "Свет на стойке", "Стеллаж", "Крепление для экрана"],
    features: ["Шторы по стенам", "Две двери", "Отдельная зона у стола"],
    panorama: "panoramas/blue-room.jpg",
    thumb: "panoramas/thumbs/blue-room.jpg",
    pitch: 0, yaw: 0, hfov: 100,
    hotspots: [
      { id: "shelf", kind: "info", title: "Стеллаж и фон", text: "Синий стеллаж и свёрнутый зелёный экран. Свет на стойке стоит рядом.", pitch: 0, yaw: -40 },
      { id: "to-white", kind: "go", title: "К белым столам", text: "Вернуться в аудиторию с белыми столами.", pitch: -6, yaw: 100, target: "white-tables" }
    ]
  }
];

const byId = Object.fromEntries(SCENES.map((s) => [s.id, s]));
const $ = (id) => document.getElementById(id);
let viewer = null;
let sceneId = FIRST;
let rotating = false;
let stripOpen = true;
let openHotspot = null;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

function hideLoader() {
  const el = $("loader");
  if (el) el.classList.add("hide");
}

function esc(s) {
  var map = {
    "&": "\u0026amp;",
    "<": "\u0026lt;",
    ">": "\u0026gt;",
    '"': "\u0026quot;",
    "'": "\u0026#39;"
  };
  return String(s).replace(/[&<>"']/g, function (c) { return map[c]; });
}

function setProgress() {}

function paintScene() {
  const scene = byId[sceneId];
  $("scene-title").textContent = scene.title;
  $("scene-kicker").textContent = scene.kicker;
  document.querySelectorAll(".scene").forEach((btn) => btn.classList.toggle("active", btn.dataset.id === sceneId));
}

function buildStrip() {
  $("strip").innerHTML = SCENES.map((scene) => `
    <button type="button" class="scene${scene.id === sceneId ? " active" : ""}" data-id="${scene.id}">
      <img src="${asset(scene.thumb)}" alt="">
      <strong>${esc(scene.title)}</strong>
      <em>${esc(scene.summary)}</em>
    </button>`).join("");
}

function sceneConfig(scene) {
  return {
    type: "equirectangular",
    panorama: asset(scene.panorama),
    pitch: scene.pitch,
    yaw: scene.yaw,
    hfov: scene.hfov,
    hotSpots: scene.hotspots.map((h) => ({
      pitch: h.pitch,
      yaw: h.yaw,
      type: "info",
      text: h.title,
      cssClass: h.kind === "go" ? "ign-pin ign-go" : "ign-pin",
      clickHandlerFunc: (_e, args) => {
        const host = byId[args[0]].hotspots.find((x) => x.id === args[1]);
        if (host) showHotspot(host);
      },
      clickHandlerArgs: [scene.id, h.id]
    }))
  };
}

function startViewer() {
  const scenes = {};
  for (const scene of SCENES) scenes[scene.id] = sceneConfig(scene);
  viewer = pannellum.viewer("viewer", {
    default: { firstScene: FIRST, sceneFadeDuration: reduce ? 0 : 700, autoLoad: true, showControls: false, compass: false, author: "ИГН АлтГУ" },
    scenes
  });
  viewer.on("load", hideLoader);
  setInterval(() => {
    if (!viewer) return;
    $("needle").style.transform = `translate(-50%, -100%) rotate(${-viewer.getYaw()}deg)`;
  }, 140);
}

function go(id) {
  const next = byId[id];
  if (!viewer || !next || id === sceneId) return;
  closeHotspot();
  const fade = $("fade");
  fade.hidden = false;
  fade.classList.add("show");
  setTimeout(() => {
    viewer.loadScene(id, next.pitch, next.yaw, next.hfov);
    sceneId = id;
    paintScene();
    setTimeout(() => { fade.classList.remove("show"); fade.hidden = true; }, reduce ? 0 : 120);
  }, reduce ? 0 : 180);
}

function step(dir) {
  const i = SCENES.findIndex((s) => s.id === sceneId);
  go(SCENES[(i + dir + SCENES.length) % SCENES.length].id);
}

function closeSheet() { $("sheet").hidden = true; }
function closeHotspot() { openHotspot = null; $("hotspot").hidden = true; }

function openSheet(title, html) {
  closeHotspot();
  $("sheet-kicker").textContent = title;
  $("sheet-body").innerHTML = html;
  $("sheet").hidden = false;
}

function roomHtml(scene) {
  return `
    <p class="kicker">${esc(scene.kicker)}</p>
    <h2>${esc(scene.title)}</h2>
    <p>${esc(scene.description)}</p>
    <dl>
      <div><dt>Вместимость</dt><dd>${esc(scene.capacity)}</dd></div>
      <div><dt>Оборудование</dt><dd>${esc(scene.equipment.join(" · "))}</dd></div>
    </dl>
    <ul>${scene.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`;
}

function aboutHtml() {
  return `
    <h2>Институт географии и природопользования</h2>
    <p>Алтайский государственный университет, Барнаул. Тур по аудиториям и студиям института: учебные классы, медиахаб и подкастная.</p>
    <dl>
      <div><dt>Адрес</dt><dd>г. Барнаул, пр-т Ленина, 61а, офис 511 «М»</dd></div>
      <div><dt>Телефон</dt><dd><a href="tel:+73852291275">+7 (3852) 291-275</a></dd></div>
      <div><dt>Почта</dt><dd><a href="mailto:decanat@geo.asu.ru">decanat@geo.asu.ru</a></dd></div>
      <div><dt>Сайт</dt><dd><a href="https://www.asu.ru/structure/faculties/geograhpy_dep/" target="_blank" rel="noreferrer">asu.ru — институт географии</a></dd></div>
    </dl>`;
}

function helpHtml() {
  return `<ul>
    <li>Тяните одним пальцем или мышью, чтобы оглядеться. Колёсико приближает.</li>
    <li>Золотая точка — справка. Точка с тёмным центром — переход.</li>
    <li>Двумя пальцами влево или вправо — соседняя локация.</li>
    <li>Стрелки — соседние локации. L — лента. I — об аудитории. A — автоповорот. F — полный экран. H — справка.</li>
  </ul>`;
}

function listHtml() {
  return `<ul style="list-style:none;padding:0;margin:0">${SCENES.map((scene, i) => `
    <li><button type="button" class="loc${scene.id === sceneId ? " on" : ""}" data-go="${scene.id}">
      <b>${String(i + 1).padStart(2, "0")}</b>
      <span><strong style="display:block;color:var(--ivory)">${esc(scene.title)}</strong><em style="color:var(--mist);font-style:normal;font-size:12px">${esc(scene.summary)}</em></span>
    </button></li>`).join("")}</ul>`;
}

function showHotspot(spot) {
  openHotspot = spot;
  $("hotspot").hidden = false;
  $("hotspot").innerHTML = `
    <div class="row">
      <div>
        <p class="kicker">${spot.kind === "go" ? "Переход" : "Точка интереса"}</p>
        <h2>${esc(spot.title)}</h2>
      </div>
      <button type="button" class="round" id="close-hot" aria-label="Закрыть карточку">×</button>
    </div>
    <p>${esc(spot.text)}</p>
    ${spot.kind === "go" && spot.target ? `<button type="button" class="gold" id="go-hot">Перейти</button>` : ""}`;
  $("close-hot").onclick = closeHotspot;
  const goBtn = $("go-hot");
  if (goBtn) goBtn.onclick = () => go(spot.target);
}

function toggleSpin() {
  if (!viewer) return;
  rotating = !rotating;
  if (rotating) viewer.startAutoRotate(-1.2);
  else viewer.stopAutoRotate();
  $("spin-btn").classList.toggle("active", rotating);
  $("spin-btn").textContent = rotating ? "Стоп" : "Автоповорот";
}

function toggleFull() {
  const el = $("app");
  if (document.fullscreenElement) document.exitFullscreen();
  else el.requestFullscreen();
}

function bind() {
  document.querySelector(".tools").onclick = (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;
    const action = btn.dataset.action;
    if (action === "list") openSheet("Локации", listHtml());
    if (action === "room") openSheet("Об аудитории", roomHtml(byId[sceneId]));
    if (action === "about") openSheet("О туре", aboutHtml());
    if (action === "help") openSheet("Как смотреть", helpHtml());
    if (action === "spin") toggleSpin();
    if (action === "full") toggleFull();
  };
  $("sheet").onclick = (event) => {
    if (event.target.closest("[data-close]")) closeSheet();
    const goBtn = event.target.closest("[data-go]");
    if (goBtn) { go(goBtn.dataset.go); closeSheet(); }
  };
  $("strip").onclick = (event) => {
    const btn = event.target.closest(".scene");
    if (btn) go(btn.dataset.id);
  };
  $("prev").onclick = () => step(-1);
  $("next").onclick = () => step(1);
  $("toggle-strip").onclick = () => { stripOpen = !stripOpen; syncStrip(); };
  $("retry").onclick = () => boot();

  let swipe = null;
  $("viewer").addEventListener("touchstart", (event) => {
    if (event.touches.length === 2) {
      swipe = { x: (event.touches[0].clientX + event.touches[1].clientX) / 2 };
    }
  }, { passive: true });
  $("viewer").addEventListener("touchend", (event) => {
    if (!swipe || !event.changedTouches[0]) return;
    const dx = event.changedTouches[0].clientX - swipe.x;
    swipe = null;
    if (Math.abs(dx) > 72) step(dx < 0 ? 1 : -1);
  });

  window.addEventListener("keydown", (event) => {
    const tag = event.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (event.key === "Escape") { if (openHotspot) closeHotspot(); else closeSheet(); }
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
    const key = event.key.toLowerCase();
    if (key === "f" || key === "а") toggleFull();
    if (key === "a" || key === "ф") toggleSpin();
    if (key === "i" || key === "ш") openSheet("Об аудитории", roomHtml(byId[sceneId]));
    if (key === "h" || event.key === "?" || key === "р") openSheet("Как смотреть", helpHtml());
    if (key === "l" || key === "д") { stripOpen = !stripOpen; syncStrip(); }
  });
}

function syncStrip() {
  $("strip-wrap").classList.toggle("hidden", !stripOpen);
  $("toggle-strip").textContent = stripOpen ? "Скрыть локации" : "Список локаций";
}

function fail(err) {
  $("load-error").hidden = false;
  $("load-error").textContent = (err && err.message) || "Не удалось открыть тур";
  $("retry").hidden = false;
}

function boot() {
  try {
    if (!window.pannellum) throw new Error("Не загрузился просмотрщик панорам");
    startViewer();
    setTimeout(hideLoader, reduce ? 0 : 900);
  } catch (err) {
    fail(err);
  }
}

buildStrip();
paintScene();
bind();
boot();
