import React from "react";
import { renderToString } from "react-dom/server";
import { App } from "./App";
import { getSeoData, indexableRoutes } from "./data/seoData";

export function render(pathname) {
  return renderToString(<App initialPathname={pathname} />);
}

export { getSeoData, indexableRoutes };
