import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const workspaceDirectory = resolve(import.meta.dirname, "..");
const distributionDirectory = resolve(workspaceDirectory, "dist");
const serverEntryPath = resolve(workspaceDirectory, ".prerender", "entry-server.js");
const template = await readFile(resolve(distributionDirectory, "index.html"), "utf8");
const { getSeoData, indexableRoutes, render } = await import(pathToFileURL(serverEntryPath));
const routes = [...indexableRoutes, "/404"];
const pageTemplate = template
  .replace(/\s*<link\s+rel="(?:icon|apple-touch-icon)"[^>]*>/gi, "")
  .replace(/\s*<meta\s+name="robots"[^>]*>/gi, "")
  .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, "")
  .replace(/\s*<meta\s+property="og:[^"]+"[^>]*>/gi, "")
  .replace(/\s*<meta\s+name="twitter:[^"]+"[^>]*>/gi, "");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function createHeadTags(seo) {
  const robots = seo.noindex ? "noindex,follow" : "index,follow";
  return [
    '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">',
    '<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">',
    '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">',
    `<meta name="robots" content="${robots}">`,
    `<link rel="canonical" href="${seo.canonical}">`,
    '<meta property="og:locale" content="ru_RU">',
    '<meta property="og:site_name" content="РусХимСоюз">',
    `<meta property="og:type" content="${seo.type}">`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}">`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}">`,
    `<meta property="og:url" content="${seo.canonical}">`,
    `<meta property="og:image" content="${seo.image}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}">`,
    `<meta name="twitter:image" content="${seo.image}">`,
  ].join("\n    ");
}

for (const route of routes) {
  const seo = getSeoData(route);
  const renderedApplication = render(route);
  const html = pageTemplate
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(seo.title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/s, `<meta name="description" content="${escapeHtml(seo.description)}">`)
    .replace("</head>", `    ${createHeadTags(seo)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${renderedApplication}</div>`);
  const outputPath = route === "/" ? resolve(distributionDirectory, "index.html") : resolve(distributionDirectory, route.slice(1), "index.html");

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, "utf8");

  if (route === "/404") {
    await writeFile(resolve(distributionDirectory, "404.html"), html, "utf8");
  }
}

await rm(resolve(workspaceDirectory, ".prerender"), { recursive: true, force: true });
