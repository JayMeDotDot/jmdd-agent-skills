# C-ANYWHERE

Rust allows items to be placed at the module level or within a tighter scope like a function. Item macros should work equally well as ordinary items in all of these places. The test suit should include invocations of the macro in at least the module scope and function scope.
```rust
#[cfg(test)]
mod tests {
    test_your_macro_in_a!(module);

    #[test]
    fn anywhere() {
        test_your_macro_in_a!(function);
    }
}
```
