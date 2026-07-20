import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_C-3XYY4L.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/","cacheDir":"file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/node_modules/.astro/","outDir":"file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/dist/","srcDir":"file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/src/","publicDir":"file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/public/","buildClientDir":"file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/dist/client/","buildServerDir":"file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/dist/server/","adapterName":"","routes":[{"file":"file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/dist/about/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CIgAkj5A.css"}],"routeData":{"route":"/about","isIndex":true,"type":"page","pattern":"^\\/about\\/$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/dist/llms.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/llms.txt","isIndex":false,"type":"endpoint","pattern":"^\\/llms\\.txt\\/?$","segments":[[{"content":"llms.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/llms.txt.ts","pathname":"/llms.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/dist/reviews/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CIgAkj5A.css"}],"routeData":{"route":"/reviews","isIndex":true,"type":"page","pattern":"^\\/reviews\\/$","segments":[[{"content":"reviews","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/reviews/index.astro","pathname":"/reviews","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/dist/services/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CIgAkj5A.css"}],"routeData":{"route":"/services","isIndex":true,"type":"page","pattern":"^\\/services\\/$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/dist/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CIgAkj5A.css"},{"type":"inline","content":".meridian[data-astro-cid-vw5c2wcd]{--font-heading: \"Archivo\", sans-serif}.meridian[data-astro-cid-vw5c2wcd] h1[data-astro-cid-vw5c2wcd],.meridian[data-astro-cid-vw5c2wcd] h2[data-astro-cid-vw5c2wcd],.meridian[data-astro-cid-vw5c2wcd] h3[data-astro-cid-vw5c2wcd]{font-family:Archivo,sans-serif}.verdant[data-astro-cid-q2dz3xrk]{font-family:Inter,sans-serif}.verdant[data-astro-cid-q2dz3xrk] h1[data-astro-cid-q2dz3xrk],.verdant[data-astro-cid-q2dz3xrk] h2[data-astro-cid-q2dz3xrk],.verdant[data-astro-cid-q2dz3xrk] h3[data-astro-cid-q2dz3xrk]{font-family:Fraunces,serif}.volt[data-astro-cid-xk2zvr4p] h1[data-astro-cid-xk2zvr4p],.volt[data-astro-cid-xk2zvr4p] h2[data-astro-cid-xk2zvr4p],.volt[data-astro-cid-xk2zvr4p] h3[data-astro-cid-xk2zvr4p]{font-family:Space Grotesk,sans-serif}.summit[data-astro-cid-pjpgkrre] h1[data-astro-cid-pjpgkrre],.summit[data-astro-cid-pjpgkrre] h2[data-astro-cid-pjpgkrre],.summit[data-astro-cid-pjpgkrre] h3[data-astro-cid-pjpgkrre]{font-family:Barlow Condensed,sans-serif}.clip-badge[data-astro-cid-pjpgkrre]{clip-path:polygon(0 0,100% 0,100% 75%,75% 100%,0 100%)}.pure[data-astro-cid-ufvcttnh] h1[data-astro-cid-ufvcttnh],.pure[data-astro-cid-ufvcttnh] h2[data-astro-cid-ufvcttnh],.pure[data-astro-cid-ufvcttnh] h3[data-astro-cid-ufvcttnh]{font-family:Plus Jakarta Sans,sans-serif}.heritage[data-astro-cid-2y3totxc] h1[data-astro-cid-2y3totxc],.heritage[data-astro-cid-2y3totxc] h2[data-astro-cid-2y3totxc],.heritage[data-astro-cid-2y3totxc] h3[data-astro-cid-2y3totxc]{font-family:Libre Baskerville,serif}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}}],"site":"https://example.com","base":"/","trailingSlash":"always","compressHTML":true,"componentMetadata":[["E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/src/pages/about/index.astro",{"propagation":"none","containsHead":true}],["E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/src/pages/index.astro",{"propagation":"none","containsHead":true}],["E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/src/pages/reviews/index.astro",{"propagation":"none","containsHead":true}],["E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/src/pages/services/[...slug].astro",{"propagation":"none","containsHead":true}],["E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/src/pages/services/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/about/index@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/llms.txt@_@ts":"pages/llms.txt.astro.mjs","\u0000@astro-page:src/pages/reviews/index@_@astro":"pages/reviews.astro.mjs","\u0000@astro-page:src/pages/services/[...slug]@_@astro":"pages/services/_---slug_.astro.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"pages/services.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astrojs-manifest":"manifest_DbdLza1C.mjs","E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/src/components/widgets/AIAgent.astro?astro&type=script&index=0&lang.ts":"_astro/AIAgent.astro_astro_type_script_index_0_lang.D78G3oJp.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/dist/about/index.html","/file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/dist/llms.txt","/file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/dist/reviews/index.html","/file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/dist/services/index.html","/file:///E:/BackusData/Documents/github/website-landlord/astro-sites/generated/quest-plumbing-heating/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"89eJF5nTT2CuG+W+Ra+wo1zPGUUgDlrjYoYzN6Iaffk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
