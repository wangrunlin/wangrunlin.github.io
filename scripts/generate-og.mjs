import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const astroRequire = createRequire(require.resolve("astro/package.json"));
const sharp = astroRequire("sharp");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#101018"/><rect x="740" y="70" width="390" height="490" rx="28" fill="#211b30" stroke="#534266"/><g fill="#b7a2ef" font-family="Arial,sans-serif"><text x="70" y="112" font-size="22" letter-spacing="3">LEO WANG / OPEN SOURCE</text><text x="70" y="260" font-size="80" font-weight="bold" fill="#ececf5">Small tools.</text><text x="70" y="355" font-size="80" font-weight="bold">Shared openly.</text><text x="70" y="524" font-size="25" fill="#a2a2b5">wangrunlin.github.io</text><text x="792" y="185" font-size="76">&lt;/&gt;</text><text x="792" y="278" font-size="24" fill="#ececf5">Projects &amp; contributions</text><text x="792" y="362" font-size="21">Prompts &amp; creative tools</text><text x="792" y="415" font-size="21">Web starters</text><text x="792" y="468" font-size="21">Useful experiments</text></g></svg>`;
await sharp(Buffer.from(svg))
  .png()
  .toFile(new URL("../public/og-open-source.png", import.meta.url).pathname);
