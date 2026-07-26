# C-CONV

Conversions should be provided as methods, with names prefixed as follows:
| Prefix | Cost | Ownership |
| :--- | :--- | :--- |
| `as_` | Free | borrowed -> borrowed |
| `to_` | Expensive | borrowed -> borrowed<br>borrowed -> owned (non-Copy types)<br>owned -> owned (Copy types) |
| `into_` | Variable | owned -> owned (non-Copy types) |

Conversions prefixed `as_` and `into_` typically decrease abstraction, either exposing a view into the underlying representation (`as`) or deconstructing data into its underlying representation (`into`). Conversions prefixed `to_`, on the other hand, typically stay at the same level of abstraction but do some work to change from one representation to another.

When a type wraps a single value to associate it with higher-level semantics, access to the wrapped value should be provided by an `into_inner()` method. This applies to wrappers that provide buffering like `BufReader`, encoding or decoding like `GzDecoder`, atomic access like `AtomicBool`, or any similar semantics.

If the mut qualifier in the name of a conversion method constitutes part of the return type, it should appear as it would appear in the type. For example `Vec::as_mut_slice` returns a mut slice; it does what it says. This name is preferred over `as_slice_mut`.
