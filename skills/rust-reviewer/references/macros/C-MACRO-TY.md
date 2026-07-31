# C-MACRO-TY

If your macro accepts a type fragment like `$t:ty` in the input, it should be usable with all of the following:
- Primitives: `u8`, `&str`
- Relative paths: `m::Data`
- Absolute paths: `::base::Data`
- Upward relative paths: `super::Data`
- Generics: `Vec<string>`
