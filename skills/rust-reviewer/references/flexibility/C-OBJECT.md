# C-OBJECT

Trait objects have some significant limitations: methods invoked through a trait object cannot use generics, and cannot use `Self` except in receiver position.

When designing a trait, decide early on whether the trait will be used as an object or as a bound on generics.

A `where` clause of `Self: Sized` may be used to exclude specific methods from the trait's object. The following trait is not object-safe due to the generic method.

```rust
trait MyTrait {
    fn object_safe(&self, i: 32);
    fn not_object_safe<T>(&self, t: T);
}
```

Adding a requirement of `Self: Sized` to the generic method excludes it from the trait object and makes the trait object-safe.

```rust
trait MyTrait {
    fn object_safe(&self, i: 32);
    fn not_object_safe<T>(&self, t: T) where Self: Sized;
}
```

## Advantages of trait objects

- *Heterogeneity*. When you need it , you really need it.
- *Code size*. Unlike generic, trait objects do not generate specialized (monomorphized) versions of code, which can greatly reduce code size.

## Disadvantages of trait objects

- *No generic methods*. Trait objects cannot currently provide generic methods.
- *Dynamic dispatch and fat pointers*. Trait objects inherently involve indirection and vtable dispatch, which can carry a performance penalty.
- *No Self*. Except for the method receiver argument, methods on trait objects cannot use the `Self` type.

## Examples from the standard library

- The `io::Read` and `io::Write` traits are often used as objects.
- The `Iterator` trait has several generic methods marked with `where Self: Sized` to retain the ability to use `Iterator` as an object.
