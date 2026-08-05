# C-LINK

Regular links can be added inline with the usual markdown syntax of `[text](url)`. Links to other types can be added by marking them with `[text]`, then adding the link target in a new line at the end of the docstring with `[text]: <target>`, where `<target>` is described below.

Link targets to methods within the same type usually look like this:

```rust
[`serialize_struct`]: #method.serialize_struct
```

Link targets to other types usually look like this:

```rust
[`Deserialize`]: trait.Deserialize.html
```

Link targets may also point to a parent or child module:

```rust
[`Value`]: ../enum.Value.html
[`DeserializeOwned`]: de/trait.DeserializeOwned.html
```
