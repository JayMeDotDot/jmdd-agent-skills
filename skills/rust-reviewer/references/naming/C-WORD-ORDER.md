# C-WORD-ORDER

Here are some error types from the standard library:

- `JoinPathsError`
- `ParseBoolError`
- `ParseCharError`
- `ParseFloatError`
- `ParseIntError`
- `RecvTimeoutError`
- `StripPrefixError`

All of these use verb-object-error word order. If we were adding an error to represent an address failing to parse, for consistency we would want to name it in verb-object-error order like `ParseAddrError` rather than `AddrParseError`.

The particular choice of word order is not important, but pay attention to consistency within the crate and consistency with similar functionality in the standard library.
