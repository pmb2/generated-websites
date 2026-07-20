import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot, a as renderTemplate } from './astro/server_C-3XYY4L.mjs';
import 'piccolore';
import 'clsx';
import { t as templateForNiche, n as nicheLabel } from './seo_DDXMRnaE.mjs';

const TOKENS = {
  meridian: {
    bg: "bg-[#0A1628]",
    text: "text-white",
    accent: "bg-[#FF6B35]",
    accentHover: "hover:bg-[#ff8556]",
    onAccent: "text-[#0A1628]",
    surface: "bg-[#12233D]",
    muted: "text-[#8CA3C3]",
    headingFont: "font-['Archivo']",
    bodyFont: "font-[Inter]",
    border: "border-white/10",
    buttonRadius: "rounded-none",
    cardRadius: "rounded-none",
    darkBg: "bg-[#060D18]",
    darkText: "text-[#8CA3C3]"
  },
  verdant: {
    bg: "bg-[#FAF7F0]",
    text: "text-[#1A2E1A]",
    accent: "bg-[#2D5A3D]",
    accentHover: "hover:bg-[#234731]",
    onAccent: "text-white",
    surface: "bg-white",
    muted: "text-[#6B7F6D]",
    headingFont: "font-['Fraunces']",
    bodyFont: "font-[Inter]",
    border: "border-[#1A2E1A]/10",
    buttonRadius: "rounded-full",
    cardRadius: "rounded-[28px]",
    darkBg: "bg-[#1A2E1A]",
    darkText: "text-[#9DB5A1]"
  },
  volt: {
    bg: "bg-[#0D0F12]",
    text: "text-[#E8EAED]",
    accent: "bg-[#F5D90A]",
    accentHover: "hover:bg-[#ffe94a]",
    onAccent: "text-[#0D0F12]",
    surface: "bg-[#12151A]",
    muted: "text-[#9BA3AF]",
    headingFont: "font-['Space_Grotesk']",
    bodyFont: "font-['Space_Grotesk']",
    border: "border-white/10",
    buttonRadius: "rounded-none",
    cardRadius: "rounded-none",
    darkBg: "bg-[#08090B]",
    darkText: "text-[#5A6472]"
  },
  summit: {
    bg: "bg-[#1C2128]",
    text: "text-white",
    accent: "bg-[#F59E0B]",
    accentHover: "hover:bg-[#FBBF24]",
    onAccent: "text-[#1C2128]",
    surface: "bg-[#252D38]",
    muted: "text-[#8A94A2]",
    headingFont: "font-['Barlow_Condensed']",
    bodyFont: "font-['Barlow']",
    border: "border-white/10",
    buttonRadius: "rounded-none",
    cardRadius: "rounded-none",
    darkBg: "bg-[#12161B]",
    darkText: "text-[#8A94A2]"
  },
  pure: {
    bg: "bg-white",
    text: "text-[#0F2E33]",
    accent: "bg-[#0D9488]",
    accentHover: "hover:bg-[#0F766E]",
    onAccent: "text-white",
    surface: "bg-[#FAFEFE]",
    muted: "text-[#4A6B70]",
    headingFont: "font-['Plus_Jakarta_Sans']",
    bodyFont: "font-['Plus_Jakarta_Sans']",
    border: "border-[#0F2E33]/8",
    buttonRadius: "rounded-full",
    cardRadius: "rounded-3xl",
    darkBg: "bg-[#0F2E33]",
    darkText: "text-[#7A9BA0]"
  },
  heritage: {
    bg: "bg-[#FBF6EE]",
    text: "text-[#2E2118]",
    accent: "bg-[#B4552D]",
    accentHover: "hover:bg-[#9A4625]",
    onAccent: "text-white",
    surface: "bg-[#F4EBDC]",
    muted: "text-[#8A7561]",
    headingFont: "font-['Libre_Baskerville']",
    bodyFont: "font-['Source_Sans_3']",
    border: "border-[#2E2118]/10",
    buttonRadius: "rounded-none",
    cardRadius: "rounded-none",
    darkBg: "bg-[#2E2118]",
    darkText: "text-[#A68B73]"
  }
};
function tokensFor(t) {
  return TOKENS[t] || TOKENS.summit;
}

