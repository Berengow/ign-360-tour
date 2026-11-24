/* Виртуальный тур ИГН. Новая локация — объект в SCENES.
   Панорама: equirectangular JPEG 2:1 в папке panoramas/, превью в panoramas/thumbs/. */
const FIRST = "hall";
const SCENES = [
  { id: "highlands", title: "Высокогорный полигон", kicker: "Полевая практика", summary: "Хребты, разреженный воздух, точки наблюдения.", description: "Учебное пространство полевых практик института: чтение рельефа, климатические наблюдения и работа с ландшафтным профилем. Демонстрационная панорама высокогорного плато — замените её съёмкой реального полигона.", capacity: "Группа до 25 человек", equipment: ["GPS и геодезические приёмники", "Метеокомплект", "Полевые планшеты"], features: ["Круговой обзор хребта", "Точки для ландшафтного профиля", "Безопасная площадка сбора группы"], panorama: "panoramas/highlands.jpg", thumb: "panoramas/thumbs/highlands.jpg", pitch: 2, yaw: 180, hfov: 105, demo: true, hotspots: [
    { id: "ridge", kind: "info", title: "Линия хребта", text: "Отсюда читают ярусность рельефа: водоразделы, осыпи и высотную поясность. На практике студенты строят профиль и отмечают границы ландшафтов.", pitch: 8, yaw: 40 },
    { id: "to-forest", kind: "go", title: "К лесной практике", text: "Перейти к пологу леса.", pitch: -4, yaw: 210, target: "forest" }
  ]},
  { id: "forest", title: "Лесная практика", kicker: "Биогеография", summary: "Полог, ярусы и микроклимат под кронами.", description: "Точка наблюдений за лесным сообществом: состав древостоя, подрост, световой режим. Демонстрационный снимок из кроны — поставьте панораму настоящей учебной тропы института.", capacity: "Группа до 18 человек", equipment: ["Клинометр и мерная вилка", "Определители", "Квадраты для учёта"], features: ["Ярусная структура наглядна", "Тень и влажность под пологом"], panorama: "panoramas/canopy.jpg", thumb: "panoramas/thumbs/canopy.jpg", pitch: 6, yaw: 0, hfov: 100, demo: true, hotspots: [
    { id: "canopy", kind: "info", title: "Полог", text: "Сомкнутость крон задаёт свет на почве и состав нижних ярусов. Здесь удобно объяснять вертикальную структуру сообщества.", pitch: 18, yaw: -30 },
    { id: "to-valley", kind: "go", title: "К долине", text: "Перейти к рассветной долине.", pitch: -8, yaw: 120, target: "valley" }
  ]},
  { id: "valley", title: "Долина на рассвете", kicker: "Гидрология и ландшафт", summary: "Низкий свет, долинный рисунок, утренний ход температуры.", description: "Полевой выход на рассвете: инверсия, туманы, следы водотоков. Демонстрационная панорама открытой долины. Замените файлом со съёмки долины Алтая или кампусной точки.", capacity: "Группа до 20 человек", equipment: ["Термометры", "Анемометр", "Полевой дневник"], features: ["Низкое солнце для чтения рельефа", "Хороший горизонт"], panorama: "panoramas/valley.jpg", thumb: "panoramas/thumbs/valley.jpg", pitch: 0, yaw: 90, hfov: 110, demo: true, hotspots: [
    { id: "light", kind: "info", title: "Низкий свет", text: "На рассвете тени проявляют микрорельеф. Это удобный момент, чтобы показать, как экспозиция склона меняет нагрев и растительность.", pitch: 4, yaw: 20 },
    { id: "to-dawn", kind: "go", title: "К степному горизонту", text: "Перейти к открытому горизонту.", pitch: -6, yaw: 200, target: "dawn" }
  ]},
  { id: "dawn", title: "Открытый горизонт", kicker: "Климат и степь", summary: "Линия небосвода, ветер, дальняя видимость.", description: "Площадка для наблюдений за облачностью, ветром и дальностью видимости. Демонстрационный снимок травяного горизонта на восходе.", capacity: "Группа до 25 человек", equipment: ["Облачный атлас", "Компас", "Барометр"], features: ["Чистый горизонт", "Утренний ход освещённости"], panorama: "panoramas/dawn.jpg", thumb: "panoramas/thumbs/dawn.jpg", pitch: -2, yaw: 40, hfov: 100, demo: true, hotspots: [
    { id: "sky", kind: "info", title: "Небосвод", text: "Открытый горизонт нужен для учёта облачности и ветра без помех от застройки. Студенты сравнивают показания с данными ближайшей станции.", pitch: 22, yaw: -10 },
    { id: "to-station", kind: "go", title: "К научной станции", text: "Перейти к инструментальной площадке.", pitch: -5, yaw: 150, target: "station" }
  ]},
  { id: "station", title: "Научная станция", kicker: "Инструменты", summary: "Площадка приборов на высокогорном плато.", description: "Образ научной станции: антенны, юстировка, работа на ветру. Это демонстрационная панорама высокогорной обсерватории, не корпуса на проспекте Ленина. Свою лабораторию подставьте тем же файлом сцены.", capacity: "Смена до 12 человек", equipment: ["Приёмники и антенны", "Журнал наблюдений", "Защита от ветра и солнца"], features: ["Круговой доступ к приборам", "Минимум засветки горизонта"], panorama: "panoramas/station.jpg", thumb: "panoramas/thumbs/station.jpg", pitch: -4, yaw: 120, hfov: 100, demo: true, hotspots: [
    { id: "array", kind: "info", title: "Поле приборов", text: "Расстановка инструментов задаёт, что именно можно измерить одновременно. На занятии разбирают, зачем приборам нужен открытый горизонт и устойчивое основание.", pitch: -2, yaw: 80 },
    { id: "to-hall", kind: "go", title: "В зал коллекций", text: "Вернуться в интерьер института.", pitch: -10, yaw: 250, target: "hall" }
  ]},
  { id: "hall", title: "Зал коллекций", kicker: "Институт", summary: "Учебные фонды, витрины, тихий свет.", description: "Зал, где полевой материал становится коллекцией: карты, образцы, витрины. Демонстрационная панорама музейного зала. Замените её сферическим снимком реальной аудитории или фонда ИГН — карточка подхватит новое описание.", capacity: "До 40 человек на занятии", equipment: ["Витрины и планшеты", "Проектор", "Рабочие столы у экспозиции"], features: ["Кольцевой маршрут осмотра", "Точки рассказа у витрин", "Спокойный рассеянный свет"], panorama: "panoramas/hall.jpg", thumb: "panoramas/thumbs/hall.jpg", pitch: 0, yaw: 0, hfov: 100, demo: true, hotspots: [
    { id: "vitrine", kind: "info", title: "Витрина", text: "Здесь держат образцы и карты, к которым возвращаются после практики. Подпись, масштаб и место сбора — обязательная часть карточки экспоната.", pitch: 0, yaw: 30 },
    { id: "to-highlands", kind: "go", title: "На высокогорье", text: "Выйти к полевому полигону.", pitch: -6, yaw: 160, target: "highlands" }
  ]}
];

