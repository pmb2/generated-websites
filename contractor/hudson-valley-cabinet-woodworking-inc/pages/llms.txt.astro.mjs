import { l as llmsTxt, s as site } from '../chunks/seo_2dtdoyUt.mjs';
export { renderers } from '../renderers.mjs';

const GET = () => {
  return new Response(llmsTxt(site), {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
