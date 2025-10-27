const [{ utils }, { common }] = await Promise.all([
  import('./module-utils.js'),
  import('./module-common.js'),
]);

const resultEl = document.querySelector('.result');
if (resultEl) {
  resultEl.textContent = `Finished: utils=${utils}, common=${common}`;
}

console.log('entry', { common, utils });
