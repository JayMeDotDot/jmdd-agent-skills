# C-RW-VALUE

The standard library contains these two impls:

That means any function that accepts `R: Read` or `W: Write` generic parameters by value can be called with a mut reference if necessary.

In the documentation of such functions, briefly remind users that a mut reference can be passed. New Rust users often struggle with this. They may have opened a file and want to read multiple pieces of data out of it, but the function to read one piece consumes the reader by value, so they are stuck. The solution would be to leverage one of the above impls and pass `&mut f` instead of `f` as the reader parameter.
