function decodeText() {
  const input = document.getElementById("input").value.toLowerCase();

  const decoder = {
  "/xar": " ",
  "/bja": "a",
  "/nop": "b",
  "/nga": "c",
  "/foz": "d",
  "/req": "e",
  "/bel": "f",
  "/sor": "g",
  "/nau": "h",
  "/xox": "i",
  "/vaf": "j",
  "/otv": "k",
  "/bvh": "l",
  "/cha": "m",
  "/tom": "n",
  "/ola": "o",
  "/xdf": "p",
  "/kkx": "q",
  "/xxk": "r",
  "/aab": "s",
  "/ccb": "t",
  "/oop": "u",
  "/nna": "v",
  "/hra": "w",
  "/jer": "x",
  "/rey": "y",
  "/zip": "z"
  };

  let output = "";
  for (let char of input) {
    output += decoder[char] || char; // fallback to original character
  }

  document.getElementById("output").textContent = output;
}
