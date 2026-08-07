# C-CALLER-CONTROL

If a function requires ownership of an argument, it should take ownership of the argument rather than borrowing and cloning the argument.

If a function does not require ownership of an argument, it should take a shared or exclusive borrow of the argument rather than taking ownership and dropping the argument.

The `Copy` trait should only be used as a bound when absolutely needed, not as a way of signaling that copies should be cheap to make.
