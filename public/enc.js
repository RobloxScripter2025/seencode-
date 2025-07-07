function decodeText() {
  const input = document.getElementById("input").value.toLowerCase();


const decoder = {
  " ": "-",
  "a": "1",
  "b": "2",
  "c": "3",
  "d": "4",
  "e": "5",
  "f": "6",
  "g": "7",
  "h": "8",
  "i": "9",
  "j": "0",
  "k": ".",
  "l": "[",
  "m": "]",
  "n": "$",
  "o": "!",
  "p": ":",
  "q": ";",
  "r": "<",
  "s": "/",
  "t": "?",
  "u": ",",
  "v": "^",
  "w": "~",
  "x": "*",
  "y": "%",
  "z": "_"
};

    let output = "";
  for (let char of input) {
    output += decoder[char] || char; // fallback to original character
  }

  document.getElementById("output").textContent = output;
}
