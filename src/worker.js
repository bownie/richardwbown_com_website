// Worker entry point.
//
// This exists for exactly one reason: redirect www to the apex with a real 301
// without needing a Cloudflare Redirect Rule (and therefore without needing
// zone ruleset permissions). Everything else is handed straight to the static
// assets, which still applies _redirects and _headers to those responses.
const APEX = "richardwbown.com";
const WWW = `www.${APEX}`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // The Host header rather than url.hostname: wrangler dev serves the worker
    // on localhost, where the URL host says nothing about the requested site.
    const host = (request.headers.get("host") ?? url.hostname)
      .split(":")[0]
      .toLowerCase();

    if (host === WWW) {
      // Path and query are preserved so a deep link keeps working; the host is
      // the only thing that changes.
      const target = `https://${APEX}${url.pathname}${url.search}`;
      return new Response(null, {
        status: 301,
        headers: {
          location: target,
          // The redirect is independent of the asset being requested, so it
          // must not be cached for longer than the target stays valid.
          "cache-control": "public, max-age=3600",
          "x-content-type-options": "nosniff"
        }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
