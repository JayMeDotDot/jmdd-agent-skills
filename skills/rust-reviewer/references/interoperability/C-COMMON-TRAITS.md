# C-COMMON-TRAITS

Rust's trait system does not allow orphans: roughly, every `impl` must live either in the crate that defines the trait or the implementing type. Consequently, crates that define new types should eagerly implement all applicable, common traits.

The most important common traits to implement from `std` are: 
- `Copy`
- `Clone`
- `Eq`
- `PartialEq`
- `Ord`
- `PartialOrd`
- `Hash`
- `Display`
- `Default`
- `Debug`

Note that it is common and expected for types to implement both `Default` and an empty `new` constructor. `new` is the constructor convention in Rust, and users expect it to exist, so if it is reasonable for the basic constructor to take no arguments, then it should, even if it is functionally identical to `default`.
