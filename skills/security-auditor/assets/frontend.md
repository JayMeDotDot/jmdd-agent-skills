# Frontend Security Checks

## Cross-Site Scripting (XSS)

- [ ] User input is output-encoded in HTML, attributes, JavaScript, and URLs
- [ ] Framework auto-escaping is enabled and not bypassed (`dangerouslySetInnerHTML`, `v-html`, `{!! !!}`)
- [ ] DOM manipulation does not use `innerHTML`, `document.write`, or `eval` with user data
- [ ] URL parameters reflected in page content are sanitized
- [ ] Rich text editors use sanitization libraries (DOMPurify or equivalent)

## Content Security Policy (CSP)

- [ ] CSP header is set and restricts script sources
- [ ] `unsafe-inline` and `unsafe-eval` are avoided or minimized
- [ ] `script-src` does not use overly broad wildcards
- [ ] CSP report-uri or report-to is configured for violation monitoring

## Sensitive Data Exposure

- [ ] Tokens, passwords, or PII are not stored in `localStorage` or `sessionStorage`
- [ ] Sensitive data is not included in URL parameters
- [ ] Autocomplete disabled on sensitive form fields where appropriate
- [ ] Source maps are not deployed to production

## Cross-Origin Security

- [ ] `postMessage` handlers validate `event.origin`
- [ ] Links to external sites use `rel="noopener noreferrer"`
- [ ] CORS preflight responses are checked client-side where relevant
- [ ] Iframes from untrusted sources are sandboxed

## Clickjacking

- [ ] `X-Frame-Options` or CSP `frame-ancestors` is set
- [ ] Sensitive actions require re-authentication or confirmation

## Open Redirects

- [ ] Redirect targets validated against an allowlist
- [ ] User-supplied redirect URLs are not blindly followed

## Third-Party Scripts

- [ ] Third-party scripts use Subresource Integrity (SRI) hashes
- [ ] Third-party scripts are loaded from trusted CDNs
- [ ] Analytics and tracking scripts do not capture sensitive data
