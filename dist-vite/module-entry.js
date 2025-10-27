const o = import("./module-module-common.js");
import("./module-module-utils.js");
const t = document.querySelector(".result");
try {
  await o, t.textContent = "It worked";
} catch (e) {
  t.textContent = String(e);
}
