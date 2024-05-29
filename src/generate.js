/*
 * Generation - galmoji
 * @param input string (required)
 * @returns - Generated string.
 */

function generate(input) {
  if (!input || typeof input !== 'string') throw new Error('input must be string.');

  const w = require('../lib/word.json');
  const alphabet = require('../lib/chars/alphabet.json');
  const hira = require('../lib/chars/hiragana.json');
  const kata = require('../lib/chars/katakana.json');
  const kanji = require('../lib/chars/kanji.json');
  const other = require('../lib/chars/other.json');
  let text = input;
  for (const word of Object.keys(w)) {
    const regex = new RegExp(word, 'g');
    text = text.replace(regex, w[word]);
  }
  const chars = [];
  for (const char of text.split('')) {
    let c = char;
    if (alphabet[c.toUpperCase()]) c = alphabet[c.toUpperCase()];
    if (hira[c]) c = hira[c];
    if (kata[c]) c = kata[c];
    if (kanji[c]) c = kanji[c];
    if (other[c]) c = other[c];
    chars.push(c);
  }
  const result = chars.join('');

  return result;
}

module.exports = generate;