# C-GOOD-ERR

An error type is any type `E` used in a `Result<T, E>` returned by any public function of your crate. Error types should always implement the `std::error::Error` trait.

Additionally, error types should implement the `Send` and `Sync` traits. These are common requirements for basic error handling in a multithreaded application.

`Send` and `Sync` are also important for being able to package a custom error into an IO error using `std::io::Error::new`, which requires a trait bound of `Error + Send + Sync`.

One place to be vigilant about this guideline is in functions that return Error trait objects, for example `reqwest::Error::get_ref`. Typically, `Error + Send + Sync + 'static` will be the most useful for callers. The addition of `'static` allows the trait object to be used with `Error::downcast_ref`.

Never use `()` as an error type, even where there is no useful additional information for the error to carry.
- `()` does not implement `Error` so it cannot be used with error handling libraries like `error-chain`.
- `()` does not implement `Display` so a user would need to write an error message of their own if they want to fail because of the error.
- `()` has an unhelpful `Debug` representation for users that decide to `unwrap()` the error.
- It would not be semantically meaningful for a downstream library to implement `From()` for their error type, so `()` as an error type cannot be used with the `?` operator.

Instead, define a meaningful error type specific to your crate or to the individual function. Provide appropriate `Error` and `Display` impls. If there is no useful information for the error to carry, it can be implemented as a unit struct.

```rust
use std::error::Error;
use std::fmt::Display;

fn do_the_thing() -> Result<Wow, DoError>

#[derive(Debug)]
struct DoError;

impl Display for DoError { /* ... */ }
impl Error for DoError { /* ... */ }
```

The error message given by the `Display` representation of an error type should be lowercase without trailing punctuation, and typically concise.

`Error::description()` should not be implemented. It has been deprecated and users should always use `Display` instead of `description()` to print the error.
