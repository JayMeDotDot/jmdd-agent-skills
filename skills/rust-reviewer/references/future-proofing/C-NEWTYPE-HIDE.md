# C-NEWTYPE-HIDE

A newtype can be used to hide representation details while making precise promises to the client.

For example, consider a function `my-transform` that returns a compound iterator type.

```rust
#![allow(unused)]
fn main() {
    use std::iter::{Enumerate, Skip};
    
    pub fn my_transform<I: Iterator>(input: I) -> Enumerate<Skip<I>> {
        input.skip(3).enumerate()
    }
}
```

We wish to hide this type from the client, so that the client's view of the return type is roughly `Iterator<Item = (usize, T)>`. We can do so using the newtype pattern:

```rust
#![allow(unused)]
fn main() {
    use std::iter::{Enumerate, Skip};
    
    pub struct MyTransformResult<I>(Enumerate<Skip<I>>);
    
    impl<I: Iterator> Iterator for MyTransformResult<I> {
        type Item = (usize, I::Item);
    
        fn next(&mut self) -> Option<Self::Item> {
            self.0.next()
        }
    }
    
    pub fn my_transform<I: Iterator>(input: I) -> MyTransformResult<I> {
        MyTransformResult(input.skip(3).enumerate())
    }
}
```

Aside from simplifying the signature, this use of newtypes allows us to promise less to the client. The client does not know how the result iterator is constructed or represented, which means the representation can change in the future without breaking client code.

Rust 1.26 also introduces the `impl Trait` feature, which is more concise than the newtype pattern but with some additional trade offs, namely with `impl Trait` you are limited in what you can express. For example, returning an iterator that impls `Debug` or `Clone` or some combination of the other iterator extension traits can be problematic. In summary `impl Trait` as a return type is probably great for internal APIs and may even be appropriate for public APIs, but probably not in call cases.

```rust
#![allow(unused)]
fn main() {
    pub fn my_transform<I: Iterator>(input: I) -> impl Iterator<Item = (usize, I::Item)> {
        input.skip(3).enumerate()
    }
}
```