const byId = Object.fromEntries(SCENES.map((s) => [s.id, s]));
const $ = (id) => document.getElementById(id);
let viewer = null;
let sceneId = FIRST;
let rotating = false;
let stripOpen = true;
let openHotspot = null;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&", "<": "<", ">": ">", '"': """, "'": "&#39;" }[c]));
}

function setProgress(ratio) {
  const n = Math.round(ratio * 100);
  $("bar-fill").style.width = n + "%";
  $("pct").textContent = n + "%";
}

async function preload() {
  const cache = "caches" in window ? await caches.open("ign-360-pages-v1").catch(() => null) : null;
  let done = 0;
  const blobs = new Map();
  await Promise.all(SCENES.map(async (scene) => {
    try {
      const cached = cache ? await cache.match(scene.panorama) : null;
      const response = cached || await fetch(scene.panorama);
      if (!response.ok) throw new Error(response.status);
      const blob = await response.blob();
      if (cache && !cached) await cache.put(scene.panorama, new Response(blob.slice(), { headers: { "Content-Type": blob.type } }));
      blobs.set(scene.panorama, URL.createObjectURL(blob));
    } catch {
      blobs.set(scene.panorama, scene.panorama);
    } finally {
      done += 1;
      setProgress(done / SCENES.length);
    }
  }));
  return blobs;
}

function paintScene() {
  const scene = byId[sceneId];
  $("scene-title").textContent = scene.title;
  $("scene-kicker").textContent = scene.kicker + (scene.demo ? " · демонстрационный снимок" : "");
  document.querySelectorAll(".scene").forEach((btn) => btn.classList.toggle("active", btn.dataset.id === sceneId));
}

