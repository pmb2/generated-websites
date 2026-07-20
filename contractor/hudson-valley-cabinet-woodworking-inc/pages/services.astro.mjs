import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C-3XYY4L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DwY8VkV0.mjs';
import { $ as $$Shell, t as tokensFor } from '../chunks/Shell_CIncMGMu.mjs';
import { s as site, t as templateForNiche, n as nicheLabel, m as metaTitle } from '../chunks/seo_BPZX70DK.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const tpl = site.template || templateForNiche(site.niche);
  const tk = tokensFor(tpl);
  const niche = nicheLabel(site.niche);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metaTitle(site, { suffix: "Services" }), "description": `All ${niche.toLowerCase()} services by ${site.businessName} in ${site.city}, ${site.region}: ${site.services.map((s) => s.title).join(", ")}. Free estimates \u2014 ${site.phone}.`, "canonicalPath": "/services/", "template": tpl, "breadcrumbs": [{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shell", $$Shell, { "site": site, "active": "services" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section${addAttribute(`${tk.surface} border-b ${tk.border} py-16 md:py-20`, "class")}> <div class="max-w-6xl mx-auto px-6"> <h1${addAttribute(`${tk.headingFont} font-bold text-4xl md:text-6xl tracking-tight mb-5`, "class")}> ${niche} services in ${site.city} </h1> <p${addAttribute(`${tk.muted} text-lg md:text-xl leading-relaxed max-w-3xl`, "class")}> ${site.services.length} professional services, one trusted local team. Free estimates, upfront pricing, satisfaction guaranteed.
</p> </div> </section> <section class="py-16"> <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${site.services.map((s) => renderTemplate`<a${addAttribute(`/services/${s.slug}/`, "href")}${addAttribute(`group ${tk.surface} ${tk.cardRadius} border ${tk.border} p-8 hover:shadow-lg transition-shadow`, "class")}> <h2${addAttribute(`${tk.headingFont} font-bold text-2xl mb-3 group-hover:underline`, "class")}>${s.title}</h2> <p${addAttribute(`${tk.muted} leading-relaxed mb-5`, "class")}>${s.description}</p> <span class="font-semibold text-sm">Learn more →</span> </a>`)} </div> </section> <section${addAttribute(`${tk.darkBg} ${tk.darkText} py-16`, "class")}> <div class="max-w-6xl mx-auto px-6 text-center"> <h2${addAttribute(`${tk.headingFont} text-white font-bold text-3xl md:text-4xl mb-4`, "class")}>Not sure what you need?</h2> <p class="mb-8 max-w-xl mx-auto">Call and describe the problem — we'll tell you honestly what it takes and what it costs.</p> <a${addAttribute(`tel:${site.phone.replace(/[^0-9+]/g, "")}`, "href")}${addAttribute(`inline-block ${tk.accent} ${tk.onAccent} ${tk.buttonRadius} ${tk.accentHover} px-10 py-4 font-bold text-lg transition-colors`, "class")}>
Call ${site.phone} </a> </div> </section> ` })} ` })}`;
}, "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/_reference_site/src/pages/services/index.astro", void 0);

const $$file = "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/_reference_site/src/pages/services/index.astro";
const $$url = "/services/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
