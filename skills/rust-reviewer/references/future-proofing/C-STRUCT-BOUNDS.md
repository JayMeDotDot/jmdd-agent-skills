# C-STRUCT-BOUNDS

Generic data structures should not use trait bounds that can be derived or do not otherwise add semantic value. Each trait in the `derive` attribute will be expanded into a separate `impl` block that only applies to generic arguments that implement that trait.

```rust
#![allow(unused)]
fn main() {
    // Prefer this:
    #[derive(Clone, Debug, PartialEq)]
    struct Good<T> { /* ... */ }
    
    // Over this:
    #[derive(Clone, Debug, PartialEq)]
    struct Bad<T: Clone + Debug + PartialEq> { /* ... */ }
}
```

Duplicating derived traits as bounds on `Bad` is unnecessary and a backwards compatibility hazard.

Generally speaking, adding a trait bound to a data structure is a breaking change because every consumer of that structure will need to start satisfying the additional bound. Deriving more traits from the standard library using the `derive` attribute is not a breaking change.

The following traits should never be used in bounds on data structures:

- `Clone`
- `Debug`
- `PartialEq`
- `PartialOrd`
- `Display`
- `Default`
- `Error`
- `Serialize`
- `Deserialize`
- `DeserializeOwned`

There is a grey area around other non-derivable trait bounds that are not strictly required by the structure definition, like `Read` or `Write`. They may communicate the intended behavior of the type better in its definition but alse limits future extensibility. Including semantically useful trait bounds on data structures is still less problematic than including derivable traits as bounds.

## Exceptions

There are three exceptions where trait bounds on structures are required:

1. The data structure refers to an associated type on the trait.
2. The bound is `?Sized`.
3. The data structure has a `Drop` impl that requires trait bounds. Rust currently requires all trait bounds on the `Drop` impl are also present on the data structure.
