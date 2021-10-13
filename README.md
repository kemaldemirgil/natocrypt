
<p align="center">
  <img src="https://i.postimg.cc/Kz6kJ1gj/natocrypt-logo.png"/>
</p>
<img src="https://img.shields.io/npm/v/npm?color=red&logo=npm"/>


> NATO phonetic alphabet password-hashing module

Natocrypt was created to convert your text into a NATO phonetic alphabet hash with a little more encryption. It does not provide a fully secure encryption, it was made for simplicity and basic usage. \
It basically uses each letter representation with a reversed format. Some characters and capital letters are not yet supported.

This package is open to contributions.


## Installation:
```console
npm install natocrypt
```
## Usage:
There are only 2 methods available.
```js
encrypt() & decrypt()
```

```javaScript
const Natocrypt = require("natocrypt")
```
Init Natocrypt
```javaScript
const nato = new Natocrypt();
```
Encrypt a text
```javaScript
nato.encrypt("very secret text")
> tangoxrayechotango$tangoechoromeocharlieechosierra$yankeeromeoechoviktor
```
Decrypt a text
```javaScript
nato.decrypt("tangoxrayechotango$tangoechoromeocharlieechosierra$yankeeromeoechoviktor")
> very secret text
```

## License:
Copyright © Kemal Demirgil. All rights reserved.
Licensed under the [MIT](https://github.com/kemaldemirgil/natocrypt/blob/main/LICENSE) license.

