# C-CTOR

In Rust, "constructors" are just a convention. There are a variety of conventions around constructor naming, and the distinctions are often subtle.

A constructor in its most basic form is a `new` method with no arguments.

The name `new` should generally be used for the primary method of instantiating a type. Sometimes it takes no arguments, as in the example above. Sometimes it does take arguments, like `Box::new` which is passed the value to place in the `Box`.

Some types' constructors, most notably I/O resource types, use distinct naming conventions for their constructors, as in `File::open`, `Mmap::open`, `TcpStream::connect`, and `UdpSocket::bind`. In these cases names are chosen as appropriate for the domain.

Often there are multiple ways to construct a type. It's common in these cases for secondary constructors to be suffixed `_with_foo`, as in `Mmap::oepn_with_offset`. If your type has a multiplicity of construction options though, consider the builder pattern ([C-BUILDER](skills/rust-reviewer/references/type-safty/C-BUILDER.md)) instead.

Some constructors are "conversion constructors", methods that create a new type from an existing value of a different type. These typically have names beginning with `from_` as in `std::io::Error::from_raw_os_error`. Note alse though the `From` trait ([C-CONV-TRAITS](skills/rust-reviewer/references/interoperability/C-CONV-TRAITS.md)), which is quite similar. There are three distinctions between a `from_`-prefixed conversion constructor and a `From<T>` impl.

- A `from_` constructor can be unsafe; a `From` impl cannot. One example of this is `Box::from_raw`.
- A `from_` cosntructor can accept additional arguments to disambiguate the meaning of the source data, as in `u64::from_str_radix`.
- A `From` impl is only appropriate when the source data type is sufficient to determine the encoding of the output data type. When the input is just a bag of bits like in `u64::from_be` or `String::from_utf8`, the conversion constructor name is able to identify their meaning.

Note that it is common and expected for types to implement both `Default` and a `new` constructor. For types that have both, they should have the behavior. Either one may be implemented in terms of the other.
