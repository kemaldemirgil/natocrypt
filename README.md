
<p align="center">
  <img src="https://i.postimg.cc/Kz6kJ1gj/natocrypt-logo.png"/>
</p>
<img src="https://img.shields.io/npm/v/npm?color=red&logo=npm"/>


> NATO phonetic alphabet password-hashing module

## 💠About:

Natocrypt was created to convert your text into a NATO phonetic alphabet hash. It does not provide a fully secure encryption, it was made for simplicity and basic usage. \

This package is open to contributions.

## 🔧Installation:
```console
npm install natocrypt
```
## 📜Usage:
There are only 2 methods available.
```js
encrypt(text, multiplier)
```
```js
decrypt(text, multiplier)
```

```javaScript
const Natocrypt = require("natocrypt")
```
Init Natocrypt
```javaScript
const nato = new Natocrypt();
```
## 🔒Encrypt a text
```javaScript
const text = "hello world this is gameface"
const multiplier = 50
const encryptedText = nato.encrypt(text, multiplier)

console.log(encryptedText)
> mikelimanovembersierraviktorcharliehoteloscargolfbravojulietindiafoxtrotechoxraypapauniformfoxtrotkilodeltalimabravoalphaxrayfoxtrotwhiskeylimalimajulietecholimatangoxrayindiaoscarbravoxrayyankeequebecjulietjuliet$oscarfoxtrotechozulualphaoscarwhiskeypapauniformfoxtrotpapacharliebravooscartangoviktorzulusierratangowhiskeyromeooscarzulufoxtrotromeoechokilolimabravocharliequebecnovemberpapatangodeltawhiskeywhiskeysierrajulietzuluoscar$charliecharlieoscarhoteldeltapapatangozuluzuluuniformnovembergolfcharliehotelkiloxrayquebeckilojulietpapaindiahotelmikeviktorromeosierrauniformsierraxrayquebecjulietviktortangoalpha$quebecindiadeltamikehotelindiaindiaechocharliepapacharliezulukilosierradeltaromeowhiskeyindiamikenovember$quebecquebecdeltanovembernovemberfoxtrotgolflimaxrayquebecdeltawhiskeyromeoalphakilosierrajulietwhiskeyechoyankeemikeoscarfoxtrotviktorbravopapaalphaechoyankeemikepapasierrakiloviktorfoxtrotxraybravozulupapajulietindiaalphacharliezuluzulualphadeltatangocharliepapagolfnovembertangogolfromeoecho
```
## 🔓Decrypt a text
```javaScript
const hashedText = "mikelimanovembersierraviktorcharliehoteloscargolfbravojulietindiafoxtrotechoxraypapauniformfoxtrotkilodeltalimabravoalphaxrayfoxtrotwhiskeylimalimajulietecholimatangoxrayindiaoscarbravoxrayyankeequebecjulietjuliet$oscarfoxtrotechozulualphaoscarwhiskeypapauniformfoxtrotpapacharliebravooscartangoviktorzulusierratangowhiskeyromeooscarzulufoxtrotromeoechokilolimabravocharliequebecnovemberpapatangodeltawhiskeywhiskeysierrajulietzuluoscar$charliecharlieoscarhoteldeltapapatangozuluzuluuniformnovembergolfcharliehotelkiloxrayquebeckilojulietpapaindiahotelmikeviktorromeosierrauniformsierraxrayquebecjulietviktortangoalpha$quebecindiadeltamikehotelindiaindiaechocharliepapacharliezulukilosierradeltaromeowhiskeyindiamikenovember$quebecquebecdeltanovembernovemberfoxtrotgolflimaxrayquebecdeltawhiskeyromeoalphakilosierrajulietwhiskeyechoyankeemikeoscarfoxtrotviktorbravopapaalphaechoyankeemikepapasierrakiloviktorfoxtrotxraybravozulupapajulietindiaalphacharliezuluzulualphadeltatangocharliepapagolfnovembertangogolfromeoecho"
const multiplier = 50
const decryptedText = nato.decrypt(hashedText, multiplier)


console.log(decryptedText)
> hello world this is gameface
```

### ❗ Only letters and spaces are available for now, other characters & numbers will not work.
### ❗ All text will be lowercased.
### ❗ A multiplier is required.

## ©️License:
Copyright © Kemal Demirgil. All rights reserved.
Licensed under the [MIT](https://github.com/kemaldemirgil/natocrypt/blob/main/LICENSE) license.

