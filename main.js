const alphabet = {
  a: ["🅰️"],
  b: ["🅱️"],
  c: ["©️", "🌜"],
  d: ["🌮"],
  e: ["📧"],
  f: ["🎏"],
  g: ["⛽"],
  h: ["♓"],
  i: ["ℹ️", "🌵", "🚦", "🛢", "🕯", "📍", "🎚"],
  j: ["🗾", "🏒"],
  k: ["🎋"],
  l: ["👢"],
  m: ["〽️", "Ⓜ️", "♍️"],
  n: ["📈"],
  o: ["🅾️", "🌕", "🌚", "🌝", "⚙"], //,"💍"
  p: ["🅿️"],
  q: ["🎯"],
  r: ["®️"],
  s: ["💲", "⚡️"],
  t: ["🌴", "⛏"],
  u: ["⛎"],
  v: ["♈", "✅", "✔️", "☑️"],
  w: ["〰️"],
  x: ["⚔", "❌", "❎"],
  y: ["🌱"],
  z: ["💤"],
  1: ["1️⃣"],
  2: ["2️⃣"],
  3: ["3️⃣"],
  4: ["4️⃣"],
  5: ["5️⃣"],
  6: ["6️⃣"],
  7: ["7️⃣"],
  8: ["8️⃣"],
  9: ["9️⃣"],
  0: ["0️⃣"],
  "?": ["❓", "❔"],
  "!": ["❗️", "❕"],
  " ": ["　"],
};

/**
 * Convert a character to its emoji equivalent
 * @param  {character} c the character to convert
 * @return {character}   the equivalent emoji
 */
function convert(c) {
  if (alphabet[c.toLowerCase()]) {
    const possibilities = alphabet[c.toLowerCase()];
    const index = Math.floor(Math.random() * possibilities.length);
    return possibilities[index];
  } else {
    return c;
  }
}

document.getElementById("input").addEventListener("input", () => {
  const output = document.getElementById('output');
  output.textContent = '';
  const text = document.getElementById("input").value;
  for (let i of text) {
    output.textContent += convert(i);
  }
});

function log(text) {
  msgText.style.opacity = 1;
  msgText.innerHTML = text;
  setTimeout(function() {
    msgText.style.opacity = 0;
    setTimeout(function() {
      //msgText.innerHTML = '';
    }, 200);
  }, 2000);
}

// copying
// https://developers.google.com/web/updates/2015/04/cut-and-copy-commands?hl=en
const copyBtn = document.getElementById('copy');
copyBtn.disabled = !document.queryCommandSupported('copy');
const msgText = document.getElementById('msg');
copyBtn.addEventListener('click', function(event) {
  // Select the email link anchor text
  const output = document.getElementById('output');
  let range = document.createRange();
  range.selectNode(output);
  window.getSelection().addRange(range);

  try {
    // Now that we've selected the anchor text, execute the copy command
    var copy = document.execCommand('copy');
    log('Copy was ' + (copy ? 'successful' : 'unsuccessful'));
  } catch (err) {
    log('Oops, unable to copy');
  }

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported
  window.getSelection().removeAllRanges();
});
