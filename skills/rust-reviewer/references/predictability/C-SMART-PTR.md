# C-SMART-PTR

For example, this is why the `Box::into_raw` function is defined the way it is.

```rust
impl<T> Box<T> where T: ?Sized {
    fn into_raw(b: Box<T>) -> *mut T { /* ... */ }
}

let boxed_str: Box<str> = /* ... */;
let ptr = Box::into_raw(boxed_str);
```

If this were defined as an inherent method instead, it would be confusing at the call site whether the method beging called is a method on `Box<T>` or a method on `T`.
