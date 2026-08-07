# C-NO-OUT

Prefer

```rust
fn foo() -> (Bar, Bar)
```

over

```rust
fn foo(output: &mut Bar) -> Bar
```

for returning multiple `Bar` values.

Compound return types like tuples and structs are efficiently compiled and do not require heap allocation. If a function needs to return multiple values, it should do so via one of these types.

The primary exception: sometimes a function is meant to modify data that the caller already owns, for example to re-use a buffer:

```rust
fn read(&mut self, buf: &mut [u8]) -> io::Result<usize>
```