const $$Astro = createAstro("https://example.com");
const $$Shell = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Shell;
  const { site, active = "" } = Astro2.props;
  const tpl = site.template || templateForNiche(site.niche);
  const tk = tokensFor(tpl);
  const niche = nicheLabel(site.niche);
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${tk.bg} ${tk.text} ${tk.bodyFont} min-h-screen flex flex-col`, "class")}> <header${addAttribute(`border-b ${tk.border}`, "class")}> <div class="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between"> <a href="/" class="flex items-center gap-3"> <div${addAttribute(`w-10 h-10 ${tk.accent} ${tk.onAccent} ${tk.buttonRadius} flex items-center justify-center ${tk.headingFont} font-bold text-lg`, "class")}> ${site.businessName.charAt(0)} </div> <div> <div${addAttribute(`${tk.headingFont} font-bold text-lg leading-tight`, "class")}>${site.businessName}</div> <div${addAttribute(`${tk.muted} text-xs uppercase tracking-[0.2em]`, "class")}>${niche} · ${site.city}</div> </div> </a> <nav class="hidden md:flex items-center gap-7 text-sm font-medium"> <a href="/services/"${addAttribute(`${active === "services" ? "opacity-100 font-bold" : "opacity-70 hover:opacity-100"} transition-opacity`, "class")}>Services</a> <a href="/about/"${addAttribute(`${active === "about" ? "opacity-100 font-bold" : "opacity-70 hover:opacity-100"} transition-opacity`, "class")}>About</a> <a href="/reviews/"${addAttribute(`${active === "reviews" ? "opacity-100 font-bold" : "opacity-70 hover:opacity-100"} transition-opacity`, "class")}>Reviews</a> <a${addAttribute(`tel:${site.phone.replace(/[^0-9+]/g, "")}`, "href")}${addAttribute(`${tk.accent} ${tk.onAccent} ${tk.buttonRadius} ${tk.accentHover} px-5 py-2.5 font-bold transition-colors`, "class")}> ${site.phone} </a> </nav> </div> </header> <main class="flex-1"> ${renderSlot($$result, $$slots["default"])} </main> <footer${addAttribute(`${tk.darkBg} ${tk.darkText} py-12 mt-auto`, "class")}> <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10"> <div> <div${addAttribute(`${tk.headingFont} font-bold text-white text-lg mb-3`, "class")}>${site.businessName}</div> <p class="text-sm leading-relaxed">${site.tagline}</p> </div> <div> <div class="text-white font-semibold text-sm mb-4">Services</div> <ul class="space-y-2 text-sm"> ${site.services.slice(0, 5).map((s) => renderTemplate`<li><a class="hover:text-white"${addAttribute(`/services/${s.slug}/`, "href")}>${s.title}</a></li>`)} </ul> </div> <div> <div class="text-white font-semibold text-sm mb-4">Company</div> <ul class="space-y-2 text-sm"> <li><a class="hover:text-white" href="/about/">About</a></li> <li><a class="hover:text-white" href="/reviews/">Reviews</a></li> <li><a class="hover:text-white" href="/services/">Services</a></li> </ul> </div> <div> <div class="text-white font-semibold text-sm mb-4">Contact</div> <address class="not-italic text-sm space-y-2" id="site-contact"> <div>${site.address}<br>${site.city}, ${site.region}</div> <div>${site.phone}</div> <div>${site.email}</div> </address> </div> </div> <div class="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-xs flex justify-between"> <span>© ${year} ${site.businessName}</span> <span>${niche} · ${site.city}, ${site.region}</span> </div> </footer> </div>`;
}, "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/a-a-sewer-drain/src/templates/Shell.astro", void 0);

export { $$Shell as $, tokensFor as t };
