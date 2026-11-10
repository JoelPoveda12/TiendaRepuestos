/* ===== CONFIGURACIÓN CENTRAL ===== */
const CONFIG = {
    nombre: "Nintendo Parts & Repair Colombia",
    whatsapp: "",            // Ej.: "573001234567" (57 + número). Vacío = no configurado.
    moneda: "COP",
    horas: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]
};
/* ===== DATOS DE DEMOSTRACIÓN (reemplazar por datos reales verificados) ===== */
const CONSOLAS = {
    "Nintendo Wii": ["Wii"],
    "Nintendo Wii U": ["Wii U"],
    "Nintendo Switch": ["Switch (1.ª gen.)", "Switch Lite", "Switch OLED", "Switch 2"],
    "Familia 3DS": ["3DS", "3DS XL", "2DS", "New 3DS", "New 3DS XL", "New 2DS XL"]
};
const P = [
    { id: 1, n: "Pantalla LCD de reemplazo", sku: "DEMO-SWL-001", t: "Pantallas", c: ["Nintendo Switch"], m: "Switch Lite", k: "Nuevo", s: 5, p: 180000, v: "", nw: 8 },
    { id: 2, n: "Batería interna", sku: "DEMO-SW1-002", t: "Alimentación y carga", c: ["Nintendo Switch"], m: "Switch (1.ª gen.)", k: "Nuevo", s: 2, p: 95000, v: "", nw: 7 },
    { id: 3, n: "Módulo joystick analógico", sku: "DEMO-SWX-003", t: "Controles y botones", c: ["Nintendo Switch"], m: "Compatibilidad por verificar", k: "Nuevo", s: 12, p: 28000, v: "", nw: 6 },
    { id: 4, n: "Puerto de carga USB-C", sku: "DEMO-SWO-004", t: "Alimentación y carga", c: ["Nintendo Switch"], m: "Switch OLED", k: "Reacondicionado", s: 0, p: 45000, v: "", nw: 5 },
    { id: 5, n: "Lector de discos", sku: "DEMO-WII-005", t: "Lectores y almacenamiento", c: ["Nintendo Wii"], m: "Compatibilidad por verificar", k: "Usado", s: 3, p: 120000, v: "", nw: 4 },
    { id: 6, n: "Ventilador de refrigeración", sku: "DEMO-WIU-006", t: "Refrigeración", c: ["Nintendo Wii U"], m: "Wii U", k: "Nuevo", s: 9, p: 38000, v: "", nw: 3 },
    { id: 7, n: "Pantalla inferior táctil", sku: "DEMO-3DS-007", t: "Pantallas", c: ["Familia 3DS"], m: "New 3DS XL", k: "Nuevo", s: null, p: 85000, v: "", nw: 2 },
    { id: 8, n: "Kit destornilladores de precisión", sku: "DEMO-HER-008", t: "Herramientas y accesorios", c: ["Nintendo Wii", "Nintendo Wii U", "Nintendo Switch", "Familia 3DS"], m: "Uso general", k: "Nuevo", s: 20, p: 35000, v: "", nw: 1 }
];
const SV = [
    { n: "Mantenimiento preventivo", d: "Limpieza interna, revisión de refrigeración y pasta térmica.", c: "Todas las consolas" },
    { n: "Diagnóstico de fallas", d: "Revisión de encendido, imagen, carga y fallas electrónicas.", c: "Todas las consolas" },
    { n: "Cambio de pantalla o batería", d: "Sustitución de pantallas y baterías en portátiles.", c: "Switch, Lite, OLED y 3DS" },
    { n: "Puertos, botones y joysticks", d: "Reparación de puertos de carga, conectores, botones y joysticks.", c: "Según modelo" },
    { n: "Lectores de discos", d: "Revisión y reparación de lectores.", c: "Wii y Wii U" }
];
const DEPTOS = "Amazonas,Antioquia,Arauca,Atlántico,Bogotá D.C.,Bolívar,Boyacá,Caldas,Caquetá,Casanare,Cauca,Cesar,Chocó,Córdoba,Cundinamarca,Guainía,Guaviare,Huila,La Guajira,Magdalena,Meta,Nariño,Norte de Santander,Putumayo,Quindío,Risaralda,San Andrés y Providencia,Santander,Sucre,Tolima,Valle del Cauca,Vaupés,Vichada".split(",");

