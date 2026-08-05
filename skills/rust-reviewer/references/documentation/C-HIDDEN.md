# C-HIDDEN

Rustdoc is supposed to include everything users need to use the crate fully and nothing more. It is fine to explain relevant implementation details in prose but they should not be real entries in the documentation.

Especially be selective about which impls are visible in rustdoc -- all the ones that users would need for using the crate fully, but no others.

`pub(crate)` is another great tool for removing implementation details from the public API. It allows items to be used from outside of their own module but not outside of the same crate.
