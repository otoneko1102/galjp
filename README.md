# galjp
≠”兯儿文字変ｵ奐ラィ┐”ラױ

## Usage
```js
const { generate } = require('galjp');

/*
 * Generation - galmoji
 * @param input string (required)
 * @param option object
 * @param option.alphabet boolean (default=true)
 * @param option.number boolean (default=true)
 * @param option.hira boolean (default=true)
 * @param option.kata boolean (default=true)
 * @param option.kanji boolean (default=true)
 * @param option.other boolean (default=true)
 * @param option.word boolean (default=true)
 * @returns - Generated string.
 */

console.log(generate('Hello World!')); // '丩ヨ└└口 山口尺└囙.ᐟ'
console.log(generate('Hello World!', { alphabet: false })); // 'Hello World.ᐟ'
console.log(generate('こんにちは！')); // '⊇ωﾚﾆㄘﾚ￡.ᐟ'
console.log(generate('こんにちは！', { hira: false })); // 'こんにちは.ᐟ'
console.log(generate('信頼してる')); // 'ｲ言束頁Ｕτゑ'
console.log(generate('信頼してる', { kanji: false })); // '信頼Ｕτゑ'
```

## Get Support
<a href="https://discord.gg/yKW8wWKCnS"><img src="https://discordapp.com/api/guilds/1005287561582878800/widget.png?style=banner4" alt="Discord Banner"/></a>
