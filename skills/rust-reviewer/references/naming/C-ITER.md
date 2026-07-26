# C-ITER

For a container with elements of type U, iterator methods should be named:
```rust
    fn iter(&self) -> Iter             // Iter implements Iterator<Item = &U>
    fn iter_mut(&mut self) -> IterMut  // IterMut implements Iterator<Item = &mut U>
    fn into_iter(self) -> IntoIter     // IntoIter implements Iterator<Item = U>
```

This guideline applies to data structures that are conceptually homogeneous collections. As a counterexample, the `str` type is slice of bytes that are guaranteed to be valid UTF-8. This is conceptually more nuanced than a homogeneous collection so rather than providing the `iter`/`iter_mut`/`into_iter` group of iterator methods, it provides `str::byte`s to iterate as bytes and `str::chars` to iterate as chars.

This guideline applies to methods only, not functions. For example `percent_encode` from the `url` crate returns an iterator over percent-encoded string fragments. There would be no clarity to be had by using an `iter`/`iter_mut`/`into_iter` convention.
