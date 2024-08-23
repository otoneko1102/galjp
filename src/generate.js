/**
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

function generate(input, option) {
  if (!input || typeof input !== 'string') throw new Error('input must be string.');

  const booleans = {
    alphabet: true,
    number: true,
    hira: true,
    kata: true,
    kanji: true,
    other: true,
    word: true
  };

  if (option) {
    if (typeof option !== 'object') throw new Error('option must be object.');
    if (option.alphabet !== undefined && typeof option.alphabet !== 'boolean') throw new Error('option.alphabet must be boolean.');
    if (option.number !== undefined && typeof option.number !== 'boolean') throw new Error('option.number must be boolean.');
    if (option.hira !== undefined && typeof option.hira !== 'boolean') throw new Error('option.hira must be boolean.');
    if (option.kata !== undefined && typeof option.kata !== 'boolean') throw new Error('option.kata must be boolean.');
    if (option.kanji !== undefined && typeof option.kanji !== 'boolean') throw new Error('option.kanji must be boolean.');
    if (option.other !== undefined && typeof option.other !== 'boolean') throw new Error('option.other must be boolean.');
    if (option.word !== undefined && typeof option.word !== 'boolean') throw new Error('option.word must be boolean.');

    for (const key of Object.keys(booleans)) {
      if (option[key] !== undefined) booleans[key] = option[key];
    }
  }

  const w = require('../lib/word.json');
  const alphabet = require('../lib/chars/alphabet.json');
  const number = require('../lib/chars/number.json');
  const hira = require('../lib/chars/hiragana.json');
  const kata = require('../lib/chars/katakana.json');
  const kanji = require('../lib/chars/kanji.json');
  const other = require('../lib/chars/other.json');
  let text = input;
  if (booleans.word) {
    for (const word of Object.keys(w)) {
      const regex = new RegExp(word, 'g');
      text = text.replace(regex, w[word]);
    }
  }
  const chars = [];
  for (const char of text.split('')) {
    let c = char;
    if (booleans.alphabet && alphabet[c.toUpperCase()]) c = alphabet[c.toUpperCase()];
    if (booleans.number && number[c]) c = number[c];
    if (booleans.hira && hira[c]) c = hira[c];
    if (booleans.kata && kata[c]) c = kata[c];
    if (booleans.kanji && kanji[c]) c = kanji[c];
    if (booleans.other && other[c]) c = other[c];
    chars.push(c);
  }
  const result = chars.join('');

  return result;
}

module.exports = generate;