/* ===== UTILIDADES ===== */
const $ = s => document.querySelector(s);
const cop = n => "$" + new Intl.NumberFormat("es-CO").format(n) + " COP";
const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const opts = (a, first) => (first ? `<option value="">${first}</option>` : "") + a.map(x => `<option>${x}</option>`).join("");
function toast(m) { const t = $("#toast"); t.textContent = m; t.style.display = "block"; clearTimeout(t._h); t._h = setTimeout(() => t.style.display = "none", 4200) }
function wa(text) {
    const num = (CONFIG.whatsapp || "").replace(/\D/g, "");
    if (!num) toast("Falta configurar el número de WhatsApp (CONFIG.whatsapp). Se abrirá WhatsApp sin destinatario.");
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
}
const avail = p => p.s === null ? "Bajo pedido" : p.s === 0 ? "Agotado" : p.s <= 3 ? "Últimas unidades" : "Disponible";
const cls = { "Disponible": "ok", "Últimas unidades": "l", "Agotado": "n", "Bajo pedido": "p" };
const verif = p => p.m === "Compatibilidad por verificar";

/* ===== CARRITO (persistente en el navegador) ===== */
let cart = {}; try { cart = JSON.parse(localStorage.getItem("cart") || "{}") } catch (e) { }
const save = () => { try { localStorage.setItem("cart", JSON.stringify(cart)) } catch (e) { } };
const byId = id => P.find(p => p.id == id);
const maxQ = p => p.s === null ? 10 : p.s;
function add(id) {
    const p = byId(id); if (avail(p) === "Agotado") return toast("Este producto está agotado.");
    const q = (cart[id] || 0) + 1; if (q > maxQ(p)) return toast("No hay más unidades disponibles.");
    cart[id] = q; save(); drawCart(); toast("Agregado al carrito.");
}
function setQ(id, d) {
    const p = byId(id), q = (cart[id] || 0) + d;
    if (q <= 0) delete cart[id]; else if (q > maxQ(p)) return toast("Solo hay " + maxQ(p) + " unidades."); else cart[id] = q;
    save(); drawCart();
}
const subtotal = () => Object.entries(cart).reduce((a, [i, q]) => a + byId(i).p * q, 0);
function drawCart() {
    const ids = Object.keys(cart).filter(i => byId(i));
    $("#cnt").textContent = ids.reduce((a, i) => a + cart[i], 0);
    $("#cartBody").innerHTML = ids.length ? ids.map(i => {
        const p = byId(i); return `<div class="it"><b>${p.n}</b><span>${cop(p.p * cart[i])}</span>
   <span class="note" style="margin:0">${p.sku} · ${cop(p.p)} c/u</span>
   <span class="q"><button aria-label="Quitar una unidad" onclick="setQ(${i},-1)">−</button>${cart[i]}<button aria-label="Agregar una unidad" onclick="setQ(${i},1)">+</button></span>
   <button class="lk" onclick="delete cart[${i}];save();drawCart()">Eliminar</button></div>`
    }).join("") : '<div class="empty" style="margin:18px">Tu carrito está vacío.</div>';
    $("#cartFoot").innerHTML = ids.length ? `<div style="display:flex;justify-content:space-between"><span>Subtotal</span><b>${cop(subtotal())}</b></div>
   <p class="note">Envío: por confirmar según tu municipio. Total final se verifica al coordinar el pedido.</p>
   <button class="btn" onclick="openOut()">Finalizar pedido</button>`: "";
}
function cartOpen(o) { $("#drawer").classList.toggle("open", o); $("#ov").classList.toggle("open", o) }
$("#openCart").onclick = () => cartOpen(true); $("#closeCart").onclick = $("#ov").onclick = () => cartOpen(false);

