# C-NUM-FMT

- `std::fmt::UpperHex`
- `std::fmt::LowerHex`
- `std::fmt::Octal`
- `std::fmt::Binary`

These traits control the representation of a type under the `{:X}`, `{:x}`, `{:o}`, and `{:b}` format specifiers.

Implement these traits for any number type on which you would consider doing bitwise manipulations like `|` or `&`. This is especially appropriate for bitflag types. Numeric quantity types like `struct Nanoseconds(u64)` probably do not need these.
