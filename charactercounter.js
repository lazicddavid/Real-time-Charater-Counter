const textarea = document.getElementById("textarea");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining");
const maxLength = 50;

textarea.addEventListener("input", (e) => {
  const currentLength = e.target.value.lenght;
  total.textContent = currentLength;
  remaining.textContent = maxLength - currentLength;
});

textarea;
addEventListener;
maxLength;
