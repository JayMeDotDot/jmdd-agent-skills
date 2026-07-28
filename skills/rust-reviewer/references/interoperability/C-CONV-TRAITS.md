# C-CONV-TRAITS

The following conversion traits should be implemented where it makes sense:
- `From`
- `TryFrom`
- `AsRef`
- `AsMut`

The following conversion traits should never be implemented:
- `Into`
- `TryInto`

These traits have a blanket impl based on `From` and `TryFrom`. Implement those instead.

## Examples from the standard library
- `From<u16>` is implemented for `u32` because a smaller integer can always be converted to a bigger integer.
- `From<u32>` is not implemented for `u16` because the conversion may not be possible if the integer is too big.
- `TryFrom<u32>` is implemented for `u16` and returns an error if the integer is too big to fit in `u16`.
- `From<Ipv6Addr>` is implemented for `IpAddr`, which is a type that can represent both v4 and v6 IP addresses.
