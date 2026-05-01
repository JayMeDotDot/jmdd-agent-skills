# Backend Security Checks

## Injection

- [ ] Database queries use parameterized statements or ORM — no string concatenation
- [ ] Shell/OS commands avoid user input; if unavoidable, input is strictly validated and escaped
- [ ] Template rendering uses auto-escaping and is not bypassed
- [ ] LDAP queries use parameterized filters
- [ ] NoSQL queries do not accept raw objects from user input

## Authentication

- [ ] Passwords hashed with bcrypt, scrypt, or argon2 — not MD5/SHA1/SHA256 alone
- [ ] Login endpoints have brute-force protection (rate limit, lockout, or CAPTCHA)
- [ ] Password reset tokens are single-use, time-limited, and unpredictable
- [ ] MFA implementation has no bypass paths
- [ ] Default credentials are not present

## Session Management

- [ ] Session IDs are cryptographically random and sufficiently long
- [ ] Sessions expire after reasonable inactivity
- [ ] Session invalidated on logout and password change
- [ ] Session tokens use `Secure`, `HttpOnly`, and `SameSite` cookie flags
- [ ] Session fixation prevented (new session ID issued after login)

## Authorization & Access Control

- [ ] Every protected action has a server-side authorization check
- [ ] Object-level access control enforced — no IDOR
- [ ] Function-level access control enforced — admin actions restricted
- [ ] No privilege escalation paths (horizontal or vertical)
- [ ] Deny by default — access requires explicit grant

## Cryptography

- [ ] Sensitive data encrypted at rest and in transit
- [ ] TLS 1.2+ enforced for all external communication
- [ ] Encryption keys managed securely, not hardcoded
- [ ] Cryptographic algorithms are current (no DES, RC4, or MD5 for security purposes)
- [ ] Random values use CSPRNG, not `Math.random()` or equivalent

## File Operations & Uploads

- [ ] File paths validated against traversal (`../`)
- [ ] Uploaded file types validated server-side by content, not just extension
- [ ] Uploaded files stored outside web root
- [ ] Uploaded file names sanitized
- [ ] Execution permissions removed from upload directories
- [ ] Temporary files created securely and cleaned up

## Unsafe Deserialization

- [ ] No deserialization of untrusted data with native serializers (`pickle`, Java `ObjectInputStream`, PHP `unserialize`, etc.)
- [ ] If deserialization is needed, use safe formats (JSON) with schema validation

## Server-Side Request Forgery (SSRF)

- [ ] User-supplied URLs validated against an allowlist
- [ ] Internal/private IP ranges blocked for outbound requests
- [ ] Cloud metadata endpoints (`169.254.169.254`) not reachable from user input
- [ ] Redirects from user-supplied URLs not followed blindly

## Business Logic

- [ ] State-changing operations protected against race conditions (TOCTOU)
- [ ] Idempotency keys or nonces prevent replay attacks where applicable
- [ ] Multi-step workflows cannot be bypassed by skipping steps
- [ ] Client-submitted values (price, quantity, role) validated and re-derived server-side
- [ ] Rate limits applied to abuse-prone operations (password reset, email send, OTP generation)
