# C-METADATA

The `[package]` section of `Cargo.toml` should include the following values:

- `authors`
- `description`
- `license`
- `repository`
- `keywords`
- `categories`

In addition, there are two optional metadata fields:

- `documentation`
- `homepage`

By default, <em>crates.io</em> links to documentation for the crate on <em>docs.rs</em>.The `documentation` metadata only needs to be set if the documentation is hosted somewhere other than <em>docs.rs</em>.

The `homepage` metadata should only be set if there is a unique website for the crate other than the source repository or API documentation. Do not make `homepage` redundant with either the `documentation` or `repository` values. For example, serde sets `homepage` to <em>`https://serde.rs`</em>, a dedicated website.
