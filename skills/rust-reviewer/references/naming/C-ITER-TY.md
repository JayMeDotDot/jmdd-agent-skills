# C-ITER-TY

A method called `into_iter()` should return a type called `IntoIter` and similarly for all other methods that return iterators.

This guideline applies chiefly to methods, but often makes sense for functions as well. For example the `percent_encode` function from the `url` crate returns an iterator type called `PercentEncode`.

These type names make the most sense when prefixed with their owning module, for example `vec::IntoIter`.

Examples:
- `Vec::iter` returns `Iter`
- `Vec::iter_mut` returns `IterMut`
- `Vec::into_iter` returns `IntoIter`
- `BTreeMap::keys` returns `Keys`
- `BTreeMap::values` returns `Values`
