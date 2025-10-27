Reproduction for bundler workarounds for top-level await Safari bug described by @jakearchibald  https://x.com/karlhorky/status/1982785268265460019

[webpack](https://repro-webpack-and-vite-top-level-await-safar.vercel.app/index.html) (works)

<img width="1459" height="366" alt="Screenshot 2025-10-27 at 14 24 45" src="https://github.com/user-attachments/assets/a2b628a7-2e3f-461f-a20a-5f783dfaac2e" />

[Vite](https://repro-webpack-and-vite-top-level-await-safar.vercel.app/index-vite.html) (breaks)

<img width="1476" height="326" alt="Screenshot 2025-10-27 at 14 24 02" src="https://github.com/user-attachments/assets/4194d428-8a9e-473c-96fe-0c992b1c19f5" />

[Vite with `rollupOptions.inlineDynamicImports.output = true`](https://repro-webpack-and-vite-top-level-await-safar.vercel.app/index-vite-inlineDynamicImports.html) (works)

<img width="1257" height="364" alt="Screenshot 2025-10-27 at 14 39 50" src="https://github.com/user-attachments/assets/6853eea9-124a-4660-994f-f5be21b55a91" />
