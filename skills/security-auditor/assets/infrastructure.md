# Infrastructure & CI/CD Security Checks

## CI/CD Pipeline

- [ ] Secrets are not hardcoded in CI config files
- [ ] Secrets use CI platform's secret management (not plaintext env vars in config)
- [ ] Pipeline scripts and actions are pinned to specific versions (not `@latest` or `@main`)
- [ ] Third-party actions/plugins are from trusted sources and version-pinned
- [ ] Build artifacts are integrity-checked (checksums, signatures)
- [ ] Pipeline has no unnecessary write permissions to production
- [ ] Pull request builds cannot access production secrets

## Container Security

- [ ] Containers do not run as root
- [ ] Base images are from trusted registries and version-pinned
- [ ] No secrets baked into image layers
- [ ] `.dockerignore` excludes sensitive files (`.env`, keys, etc.)
- [ ] Images are scanned for vulnerabilities
- [ ] Read-only filesystem used where possible
- [ ] Unnecessary tools and packages removed from production images

## Cloud & IAM

- [ ] IAM roles follow least-privilege principle
- [ ] No wildcard (`*`) permissions in IAM policies
- [ ] Service accounts use short-lived credentials where possible
- [ ] Cloud storage buckets are not publicly accessible by default
- [ ] Network security groups restrict ingress to required ports only
- [ ] Cloud metadata endpoint access is restricted

## Configuration & Deployment

- [ ] HTTPS enforced in all non-local environments
- [ ] Security headers set (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy)
- [ ] Debug mode and verbose error output disabled in production
- [ ] Database and internal services not exposed to the internet
- [ ] Default credentials changed on all services
- [ ] TLS certificates are valid and auto-renewed

## Supply Chain

- [ ] Dependency lockfiles committed and reviewed for unexpected changes
- [ ] Package registry access uses authentication where available
- [ ] No `postinstall` or lifecycle scripts from untrusted packages
- [ ] Dependency update PRs are reviewed before merge
