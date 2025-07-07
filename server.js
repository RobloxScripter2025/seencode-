const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/enc.html"));
});

app.get("/decode", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/dec.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
function decodeText() {
  const input = document.getElementById("input").value;

  const decoder = {
    "/": "a",
    "=": "b",
    "s": "c",
    "\"": "d",  // use \" for literal quote
    "@": "e",
    "#": "f"
    // Add more mappings here as needed
  };

  let output = "";
  for (let char of input) {
    output += decoder[char] || char; // fallback to original if not found
  }

  document.getElementById("output").textContent = output;
}
