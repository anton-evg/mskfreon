import { useEffect } from "react";
import { getSeoData } from "../data/seoData";

function setMetaAttribute(selector, attribute, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    const [attributeName, attributeValue] = attribute;
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", value);
}

export function SeoMeta({ pathname }) {
  useEffect(() => {
    const seo = getSeoData(pathname);
    document.title = seo.title;

    setMetaAttribute('meta[name="description"]', ["name", "description"], seo.description);
    setMetaAttribute('meta[name="robots"]', ["name", "robots"], seo.noindex ? "noindex,follow" : "index,follow");
    setMetaAttribute('meta[property="og:locale"]', ["property", "og:locale"], "ru_RU");
    setMetaAttribute('meta[property="og:site_name"]', ["property", "og:site_name"], "РусХимСоюз");
    setMetaAttribute('meta[property="og:type"]', ["property", "og:type"], seo.type);
    setMetaAttribute('meta[property="og:title"]', ["property", "og:title"], seo.title);
    setMetaAttribute('meta[property="og:description"]', ["property", "og:description"], seo.description);
    setMetaAttribute('meta[property="og:url"]', ["property", "og:url"], seo.canonical);
    setMetaAttribute('meta[property="og:image"]', ["property", "og:image"], seo.image);
    setMetaAttribute('meta[name="twitter:card"]', ["name", "twitter:card"], "summary_large_image");
    setMetaAttribute('meta[name="twitter:title"]', ["name", "twitter:title"], seo.title);
    setMetaAttribute('meta[name="twitter:description"]', ["name", "twitter:description"], seo.description);
    setMetaAttribute('meta[name="twitter:image"]', ["name", "twitter:image"], seo.image);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", seo.canonical);
  }, [pathname]);

  return null;
}
