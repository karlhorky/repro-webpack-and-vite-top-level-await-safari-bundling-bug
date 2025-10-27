const moduleCommonPromise = import('./module-common.js');
const moduleUtilsPromise = import('./module-utils.js');

const resultEl = document.querySelector('.result');
try {
  await moduleCommonPromise;
  resultEl.textContent = 'It worked';
} catch (error) {
  resultEl.textContent = String(error);
}
