function decodeText() {
  const input = document.getElementById("input").value.toLowerCase();

  const decoder = {
    "-": " ",
    "1": "a",
    "2": "b",
    "3": "c",
    "4": "d",
    "5": "e",
    "6": "f",
    "7": "g",
    "8": "h",
    "9": "i",
    "0": "j",
    ".": "k",
    "[": "l",
    "]": "m",
    "$": "n",
    "!": "o",
    ":": "p",
    ";": "q",
    "<": "r",
    "/": "s",
    "?": "t",
    ",": "u",
    "^": "v",
    "~": "w",
   "*": "x", 
    "%": "y",
    "_": "z",
    // Add more if needed
  };

  let output = "";
  for (let char of input) {
    output += decoder[char] || char; // fallback to original character
  }

  document.getElementById("output").textContent = output;
}
