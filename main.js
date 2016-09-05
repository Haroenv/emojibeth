---
---
var alphabet = {{site.data.alphabet | jsonify}};

/**
 * Convert a character to its emoji equivalent
 * @param  {character} c the character to convert
 * @return {character}   the equivalent emoji
 */
function convert(c) {
  if (alphabet[c.toLowerCase()]) {
    var possibilities = alphabet[c.toLowerCase()];
    var index = Math.floor(Math.random() * possibilities.length);
    return possibilities[index];
  } else if (c === " "){
    return "　"; // jekyll doesn't allow spaces as json keys
  } else {
    return c;
  }
}

document.getElementById("input").addEventListener("input", function() {
  var output = document.getElementById('output');
  output.textContent = '';
  var text = document.getElementById("input").value;
  for (var i of text) {
    output.textContent += convert(i);
  }
});

function log(text) {
  msgText.style.opacity = 1;
  msgText.innerHTML = text;
  setTimeout(function() {
    msgText.style.opacity = 0;
    setTimeout(function() {
      msgText.innerHTML = '';
    }, 200);
  }, 2000);
}

// copying
// https://developers.google.com/web/updates/2015/04/cut-and-copy-commands?hl=en
var copyBtn = document.getElementById('copy');
copyBtn.disabled = !document.queryCommandSupported('copy');
var msgText = document.getElementById('msg');
copyBtn.addEventListener('click', function(event) {
  // Select the email link anchor text
  var output = document.getElementById('output');
  var range = document.createRange();
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