/* ===== CATÁLOGO ===== */
function render() {
    const q = norm($("#q").value.trim()), c = $("#fC").value, t = $("#fT").value, k = $("#fK").value, a = $("#fA").value, mp = +$("#fP").value || 0;
    let L = P.filter(p => (!q || norm([p.n, p.sku, p.t, p.m, p.c.join(" ")].join(" ")).includes(q)) && (!c || p.c.includes(c)) && (!t || p.t === t) && (!k || p.k === k) && (!a || avail(p) === a) && (!mp || p.p <= mp));
    const s = $("#fS").value; L.sort((x, y) => s === "asc" ? x.p - y.p : s === "desc" ? y.p - x.p : y.nw - x.nw);
    $("#res").textContent = L.length + " producto" + (L.length === 1 ? "" : "s");
    $("#grid").innerHTML = L.length ? L.map(p => {
        const av = avail(p); return `<article class="card">
   <img class="ph" style="object-fit:contain;background:#fff" loading="lazy" src="${({1:"https://c1.neweggimages.com/productimage/nb640/BZPGD2509200J31Z4DE.jpg",2:"https://i.ebayimg.com/images/g/Z34AAOSwmBxnWkfs/s-l500.jpg",3:"https://i5.walmartimages.com/asr/f6472a29-28a1-4a42-9bd2-1fd9e13a83d2.44dbf8058a200b95e78fc5190cdf7fe7.jpeg",4:"https://i.ebayimg.com/images/g/cIkAAOSwl4JlOVMY/s-l400.jpg",5:"https://cdn.shopify.com/s/files/1/0041/6111/0065/files/4em1FvDWXWaiwCBX.jpg?v=1728586390",6:"https://cart-products.cdn.ifixit.com/cart-products/F2uSvZInQQtaAm3P.large",7:"https://i.ebayimg.com/images/g/qYQAAOSw3lJoSMXn/s-l140.webp",8:"https://a.allegroimg.com/original/117ada/6d886d524f7899483753f6edbc3f/Zestaw-narzedzi-do-naprawy-telefonu-laptopa-konsoli-okularow-precyzyjnych"})[p.id]}" alt="${p.n}">
   <span class="tag ${cls[av]}" style="align-self:start">${av}${p.s > 0 && p.s <= 3 ? " (" + p.s + ")" : ""}</span>
   <h3>${p.n}</h3>
   <div class="note" style="margin:0">Ref. ${p.sku} · ${p.k}</div>
   <div class="note" style="margin:0">${verif(p) ? "<b>Compatibilidad por verificar</b>" : "Compatible: " + p.m}</div>
   <div class="price">${cop(p.p)}</div>
   <div class="acts"><button class="btn s" ${av === "Agotado" ? "disabled" : ""} onclick="add(${p.id})">${av === "Agotado" ? "Agotado" : "Agregar al carrito"}</button>
   <button class="btn o s" onclick="askCompat(${p.id})">Consultar compatibilidad</button>
   <button class="btn wa s" onclick="askWA(${p.id})">Preguntar por WhatsApp</button></div></article>`
    }).join("")
        : `<div class="empty" style="grid-column:1/-1"><p><b>No encontramos resultados.</b></p><p style="margin:8px 0 14px">¿No encuentras el repuesto que necesitas? Escríbenos por WhatsApp y nuestro soporte técnico te ayudará a identificarlo.</p>
   <button class="btn wa" onclick="wa('Hola, no encontré el repuesto que necesito'+($('#q').value?' (búsqueda: '+$('#q').value+')':'')+'. ¿Pueden ayudarme a identificarlo?')">Escribir por WhatsApp</button></div>`;
}
function askWA(id) { const p = byId(id); wa(`Hola, quiero consultar la disponibilidad y compatibilidad del repuesto ${p.n}, referencia ${p.sku}, para mi consola Nintendo [indica tu modelo].`) }
function askCompat(id) { const p = byId(id); wa(`Hola, quiero verificar si el repuesto ${p.n} (referencia ${p.sku}) es compatible con mi Nintendo [modelo y revisión].`) }
["fC", "fT", "fK", "fA", "fP", "fS"].forEach(i => $("#" + i).addEventListener("input", render));
$("#q").addEventListener("input", () => { render(); });
$("#q").addEventListener("keydown", e => { if (e.key === "Enter") location.hash = "#tienda" });
$("#clear").onclick = () => { ["fC", "fT", "fK", "fA", "fP"].forEach(i => $("#" + i).value = ""); $("#q").value = ""; render() };

/* ===== SERVICIOS Y CITAS ===== */
$("#svcs").innerHTML = SV.map(s => `<div class="svc"><h3>${s.n}</h3><p>${s.d}<br>Consolas: ${s.c}</p>
 <b class="note" style="margin:0">Precio sujeto a evaluación técnica</b><div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
 <a class="btn s" href="#cita" onclick="$('#cS').value='${s.n}'">Solicitar cita</a>
 <button class="btn wa s" onclick="wa('Hola, quiero información sobre el servicio de ${s.n} para mi Nintendo [modelo].')">Consultar por WhatsApp</button></div></div>`).join("");
