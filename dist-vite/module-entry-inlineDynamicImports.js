await new Promise((e) => setTimeout(e, 100));
const r = "utils", t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  utils: r
}, Symbol.toStringTag, { value: "Module" })), { utils: n } = await Promise.resolve().then(() => t), l = n;
console.log("common", { utils: n });
const s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: l
}, Symbol.toStringTag, { value: "Module" })), m = Promise.resolve().then(() => s);
Promise.resolve().then(() => t);
const o = document.querySelector(".result");
try {
  await m, o.textContent = "It worked";
} catch (e) {
  o.textContent = String(e);
}
