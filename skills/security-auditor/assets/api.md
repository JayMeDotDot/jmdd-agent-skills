# API Security Checks

## Authentication & Token Management

- [ ] All endpoints except explicitly public ones require authentication
- [ ] JWT signature is verified server-side
- [ ] JWT `alg` field is validated — no `none` or algorithm confusion
- [ ] Token expiry is reasonable (access tokens: minutes to hours, not days)
- [ ] Refresh token rotation is implemented
- [ ] Tokens are not exposed in URLs or server logs
- [ ] OAuth flows use PKCE for public clients
- [ ] API keys are scoped to minimum required permissions

## Authorization

- [ ] Object-level authorization enforced on every endpoint (BOLA prevention)
- [ ] Function-level authorization enforced (BFLA prevention)
- [ ] Admin endpoints are not accessible via standard user tokens
- [ ] Authorization checks happen server-side, not client-side

## Input & Output

- [ ] Request payloads validated with a schema (size, type, format)
- [ ] Mass assignment prevented — only expected fields accepted
- [ ] API responses do not over-expose data (no unnecessary sensitive fields)
- [ ] Error responses use generic messages, no internal details
- [ ] File upload size limits enforced

## Rate Limiting & Abuse Prevention

- [ ] Rate limits applied per user/IP on sensitive endpoints
- [ ] Bulk/batch endpoints have per-request item limits
- [ ] Account enumeration prevented (consistent responses for valid/invalid users)
- [ ] CAPTCHA or progressive delays on automated-abuse-prone endpoints

## GraphQL Specific

- [ ] Introspection disabled in production
- [ ] Query depth limit configured
- [ ] Query complexity/cost limit configured
- [ ] Batch query limit configured
- [ ] Field-level authorization enforced

## REST Specific

- [ ] Pagination enforced on list endpoints (no unbounded queries)
- [ ] HTTP methods restricted to intended actions per endpoint
- [ ] Deprecated API versions do not remain accessible with known vulnerabilities
- [ ] CORS configured with least privilege (specific origins, not `*`)

## Webhook Security

- [ ] Inbound webhooks verify signatures
- [ ] Outbound webhooks use HTTPS
- [ ] Webhook secrets are rotatable