$("#cC").innerHTML = opts(Object.keys(CONSOLAS), "Selecciona consola");
$("#cC").onchange = () => { $("#cM").innerHTML = opts(CONSOLAS[$("#cC").value] || [], "Selecciona modelo") };
$("#cM").innerHTML = opts([], "Selecciona modelo");
$("#cS").innerHTML = opts(SV.map(s => s.n), "Selecciona servicio");
$("#cH").innerHTML = opts(CONFIG.horas);
(function () { const d = new Date(Date.now() + 864e5); const f = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Bogota" }).format(d); $("#cF").min = f })();
function need(ids) { let ok = true; ids.forEach(i => { const e = $("#" + i); const bad = !e.value.trim(); e.style.borderColor = bad ? "var(--red)" : ""; if (bad) ok = false }); return ok }
$("#fCita").onsubmit = e => {
    e.preventDefault();
    if (!need(["cC", "cM", "cS", "cD", "cF", "cN", "cT"])) return $("#cMsg").textContent = "Completa los campos marcados en rojo.";
    const ref = "CITA-" + Date.now().toString(36).toUpperCase();
    $("#cMsg").textContent = "Solicitud " + ref + " lista. Estado: pendiente de confirmación. Envíala por WhatsApp para que el técnico la confirme.";
    wa(`Hola, quisiera solicitar una cita (ref. ${ref}).\nConsola: ${$("#cC").value} – ${$("#cM").value}\nServicio: ${$("#cS").value}\nProblema: ${$("#cD").value}\nFecha y hora solicitadas: ${$("#cF").value} ${$("#cH").value} (hora Colombia)\nNombre: ${$("#cN").value}\nContacto: ${$("#cT").value}\n¿Pueden confirmarme el horario?`)
};
$("#fCon").onsubmit = e => {
    e.preventDefault();
    const okE = /^\S+@\S+\.\S+$/.test($("#kE").value);
    if (!need(["kN", "kD"]) || !okE) return $("#kMsg").textContent = "Revisa nombre, correo válido y descripción.";
    $("#kMsg").textContent = "Consulta preparada. Envíala por WhatsApp para recibir respuesta.";
    wa(`Hola, soy ${$("#kN").value} (${$("#kE").value}). ${$("#kT").value}: ${$("#kD").value}`)
};

/* ===== CHECKOUT (solicitud de pedido, sin pago simulado) ===== */
function openOut() { cartOpen(false); $("#oSum").innerHTML = Object.keys(cart).map(i => `<div class="note" style="margin:0">${cart[i]} × ${byId(i).n} — ${cop(byId(i).p * cart[i])}</div>`).join("") + `<p><b>Subtotal: ${cop(subtotal())}</b> · Envío: por confirmar</p>`; $("#dlgOut").showModal() }
$("#oCancel").onclick = () => $("#dlgOut").close();
$("#fOut").onsubmit = e => {
    e.preventDefault();
    if (!need(["oN", "oE", "oT", "oD", "oC", "oA"]) || !/^\S+@\S+\.\S+$/.test($("#oE").value)) return toast("Completa todos los datos obligatorios con un correo válido.");
    const ref = "PED-" + Date.now().toString(36).toUpperCase();
    const items = Object.keys(cart).map(i => `- ${cart[i]} × ${byId(i).n} (${byId(i).sku}): ${cop(byId(i).p * cart[i])}`).join("\n");
    wa(`Hola, quiero hacer un pedido (ref. ${ref}):\n${items}\nSubtotal: ${cop(subtotal())}\n\nNombre: ${$("#oN").value}\nCorreo: ${$("#oE").value}\nTeléfono: ${$("#oT").value}\nEntrega en Colombia: ${$("#oD").value}, ${$("#oC").value}, ${$("#oA").value}\n${$("#oX").value}\n¿Me confirman el envío y el medio de pago?`);
    $("#dlgOut").close(); toast("Pedido " + ref + " enviado como solicitud. Aún no está pagado.")
};

/* ===== INICIALIZACIÓN ===== */
document.title = CONFIG.nombre + " | Repuestos y servicio técnico";
$("#logo").innerHTML = `<b>■</b> ${CONFIG.nombre}`; $("#fName").textContent = CONFIG.nombre;
$("#oD").innerHTML = opts(DEPTOS, "Selecciona departamento");
$("#fC").innerHTML = opts(Object.keys(CONSOLAS), "Todas");
$("#fT").innerHTML = opts([...new Set(P.map(p => p.t))], "Todos");
$("#cons").innerHTML = Object.entries(CONSOLAS).map(([k, v]) => `<button class="con" data-go="${k}"><h3>${k}</h3><small>${v.join(", ")}</small></button>`).join("");
document.addEventListener("click", e => {
    const g = e.target.closest("[data-go]"); if (g) { $("#fC").value = g.dataset.go; render(); location.hash = "#tienda" }
    const w = e.target.closest("[data-wa]"); if (w) wa("Hola, necesito ayuda con mi Nintendo. ¿Pueden orientarme?");
    if (e.target.closest("[data-find]")) setTimeout(() => $("#kT").value = "Consultar un repuesto");
    if (e.target.closest("nav a")) $("#nav").classList.remove("open")
});
$("#menu").onclick = () => { const o = $("#nav").classList.toggle("open"); $("#menu").setAttribute("aria-expanded", o) };
render(); drawCart();