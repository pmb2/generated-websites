import { c as createComponent, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, e as renderSlot, a as renderTemplate, d as createAstro, r as renderComponent, f as renderScript, u as unescapeHTML, g as renderHead } from './astro/server_C-3XYY4L.mjs';
import 'piccolore';
import { s as site, m as metaTitle, a as metaDescription, b as localBusinessSchema, w as websiteSchema, c as serviceSchema, f as faqPageSchema, d as breadcrumbSchema, r as reviewsSchema } from './seo_DDXMRnaE.mjs';
/* empty css                         */
import 'clsx';

function fonts(heading, body) {
  return {
    fontHeading: heading.replace(/ /g, "+"),
    fontBody: body.replace(/ /g, "+"),
    fontBodyClass: `font-[${heading}]`
  };
}
const themes = {
  plumber: {
    primary: "bg-navy-500",
    primaryHex: "#1E3A5F",
    secondary: "text-blue-500",
    neutral: "bg-navy-50",
    bgLight: "bg-white",
    iconClass: "text-navy-500",
    headerClass: "bg-navy-700 shadow-navy-900/20",
    logoMarkClass: "bg-white text-navy-700",
    ...fonts("Inter", "Inter"),
    heroKeyword: "professional plumber working",
    services: [
      { slug: "drain-cleaning", icon: "Droplets", title: "Drain Cleaning", desc: "Fast, effective drain cleaning service" },
      { slug: "pipe-repair", icon: "Wrench", title: "Pipe Repair", desc: "Expert pipe repair for residential and commercial" },
      { slug: "water-heater", icon: "Thermometer", title: "Water Heater", desc: "Installation, repair, and maintenance" },
      { slug: "sewer-line", icon: "Drill", title: "Sewer Line", desc: "Complete sewer line services" },
      { slug: "fixture-install", icon: "ShieldCheck", title: "Fixture Install", desc: "Professional fixture installation" },
      { slug: "emergency", icon: "Zap", title: "Emergency Service", desc: "24/7 emergency service when you need it most" }
    ]
  },
  landscaper: {
    primary: "bg-forest-500",
    primaryHex: "#166534",
    secondary: "text-green-500",
    neutral: "bg-forest-50",
    bgLight: "bg-white",
    iconClass: "text-forest-500",
    headerClass: "bg-forest-700 shadow-forest-900/20",
    logoMarkClass: "bg-white text-forest-700",
    ...fonts("Inter", "Inter"),
    heroKeyword: "professional landscaping garden",
    services: [
      { slug: "lawn-care", icon: "Sprout", title: "Lawn Care", desc: "Professional lawn maintenance and care" },
      { slug: "garden-design", icon: "Flower2", title: "Garden Design", desc: "Beautiful garden design and installation" },
      { slug: "tree-service", icon: "Trees", title: "Tree Service", desc: "Tree trimming, removal, and care" },
      { slug: "hardscaping", icon: "Shovel", title: "Hardscaping", desc: "Patios, walkways, and retaining walls" },
      { slug: "irrigation", icon: "Droplets", title: "Irrigation", desc: "Sprinkler and irrigation systems" },
      { slug: "seasonal", icon: "Sun", title: "Seasonal Cleanup", desc: "Spring and fall property cleanup" }
    ]
  },
  hvac: {
    primary: "bg-fire-500",
    primaryHex: "#991B1B",
    secondary: "text-orange-500",
    neutral: "bg-fire-50",
    bgLight: "bg-white",
    iconClass: "text-fire-500",
    headerClass: "bg-fire-700 shadow-fire-900/20",
    logoMarkClass: "bg-white text-fire-700",
    ...fonts("Inter", "Inter"),
    heroKeyword: "HVAC technician installing",
    services: [
      { slug: "ac-repair", icon: "Snowflake", title: "AC Repair", desc: "Air conditioning repair and maintenance" },
      { slug: "heating", icon: "Flame", title: "Heating Service", desc: "Furnace and heater repair and installation" },
      { slug: "thermostat", icon: "Thermometer", title: "Thermostat", desc: "Smart thermostat installation and setup" },
      { slug: "ductwork", icon: "Wind", title: "Ductwork", desc: "Duct cleaning, repair, and installation" },
      { slug: "air-quality", icon: "Fan", title: "Air Quality", desc: "Indoor air quality solutions" },
      { slug: "emergency", icon: "Zap", title: "Emergency", desc: "24/7 emergency HVAC service" }
    ]
  },
  roofer: {
    primary: "bg-amber-500",
    primaryHex: "#92400E",
    secondary: "text-yellow-500",
    neutral: "bg-amber-50",
    bgLight: "bg-white",
    iconClass: "text-amber-500",
    headerClass: "bg-amber-700 shadow-amber-900/20",
    logoMarkClass: "bg-white text-amber-700",
    ...fonts("Inter", "Inter"),
    heroKeyword: "roofing contractor working",
    services: [
      { slug: "roof-repair", icon: "Hammer", title: "Roof Repair", desc: "Expert roof repair and patching" },
      { slug: "roof-install", icon: "Building2", title: "Roof Installation", desc: "New roof installation and replacement" },
      { slug: "gutter", icon: "Droplets", title: "Gutters", desc: "Gutter installation and cleaning" },
      { slug: "inspection", icon: "Search", title: "Inspection", desc: "Thorough roof inspection and assessment" },
      { slug: "siding", icon: "PanelTop", title: "Siding", desc: "Siding repair and installation" },
      { slug: "emergency", icon: "Zap", title: "Emergency", desc: "Emergency roof tarp and repair" }
    ]
  },
  electrician: {
    primary: "bg-royal-500",
    primaryHex: "#1E3A8A",
    secondary: "text-blue-500",
    neutral: "bg-royal-50",
    bgLight: "bg-white",
    iconClass: "text-royal-500",
    headerClass: "bg-royal-700 shadow-royal-900/20",
    logoMarkClass: "bg-white text-royal-700",
    ...fonts("Inter", "Inter"),
    heroKeyword: "professional electrician working",
    services: [
      { slug: "wiring", icon: "Cable", title: "Wiring", desc: "Electrical wiring and rewiring" },
      { slug: "panel", icon: "Zap", title: "Panel Upgrade", desc: "Electrical panel upgrade and repair" },
      { slug: "lighting", icon: "Lightbulb", title: "Lighting", desc: "Interior and exterior lighting" },
      { slug: "outlets", icon: "Plug", title: "Outlets", desc: "Outlet installation and repair" },
      { slug: "inspection", icon: "Search", title: "Inspection", desc: "Electrical safety inspection" },
      { slug: "emergency", icon: "Zap", title: "Emergency", desc: "24/7 emergency electrical service" }
    ]
  },
  painter: {
    primary: "bg-teal-500",
    primaryHex: "#0F766E",
    secondary: "text-teal-500",
    neutral: "bg-teal-50",
    bgLight: "bg-white",
    iconClass: "text-teal-500",
    headerClass: "bg-teal-700 shadow-teal-900/20",
    logoMarkClass: "bg-white text-teal-700",
    ...fonts("Inter", "Inter"),
    heroKeyword: "professional painter painting room",
    services: [
      { slug: "interior", icon: "Paintbrush", title: "Interior Painting", desc: "Professional interior painting" },
      { slug: "exterior", icon: "PaintBucket", title: "Exterior Painting", desc: "Exterior house painting" },
      { slug: "cabinet", icon: "Brush", title: "Cabinet Painting", desc: "Cabinet refinishing and painting" },
      { slug: "drywall", icon: "SquareDot", title: "Drywall", desc: "Drywall repair and installation" },
      { slug: "wallpaper", icon: "Scroll", title: "Wallpaper", desc: "Wallpaper removal and installation" },
      { slug: "deck", icon: "PaintBucket", title: "Deck Staining", desc: "Deck and fence staining" }
    ]
  },
  "cleaning service": {
    primary: "bg-emerald-500",
    primaryHex: "#047857",
    secondary: "text-emerald-500",
    neutral: "bg-emerald-50",
    bgLight: "bg-white",
    iconClass: "text-emerald-500",
    headerClass: "bg-emerald-700 shadow-emerald-900/20",
    logoMarkClass: "bg-white text-emerald-700",
    ...fonts("Inter", "Inter"),
    heroKeyword: "professional cleaning service",
    services: [
      { slug: "home-cleaning", icon: "Sparkles", title: "Home Cleaning", desc: "Residential cleaning services" },
      { slug: "deep-clean", icon: "Brush", title: "Deep Cleaning", desc: "Thorough deep cleaning service" },
      { slug: "office", icon: "Building2", title: "Office Cleaning", desc: "Commercial office cleaning" },
      { slug: "move-cleaning", icon: "Truck", title: "Move In/Out", desc: "Move-in and move-out cleaning" },
      { slug: "carpet", icon: "Drill", title: "Carpet Cleaning", desc: "Professional carpet cleaning" },
      { slug: "window", icon: "Maximize2", title: "Window Cleaning", desc: "Interior and exterior window cleaning" }
    ]
  },
  contractor: {
    primary: "bg-slate-500",
    primaryHex: "#1E293B",
    secondary: "text-slate-500",
    neutral: "bg-slate-50",
    bgLight: "bg-white",
    iconClass: "text-slate-500",
    headerClass: "bg-slate-700 shadow-slate-900/20",
    logoMarkClass: "bg-white text-slate-700",
    ...fonts("Inter", "Inter"),
    heroKeyword: "construction contractor building",
    services: [
      { slug: "remodel", icon: "Hammer", title: "Remodeling", desc: "Home and kitchen remodeling" },
      { slug: "addition", icon: "Building2", title: "Additions", desc: "Home additions and extensions" },
      { slug: "basement", icon: "Building2", title: "Basement", desc: "Basement finishing and waterproofing" },
      { slug: "deck", icon: "Ruler", title: "Deck Building", desc: "Custom deck design and construction" },
      { slug: "foundation", icon: "HardHat", title: "Foundation", desc: "Foundation repair and pouring" },
      { slug: "general", icon: "Wrench", title: "General Contracting", desc: "Full-service general contracting" }
    ]
  }
};
function getTheme(niche) {
  const key = niche?.toLowerCase().trim() || "contractor";
  return themes[key] || themes.contractor;
}

