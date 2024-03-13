let btn = document.getElementById("btn");
let output = document.querySelector(".output");

let quote = [
  "If you want to build a ship, dont drum up the wood and launch it. Write the code.",
  "The only person who knows what love is is someone who loves.",
  "You can't have everything in life; you either have to die for your ideas or live in them.",
];

btn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * quote.length);
  output.innerHTML = `<p>${quote[randomNumber]}</p>`;
});
