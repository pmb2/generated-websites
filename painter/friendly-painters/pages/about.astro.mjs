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
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metaTitle(site, { suffix: "About Us" }), "description": `About ${site.businessName} \u2014 ${niche.toLowerCase()} serving ${site.city}, ${site.region} for ${site.yearsInBusiness}+ years. ${site.jobsCompleted.toLocaleString()}+ jobs completed, ${site.rating}\u2605 rated.`, "canonicalPath": "/about/", "template": tpl, "breadcrumbs": [{ name: "Home", path: "/" }, { name: "About", path: "/about/" }] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shell", $$Shell, { "site": site, "active": "about" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section${addAttribute(`${tk.surface} border-b ${tk.border} py-16 md:py-20`, "class")}> <div class="max-w-6xl mx-auto px-6"> <h1${addAttribute(`${tk.headingFont} font-bold text-4xl md:text-6xl tracking-tight mb-5`, "class")}>
About ${site.businessName} </h1> <p id="site-summary"${addAttribute(`${tk.muted} text-lg md:text-xl leading-relaxed max-w-3xl`, "class")}> ${site.description} </p> </div> </section> <section class="py-16"> <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start"> <div class="space-y-6"> <h2${addAttribute(`${tk.headingFont} font-bold text-3xl`, "class")}>Local, licensed, and accountable</h2> <p class="leading-relaxed text-lg"> ${site.businessName} has served ${site.city}, ${site.region} and the surrounding communities for over ${site.yearsInBusiness} years. We're a local ${niche.toLowerCase()} company — when you call, you reach people who know this area and stake their reputation on every job.
</p> <p class="leading-relaxed text-lg">
Our team handles everything from ${site.services[0]?.title.toLowerCase()} to ${site.services[site.services.length - 1]?.title.toLowerCase()}, with upfront written estimates, licensed and insured technicians, and a 100% satisfaction guarantee.
</p> <div class="flex flex-wrap gap-4 pt-4"> <a${addAttribute(`tel:${site.phone.replace(/[^0-9+]/g, "")}`, "href")}${addAttribute(`${tk.accent} ${tk.onAccent} ${tk.buttonRadius} ${tk.accentHover} px-8 py-4 font-bold text-lg transition-colors`, "class")}>
Call ${site.phone} </a> <a href="/#contact"${addAttribute(`border-2 ${tk.border} ${tk.buttonRadius} px-8 py-4 font-bold text-lg`, "class")}>
Free estimate
</a> </div> </div> <div class="grid grid-cols-2 gap-5"> ${[
    { n: site.yearsInBusiness + "+", l: "Years in business" },
    { n: site.jobsCompleted.toLocaleString() + "+", l: "Jobs completed" },
    { n: site.rating + "\u2605", l: `${site.reviewCount} reviews` },
    { n: String(year - site.yearsInBusiness), l: "Serving since" }
  ].map((s) => renderTemplate`<div${addAttribute(`${tk.surface} ${tk.cardRadius} border ${tk.border} p-8 text-center`, "class")}> <div${addAttribute(`${tk.headingFont} font-bold text-4xl`, "class")}>${s.n}</div> <div${addAttribute(`${tk.muted} text-sm mt-2 font-medium`, "class")}>${s.l}</div> </div>`)} </div> </div> </section> <section${addAttribute(`${tk.darkBg} ${tk.darkText} py-16`, "class")}> <div class="max-w-6xl mx-auto px-6"> <h2${addAttribute(`${tk.headingFont} text-white font-bold text-3xl mb-10 text-center`, "class")}>What we stand for</h2> <div class="grid md:grid-cols-3 gap-8"> ${[
    ["Honest pricing", "Written estimates before work begins. The price we quote is the price you pay."],
    ["Real craftsmanship", `${site.yearsInBusiness}+ years of trade experience on every single job.`],
    ["Local accountability", `We live and work in ${site.city}. Our name is on every job we do.`]
  ].map(([t, d]) => renderTemplate`<div class="text-center"> <h3${addAttribute(`${tk.headingFont} text-white font-bold text-xl mb-3`, "class")}>${t}</h3> <p class="leading-relaxed">${d}</p> </div>`)} </div> </div> </section> ` })} ` })}`;
}, "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/friendly-painters/src/pages/about/index.astro", void 0);

const $$file = "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/friendly-painters/src/pages/about/index.astro";
const $$url = "/about/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