const $$Astro$6 = createAstro("https://example.com");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/a-a-sewer-drain/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$5 = createAstro("https://example.com");
const $$MessageSquare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MessageSquare;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "message-square", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path> ` })}`;
}, "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/a-a-sewer-drain/node_modules/lucide-astro/dist/MessageSquare.astro", void 0);

const $$Astro$4 = createAstro("https://example.com");
const $$Mic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Mic;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "mic", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 19v3"></path> <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path> <rect x="9" y="2" width="6" height="13" rx="3"></rect> ` })}`;
}, "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/a-a-sewer-drain/node_modules/lucide-astro/dist/Mic.astro", void 0);

const $$Astro$3 = createAstro("https://example.com");
const $$Phone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "phone", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path> ` })}`;
}, "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/a-a-sewer-drain/node_modules/lucide-astro/dist/Phone.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$Send = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Send;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "send", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path> <path d="m21.854 2.147-10.94 10.939"></path> ` })}`;
}, "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/a-a-sewer-drain/node_modules/lucide-astro/dist/Send.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "x", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> ` })}`;
}, "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/a-a-sewer-drain/node_modules/lucide-astro/dist/X.astro", void 0);

const $$AIAgent = createComponent(async ($$result, $$props, $$slots) => {
  const theme = getTheme(site.niche);
  const agentId = "";
  const agentWebhook = "";
  const voiceEndpoint = "";
  const voiceProvider = "webhook";
  const sttProvider = "browser";
  return renderTemplate`${maybeRenderHead()}<div id="ai-agent"${addAttribute(agentId, "data-agent-id")}${addAttribute(agentWebhook, "data-agent-webhook")}${addAttribute(voiceEndpoint, "data-voice-endpoint")}${addAttribute(voiceProvider, "data-voice-provider")}${addAttribute(sttProvider, "data-stt-provider")}${addAttribute(site.businessName, "data-business")}${addAttribute(site.phone, "data-phone")}${addAttribute(JSON.stringify(site.services.map((s) => s.title)), "data-services")}${addAttribute(JSON.stringify(site.faq), "data-faq")}> <!-- Floating toggle --> <button id="ai-toggle"${addAttribute(`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 ${theme.primary} text-white`, "class")} aria-label="Open chat"> ${renderComponent($$result, "MessageSquare", $$MessageSquare, { "class": "w-6 h-6" })} </button> <!-- Chat panel --> <div id="ai-panel" class="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl border border-line overflow-hidden hidden flex-col"> <div${addAttribute(`p-4 ${theme.primary} text-white flex items-center justify-between`, "class")}> <div> <h4 class="font-bold text-sm">${site.businessName}</h4> <p class="text-xs text-white/80">Ask us anything or call now</p> </div> <div class="flex items-center gap-2"> <a${addAttribute(`tel:${site.phone.replace(/[^0-9]/g, "")}`, "href")} class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Call"> ${renderComponent($$result, "Phone", $$Phone, { "class": "w-4 h-4" })} </a> <button id="ai-close" class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Close chat"> ${renderComponent($$result, "X", $$X, { "class": "w-4 h-4" })} </button> </div> </div> <div id="ai-messages" class="flex-1 p-4 h-80 overflow-y-auto bg-surface-raised space-y-3"> <div class="flex gap-3"> <div${addAttribute(`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${theme.primary} text-white`, "class")}> ${renderComponent($$result, "MessageSquare", $$MessageSquare, { "class": "w-4 h-4" })} </div> <div class="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-line text-sm text-ink-soft max-w-[80%]">
Hi! I can answer questions about ${site.businessName}'s services, schedule requests, or connect you by phone. How can I help?
</div> </div> </div> <!-- Voice mode overlay --> <div id="ai-voice-overlay" class="hidden flex-col items-center justify-center p-6 bg-surface-raised border-t border-line"> <div id="ai-voice-ring"${addAttribute(`w-20 h-20 rounded-full ${theme.primary} text-white flex items-center justify-center mb-4 transition-transform`, "class")}> ${renderComponent($$result, "Mic", $$Mic, { "class": "w-8 h-8" })} </div> <p id="ai-voice-label" class="text-sm font-medium text-ink">Tap the microphone to start talking</p> <p id="ai-voice-sub" class="text-xs text-muted mt-1">Powered by your browser</p> <button id="ai-voice-stop" type="button" class="mt-4 px-4 py-2 rounded-full text-sm font-medium bg-white border border-line text-ink hover:bg-surface-raised transition-colors">End call</button> </div> <div class="p-3 bg-white border-t border-line"> <form id="ai-form" class="flex items-center gap-2"> <button type="button" id="ai-voice" class="p-2.5 rounded-full text-muted hover:text-brand-500 hover:bg-brand-50 transition-colors" aria-label="Voice input"> ${renderComponent($$result, "Mic", $$Mic, { "class": "w-5 h-5" })} </button> <input type="text" id="ai-input" class="flex-1 px-4 py-2.5 bg-surface-raised border border-line rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Type a message..." autocomplete="off"> <button type="submit"${addAttribute(`p-2.5 rounded-full text-white ${theme.primary} hover:opacity-90 transition-opacity`, "class")} aria-label="Send"> ${renderComponent($$result, "Send", $$Send, { "class": "w-5 h-5" })} </button> </form> <p id="ai-voice-status" class="text-xs text-muted text-center mt-2 hidden">Listening...</p> </div> </div> </div> ${renderScript($$result, "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/a-a-sewer-drain/src/components/widgets/AIAgent.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/a-a-sewer-drain/src/components/widgets/AIAgent.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, canonicalPath = "/", serviceSlug, breadcrumbs, template } = Astro2.props;
  const pageTitle = title || metaTitle(site, serviceSlug ? { service: site.services.find((s) => s.slug === serviceSlug)?.title } : void 0);
  const pageDesc = description || metaDescription(site, serviceSlug ? { service: site.services.find((s) => s.slug === serviceSlug)?.title } : void 0);
  const canonicalUrl = `${site.url}${canonicalPath}`.replace(/([^:])\/+/g, "$1/");
  const schemas = [
    localBusinessSchema(site),
    websiteSchema(site),
    serviceSlug ? serviceSchema(site, serviceSlug) : faqPageSchema(site),
    breadcrumbs?.length ? breadcrumbSchema(site, breadcrumbs) : null,
    reviewsSchema(site)
  ].filter(Boolean);
  const TEMPLATE_FONTS = {
    meridian: "Archivo:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600",
    verdant: "Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600",
    volt: "Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
    summit: "Barlow+Condensed:wght@500;600;700;800&family=Barlow:wght@400;500;600",
    pure: "Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Inter:wght@400;500",
    heritage: "Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;500;600"
  };
  const activeTemplate = template || site.template || "meridian";
  const fontQuery = TEMPLATE_FONTS[activeTemplate] || TEMPLATE_FONTS.meridian;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${pageTitle}</title><meta name="description"${addAttribute(pageDesc, "content")}><link rel="canonical"${addAttribute(canonicalUrl, "href")}><!-- Classic search + social --><meta property="og:title"${addAttribute(pageTitle, "content")}><meta property="og:description"${addAttribute(pageDesc, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:image"${addAttribute(`${site.url}/images/hero.jpg`, "content")}><meta property="og:site_name"${addAttribute(site.businessName, "content")}><meta property="og:locale" content="en_US"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(pageTitle, "content")}><meta name="twitter:description"${addAttribute(pageDesc, "content")}><!-- Local search signals --><meta name="geo.region"${addAttribute(`US-${site.region}`, "content")}><meta name="geo.placename"${addAttribute(site.city, "content")}><meta name="geo.position"${addAttribute(`${site.latitude};${site.longitude}`, "content")}><meta name="ICBM"${addAttribute(`${site.latitude}, ${site.longitude}`, "content")}><!-- AI crawler directives — explicitly allow answer engines to index + cite --><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1"><meta name="GPTBot" content="index, follow"><meta name="ClaudeBot" content="index, follow"><meta name="PerplexityBot" content="index, follow"><meta name="Google-Extended" content="index, follow"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link${addAttribute(`https://fonts.googleapis.com/css2?family=${fontQuery}&display=swap`, "href")} rel="stylesheet"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml">${schemas.map((s) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(s))))}${renderHead()}</head> <body class="antialiased"${addAttribute(activeTemplate, "data-template")}> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "AIAgent", $$AIAgent, {})} </body></html>`;
}, "E:/BackusData/Documents/github/website-landlord/astro-sites/generated/a-a-sewer-drain/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
