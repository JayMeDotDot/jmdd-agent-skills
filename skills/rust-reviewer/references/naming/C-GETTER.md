# C-GETTER

With a few exceptions, the `get_` prefix is not used for getters in Rust code.

The `get` naming is used only when there is a single and obvious thing that could reasonably be gotten by a getter. For example `Cell::get` accesses the content of a `Cell`.

For getters that do runtime validation such as bounds checking, consider adding unsafe `_unchecked` variants. Typically those will have the following signatures.

```rust
    fn get(&self, index: K) -> Option<&V>;
    fn get_mut(&mut self, index: K) -> Option<&mut V>;
    unsafe fn get_unchecked(&self, index: K) -> &V;
    unsafe fn get_unchecked_mut(&mut self, index: K) -> &mut V;
```

The difference between getters and conversions [(C-CONV)](./reference/naming/C-CONV.md) can be subtle and is not always clear-cut. For example `TempDir::path` can be understood as a getter for the filesystem path of the temporary directory, while `TempDir::into_path` is a conversion that transfers responsibility for deleting the temporary directory to the caller. Since `path` is a getter, it would not be correct to call it `get_path` or `as_path`.