function buildStrip() {
  $("strip").innerHTML = SCENES.map((scene) => `
    <button type="button" class="scene${scene.id === sceneId ? " active" : ""}" data-id="${scene.id}">
      <img src="${scene.thumb}" alt="">
      <strong>${esc(scene.title)}</strong>
      <em>${esc(scene.summary)}</em>
    </button>`).join("");
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
  }, reduce ? 0 : 280);
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
    ${scene.demo ? `<p class="note">Демонстрационная панорама, не снимок кампуса. Замените JPEG в папке panoramas и превью в panoramas/thumbs, затем поправьте подпись в js/tour.js.</p>` : ""}
    <dl>
      <div><dt>Вместимость</dt><dd>${esc(scene.capacity)}</dd></div>
      <div><dt>Оборудование</dt><dd>${esc(scene.equipment.join(" · "))}</dd></div>
    </dl>
    <ul>${scene.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`;
}

function aboutHtml() {
  return `
    <h2>Институт географии и природопользования</h2>
    <p>Алтайский государственный университет, Барнаул. Тур собран как тихий музейный маршрут: аудитории и фонды рядом с полевыми точками Алтая.</p>
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

function showHotspot(scene, spot) {
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

function startViewer(blobs) {
  const scenes = {};
  for (const scene of SCENES) {
    scenes[scene.id] = {
      type: "equirectangular",
      panorama: blobs.get(scene.panorama) || scene.panorama,
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
          if (host) showHotspot(byId[args[0]], host);
        },
        clickHandlerArgs: [scene.id, h.id]
      }))
    };
  }
  viewer = pannellum.viewer("viewer", {
    default: { firstScene: FIRST, sceneFadeDuration: reduce ? 0 : 800, autoLoad: true, showControls: false, compass: false, author: "ИГН АлтГУ" },
    scenes
  });
  setInterval(() => {
    if (!viewer) return;
    const yaw = viewer.getYaw();
    $("needle").style.transform = `translate(-50%, -100%) rotate(${-yaw}deg)`;
  }, 140);
}

function bind() {
  document.querySelector(".tools").onclick = (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;
    const scene = byId[sceneId];
    const action = btn.dataset.action;
    if (action === "list") openSheet("Локации", listHtml());
    if (action === "room") openSheet("Об аудитории", roomHtml(scene));
    if (action === "about") openSheet("О туре", aboutHtml());
    if (action === "help") openSheet("Как смотреть", helpHtml());
    if (action === "spin") toggleSpin();
    if (action === "full") toggleFull();
  };
  $("sheet").onclick = (event) => {
    if (event.target.closest("[data-close]")) closeSheet();
    const goBtn = event.target.closest("[data-go]");
    if (goBtn) { go(goBtn.dataset.go); closeSheet(); stripOpen = true; syncStrip(); }
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
      swipe = { x: (event.touches[0].clientX + event.touches[1].clientX) / 2, y: (event.touches[0].clientY + event.touches[1].clientY) / 2 };
    }
  }, { passive: true });
  $("viewer").addEventListener("touchend", (event) => {
    if (!swipe || !event.changedTouches[0]) return;
    const dx = event.changedTouches[0].clientX - swipe.x;
    const dy = event.changedTouches[0].clientY - swipe.y;
    swipe = null;
    if (Math.abs(dx) > 72 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
  });

  window.addEventListener("keydown", (event) => {
    const tag = event.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (event.key === "Escape") { if (openHotspot) closeHotspot(); else closeSheet(); }
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
    if (event.key.toLowerCase() === "f" || event.key.toLowerCase() === "а") toggleFull();
    if (event.key.toLowerCase() === "a" || event.key.toLowerCase() === "ф") toggleSpin();
    if (event.key.toLowerCase() === "i" || event.key.toLowerCase() === "ш") openSheet("Об аудитории", roomHtml(byId[sceneId]));
    if (event.key.toLowerCase() === "h" || event.key === "?" || event.key.toLowerCase() === "р") openSheet("Как смотреть", helpHtml());
    if (event.key.toLowerCase() === "l" || event.key.toLowerCase() === "д") { stripOpen = !stripOpen; syncStrip(); }
  });
}

function syncStrip() {
  $("strip-wrap").classList.toggle("hidden", !stripOpen);
  $("toggle-strip").textContent = stripOpen ? "Скрыть локации" : "Список локаций";
}

async function boot() {
  $("loader").classList.remove("hide");
  $("load-error").hidden = true;
  $("retry").hidden = true;
  $("bar").hidden = false;
  $("pct").hidden = false;
  setProgress(0.04);
  try {
    const blobs = await preload();
    if (!window.pannellum) throw new Error("Не удалось загрузить просмотрщик панорам");
    if (!viewer) startViewer(blobs);
    setProgress(1);
    setTimeout(() => $("loader").classList.add("hide"), reduce ? 150 : 500);
  } catch (err) {
    $("bar").hidden = true;
    $("pct").hidden = true;
    $("load-error").hidden = false;
    $("load-error").textContent = err.message || "Не удалось открыть тур";
    $("retry").hidden = false;
  }
}

buildStrip();
paintScene();
bind();
boot();
