# Common Security Checks

These checks apply regardless of audit scope. Always include them.

## Hardcoded Secrets

- [ ] No passwords, API keys, tokens, or private keys in source code
- [ ] No secrets in configuration files committed to version control
- [ ] `.env` files are in `.gitignore`
- [ ] Secrets loaded from environment variables or a secrets manager

## Dependency Security

- [ ] No known vulnerable dependencies (run `npm audit`, `pip-audit`, `govulncheck`, etc.)
- [ ] Dependencies are maintained and reasonably current
- [ ] Unused dependencies removed
- [ ] Lockfile is committed and consistent with manifest
- [ ] Third-party packages are from trusted sources

## Error Handling & Information Leakage

- [ ] Error responses do not leak stack traces, internal paths, or system details
- [ ] Debug mode is off in non-local environments
- [ ] Verbose logging does not include sensitive data (passwords, tokens, PII)

## Security Logging & Monitoring

- [ ] Audit logs exist for sensitive actions (login, permission changes, data access/deletion)
- [ ] Failed authentication attempts are logged
- [ ] Logs themselves do not contain sensitive data
- [ ] Alerting exists for suspicious behavior patterns (if applicable)

## Input Validation Fundamentals

- [ ] All untrusted input is validated at system boundaries
- [ ] Validation uses allowlists over denylists where possible
- [ ] Input length, type, and format constraints are enforced
