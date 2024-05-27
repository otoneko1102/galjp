function generate(input) {
  if (!input || typeof input !== 'string') throw new Error('input must be string.');

  const w = require('../lib/words.json');
  const c = require('../lib/chars.json');
  let text = input;
  for (const word of Object.keys(w)) {
    const regex = new RegExp(word, 'g');
    text = text.replace(regex, w[word]);
  }
  const chars = [];
  for (const char of text.split('')) {
    if (c[char]) {
      chars.push(c[char]);
    } else {
      chars.push(char);
    }
  }
  const result = chars.join('');

  return result;
}

module.exports = generate;