# C-MACRO-ATTR

Macros that produce more than one output item should support adding attributes to any one of those items. One common use case would be putting individual items behind a cfg.
```rust
bitflags! {
    struct Flags: u8 {
        #[cfg(windows)]
        const ControlCenter = 0b001;
        #[cfg(unix)]
        const Terminal = 0b010;
    }
}
```

Macros that produce a struct or enum as output should support attributes so that the output can be used with derive.
```rust
bitflags!{
    #[derive(Default, Serialize)]
    struct Flags: u8 {
        const ConstrolCenter = 0b001;
        const Terminal = 0b010;
    }
}
```
