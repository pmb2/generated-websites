import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_C-3XYY4L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DafEA8Qt.mjs';
import { $ as $$Shell, t as tokensFor } from '../../chunks/Shell_D6K0MHSm.mjs';
import { s as site, t as templateForNiche, n as nicheLabel } from '../../chunks/seo_Dwb-ccFg.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
function getStaticPaths() {
  return site.services.map((s) => ({ params: { slug: s.slug } }));
}
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const svc = site.services.find((s) => s.slug === slug);
  const tpl = site.template || templateForNiche(site.niche);
  const tk = tokensFor(tpl);
  const niche = nicheLabel(site.niche);
  const otherServices = site.services.filter((s) => s.slug !== slug).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "serviceSlug": slug, "canonicalPath": `/services/${slug}/`, "template": tpl, "breadcrumbs": [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: svc.title, path: `/services/${slug}/` }
  ] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shell", $$Shell, { "site": site, "active": "services" }, { "default": ($$result3) => renderTemplate`  ${maybeRenderHead()}<section${addAttribute(`${tk.surface} border-b ${tk.border} py-16 md:py-20`, "class")}> <div class="max-w-6xl mx-auto px-6"> <nav${addAttribute(`${tk.muted} text-sm mb-6`, "class")} aria-label="Breadcrumb"> <a href="/" class="hover:underline">Home</a> / <a href="/services/" class="hover:underline">Services</a> / <span>${svc.title}</span> </nav> <h1${addAttribute(`${tk.headingFont} font-bold text-4xl md:text-6xl tracking-tight mb-5`, "class")}> ${svc.title} in ${site.city}, ${site.region} </h1> <p${addAttribute(`${tk.muted} text-lg md:text-xl leading-relaxed max-w-3xl`, "class")}> ${svc.description} — by ${site.businessName}, ${site.rating}★-rated ${niche.toLowerCase()} serving ${site.city} and surrounding ${site.region} communities.
</p> <div class="flex flex-wrap gap-4 mt-8"> <a${addAttribute(`tel:${site.phone.replace(/[^0-9+]/g, "")}`, "href")}${addAttribute(`${tk.accent} ${tk.onAccent} ${tk.buttonRadius} ${tk.accentHover} px-8 py-4 font-bold text-lg transition-colors`, "class")}>
Call ${site.phone} </a> <a href="/#contact"${addAttribute(`border-2 ${tk.border} ${tk.buttonRadius} px-8 py-4 font-bold text-lg`, "class")}>
Free estimate
</a> </div> </div> </section>  <section class="py-16"> <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12"> <div class="lg:col-span-2 space-y-10"> <div> <h2${addAttribute(`${tk.headingFont} font-bold text-3xl mb-4`, "class")}>What is ${svc.title.toLowerCase()}?</h2> <p class="leading-relaxed text-lg"> ${svc.description} ${site.businessName} provides professional ${svc.title.toLowerCase()} throughout ${site.city}, ${site.region}, backed by ${site.yearsInBusiness}+ years of experience and ${site.jobsCompleted.toLocaleString()}+ completed jobs.
</p> </div> <div> <h2${addAttribute(`${tk.headingFont} font-bold text-3xl mb-4`, "class")}>Why choose ${site.businessName}?</h2> <ul class="space-y-3"> ${[
    `Licensed and insured ${niche.toLowerCase()} professionals`,
    `Upfront written estimates \u2014 no hidden fees`,
    `Same-day and emergency service in ${site.city}`,
    `${site.rating}-star average from ${site.reviewCount} verified reviews`,
    `100% satisfaction guarantee on every job`
  ].map((item) => renderTemplate`<li class="flex items-start gap-3"> <span${addAttribute(`${tk.accent} ${tk.onAccent} w-6 h-6 ${tk.buttonRadius} flex items-center justify-center text-sm font-bold mt-0.5 shrink-0`, "class")}>✓</span> <span class="leading-relaxed">${item}</span> </li>`)} </ul> </div> <div${addAttribute(`${tk.surface} ${tk.cardRadius} border ${tk.border} p-8`, "class")}> <h2${addAttribute(`${tk.headingFont} font-bold text-2xl mb-4`, "class")}>How much does ${svc.title.toLowerCase()} cost in ${site.city}?</h2> <p${addAttribute(`${tk.muted} leading-relaxed`, "class")}>
Every job is different, so we provide free, no-obligation estimates with upfront flat pricing before any work begins. Call <a${addAttribute(`tel:${site.phone.replace(/[^0-9+]/g, "")}`, "href")} class="underline font-semibold">${site.phone}</a> or request an estimate online — most quotes are delivered the same day.
</p> </div> </div> <!-- Sidebar --> <aside class="space-y-6"> <div${addAttribute(`${tk.darkBg} ${tk.darkText} ${tk.cardRadius} p-7`, "class")}> <div${addAttribute(`${tk.headingFont} text-white font-bold text-xl mb-4`, "class")}>Get a free estimate</div> <p class="text-sm mb-5">Fast response across ${site.city}, ${site.region}.</p> <a${addAttribute(`tel:${site.phone.replace(/[^0-9+]/g, "")}`, "href")}${addAttribute(`block text-center ${tk.accent} ${tk.onAccent} ${tk.buttonRadius} ${tk.accentHover} py-3.5 font-bold transition-colors`, "class")}> ${site.phone} </a> <a href="/#contact"${addAttribute(`block text-center border border-white/25 text-white ${tk.buttonRadius} py-3.5 font-bold mt-3`, "class")}>
Online request
</a> </div> <div${addAttribute(`${tk.surface} ${tk.cardRadius} border ${tk.border} p-7`, "class")}> <div${addAttribute(`${tk.headingFont} font-bold text-lg mb-4`, "class")}>Other services</div> <ul class="space-y-3"> ${otherServices.map((s) => renderTemplate`<li><a${addAttribute(`/services/${s.slug}/`, "href")}${addAttribute(`${tk.muted} hover:underline`, "class")}>→ ${s.title}</a></li>`)} <li><a href="/services/" class="font-semibold hover:underline">→ All services</a></li> </ul> </div> </aside> </div> </section> ` })} ` })}`;
}, "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quackenbush-haegele/src/pages/services/[...slug].astro", void 0);

const $$file = "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quackenbush-haegele/src/pages/services/[...slug].astro";
const $$url = "/services/[...slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
