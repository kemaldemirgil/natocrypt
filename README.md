
<p align="center">
  <img src="https://i.postimg.cc/Kz6kJ1gj/natocrypt-logo.png"/>
</p>
<img src="https://img.shields.io/npm/v/npm?color=red&logo=npm"/>


> NATO phonetic alphabet password-hashing module

## Installation:
```console
npm install natocrypt
```
## Usage:
```javaScript
const natocrypt = require("natocrypt")
```
Encrypt a text
```javaScript
options = {
  mode: "encrypt",
  text: "this is a very secret text",
};
const result = natocrypt(options)
console.log(result)
> tangohotelindiasierra$indiasierra$alpha$viktorechoromeoyankee$sierraechocharlieromeoechotango$tangoechoxraytango
```
Decrypt a text
```javaScript
options = {
  mode: "decrypt",
  text: "tangohotelindiasierra$indiasierra$alpha$viktorechoromeoyankee$sierraechocharlieromeoechotango$tangoechoxraytango",
};
const result = natocrypt(options);
console.log(result);
> this is a very secret text
```

## ©️ License:
Copyright © Kemal Demirgil. All rights reserved.
Licensed under the [MIT](https://github.com/kemaldemirgil/natocrypt/blob/main/LICENSE) license.

