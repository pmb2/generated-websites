import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C-3XYY4L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B3KRdYYe.mjs';
import { $ as $$Shell, t as tokensFor } from '../chunks/Shell_DUYB8_KH.mjs';
import { s as site, t as templateForNiche, n as nicheLabel, m as metaTitle } from '../chunks/seo_qa4aFnw6.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const tpl = site.template || templateForNiche(site.niche);
  const tk = tokensFor(tpl);
  const niche = nicheLabel(site.niche);
  const stars = (n) => "\u2605".repeat(Math.round(n)) + "\u2606".repeat(5 - Math.round(n));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metaTitle(site, { suffix: "Reviews" }), "description": `${site.businessName} reviews \u2014 ${site.rating}\u2605 average from ${site.reviewCount} customers in ${site.city}, ${site.region}. Read what neighbors say about our ${niche.toLowerCase()} work.`, "canonicalPath": "/reviews/", "template": tpl, "breadcrumbs": [{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews/" }] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shell", $$Shell, { "site": site, "active": "reviews" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section${addAttribute(`${tk.surface} border-b ${tk.border} py-16 md:py-20`, "class")}> <div class="max-w-6xl mx-auto px-6 text-center"> <div class="text-[#F59E0B] text-3xl mb-4">${stars(site.rating)}</div> <h1${addAttribute(`${tk.headingFont} font-bold text-4xl md:text-6xl tracking-tight mb-5`, "class")}> ${site.rating} out of 5
</h1> <p${addAttribute(`${tk.muted} text-lg md:text-xl max-w-2xl mx-auto`, "class")}>
from ${site.reviewCount} verified customers across ${site.city}, ${site.region} </p> </div> </section> <section class="py-16"> <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${site.reviews.map((r) => renderTemplate`<figure${addAttribute(`${tk.surface} ${tk.cardRadius} border ${tk.border} p-8`, "class")}> <div class="text-[#F59E0B] mb-4">${stars(r.rating)}</div> <blockquote class="leading-relaxed mb-6">"${r.text}"</blockquote> <figcaption class="font-bold">${r.name}</figcaption> <div${addAttribute(`${tk.muted} text-sm`, "class")}>${r.date}</div> </figure>`)} </div> </section> <section${addAttribute(`${tk.darkBg} ${tk.darkText} py-16`, "class")}> <div class="max-w-6xl mx-auto px-6 text-center"> <h2${addAttribute(`${tk.headingFont} text-white font-bold text-3xl md:text-4xl mb-4`, "class")}>Ready to be our next 5-star review?</h2> <p class="mb-8 max-w-xl mx-auto">Join ${site.jobsCompleted.toLocaleString()}+ satisfied customers in ${site.city}.</p> <a${addAttribute(`tel:${site.phone.replace(/[^0-9+]/g, "")}`, "href")}${addAttribute(`inline-block ${tk.accent} ${tk.onAccent} ${tk.buttonRadius} ${tk.accentHover} px-10 py-4 font-bold text-lg transition-colors`, "class")}>
Call ${site.phone} </a> </div> </section> ` })} ` })}`;
}, "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/friendly-painters/src/pages/reviews/index.astro", void 0);

const $$file = "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/friendly-painters/src/pages/reviews/index.astro";
const $$url = "/reviews/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
