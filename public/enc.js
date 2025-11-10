function decodeText() {
  const input = document.getElementById("input").value.toLowerCase();


const decoder = {
  " ": "/xar",
  "a": "/bja",
  "b": "/nop",
  "c": "/nga",
  "d": "/foz",
  "e": "/req",
  "f": "/bel",
  "g": "/sor",
  "h": "/nau",
  "i": "/xox",
  "j": "/vaf",
  "k": "/otv",
  "l": "/bvh",
  "m": "/cha",
  "n": "/tom",
  "o": "/ola",
  "p": "/xdf",
  "q": "/kkx",
  "r": "/xxk",
  "s": "/aab",
  "t": "/ccb",
  "u": "/oop",
  "v": "/nna",
  "w": "/hra",
  "x": "/jer",
  "y": "/rey",
  "z": "/zip"
};

    let output = "";
  for (let char of input) {
    output += decoder[char] || char; // fallback to original character
  }

  document.getElementById("output").textContent = output;
}
