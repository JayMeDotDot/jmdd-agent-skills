---
name: "rust-reviewer"
description: "Use when asking for a rust review."
---

# Rust Reviewer

According to the Checklist, check whether the Rust code in the repository meets the corresponding requirements.

## Checklist

- Naming (crate aligns with Rust naming conventions)
  - [ ]  Casing conforms to RFC 430 [(C-CASE)](./references/naming/C-CASE.md)
  - [ ] Ad-hoc conversions follow `as_`, `to_`, `into_` conventions [(C-CONV)](./references/naming/C-CONV.md)
  - [ ] Getter names follow Rust convention [(C-GETTER)](./references/naming/C-GETTER.md)
  - [ ] Methods on collections that produce iterators follow `iter`, `iter_mut`, `into_iter` [(C-ITER)](./references/naming/C-ITER.md)
  - [ ] Iterator type names match the methods that produce them [(C-ITER-TY)](./references/naming/C-ITER-TY.md)
  - [ ] Feature names are free of placeholder words [(C-FEATURE)](./references/naming/C-FEATURE.md)
  - [ ] Names use a consistent word order [(C-WORD-ORDER)](./references/naming/C-WORD-ORDER.md)

- Interoperability (crate interacts nicely with other library functionality)
  - [ ] Types eagerly implement common traits
    - `Copy`, `Clone`, `Eq`, `PartialEq`, `Ord`, `PartialOrd`, `Hash`, `Debug`, `Display`, `Default` [(C-COMMON-TRAITS)](./references/interoperability/C-COMMON-TRAITS.md)
  - [ ] Conversions use the standard traits `From`, `AsRef`, `AsMut` [(C-CONV-TRAITS)](./references/interoperability/C-CONV-TRAITS.md)
  - [ ] Collections implement `FromIterator` and `Extend` [(C-COLLECT)](./references/interoperability/C-COLLECT.md)
  - [ ] Data structures implement Serde's `Serialize`, `Deserialize` [(C-SERDE)](./references/interoperability/C-SERDE.md)
  - [ ] Types are `Send` and `Sync` where possible [(C-SEND-SYNC)](./references/interoperability/C-SEND-SYNC.md)
  - [ ] Error types are meaningful and well-behaved [(C-GOOD-ERR)](./references/interoperability/C-GOOD-ERR.md)
  - [ ] Binary number types provide `Hex`, `Octal`, `Binary` formatting [(C-NUM-FMT)](./references/interoperability/C-NUM-FMT.md)
  - [ ] Generic reader/writer functions take `R: Read` and `W: Write` by value [(C-RW-VALUE)](./references/interoperability/C-RW-VALUE.md)

- Macros (crate presents well-behaved macros)
  - [ ] Input syntax is evocative of the output [(C-EVOCATIVE)](./references/macros/C-EVOCATIVE.md)
  - [ ] Macros compose well with attributes [(C-MACRO-ATTR)](./references/macros/C-MACRO-ATTR.md)
  - [ ] Item macros work anywhere that items are allowed [(C-ANYWHERE)](./references/macros/C-ANYWHERE.md)
  - [ ] Item macros support visibility specifiers [(C-MACRO-VIS)](./references/macros/C-MACRO-VIS.md)
  - [ ] Type fragments are flexible [(C-MACRO-TY)](./references/macros/C-MACRO-TY.md)

- Documentation (crate is abundantly documented)
  - [ ] Crate level docs are thorough and include examples
  - [ ] All items have a rustdoc example
  - [ ] Examples use `?`, not `try!`, not `unwrap`
  - [ ] Function docs include error, panic, and safety considerations
  - [ ] Prose contains hyperlinks to relevant things
  - [ ] Cargo.toml includes all common metadata
    - authors, description, license, homepage, documentation, repository, keywords, categories
  - [ ] Release notes document all significant changes
  - [ ] Rustdoc does not show unhelpful implementation details

- Predictability (crate enables legible code that acts how it looks)
  - [ ] Smart pointers do not add inherent methods
  - [ ] Conversions live on the most specific type involved 
  - [ ] Functions with a clear receiver are methods
  - [ ] Functions do not take out-parameters
  - [ ] Operator overloads are unsurprising
  - [ ] Only smart pointers implement `Deref` and `DerefMut`
  - [ ] Constructors are static, inherent methods

- Flexibility (crate supports diverse real-world use cases)
  - [ ] Functions expose intermediate results to avoid duplicate work
  - [ ] Caller decides where to copy and place data
  - [ ] Functions minimize assumptions about parameters by using generics
  - [ ] Traits are object-safe if they may be useful as a trait object

- Type safety (crate leverages the type system effectively)
  - [ ] Newtypes provide static distinctions
  - [ ] Arguments convey meaning through types, not bool or Option
  - [ ] Types for a set of flags are bitflags, not enums
  - [ ] Builders enable construction of complex values

- Dependability (crate is unlikely to do the wrong thing)
  - [ ] Functions validate their arguments
  - [ ] Destructors never fail
  - [ ] Destructors that may block have alternatives 

- Debuggability (crate is conducive to easy debugging)
  - [ ] All public types implement Debug
  - [ ] `Debug` representation is never empty 

- Future proofing (crate is free to improve without breaking users' code)
  - [ ] Sealed traits protect against downstream implementations
  - [ ] Structs have private fields 
  - [ ] Newtypes encapsulate implementation details 
  - [ ] Data structures do not duplicate derived trait bounds

- Necessities (to whom they matter, they really matter)
  - [ ] Public dependencies of a stable crate are stable [(C-STABLE)](./references/necessities/C-STABLE.md)
  - [ ] Crate and its dependencies have a permissive license [(C-PERMISSIVE)](./references/necessities/C-PERMISSIVE.md)


## WorkingFlow

1. Every item in the checklist should be checked.
2. The parentheses at the end of every Checklist item contain the detailed documentation for the corresponding rule.
3. If you cannot be sure what the rules mean, refer to the detailed documentation.
4. If a rule is not applicable to the codebase, skip it.
5. Only check the git diff for the changes to be reviewed.
6. According to the checklist, generate a summary of the rust review.
7. Only point out the parts that do not meet the Checklist requirements, provide reasons and suggestions for changes, without modifying the code.
