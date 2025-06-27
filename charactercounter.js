const textarea = document.getElementById("textarea");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining");
const maxLength = textarea.maxLength;

textarea.addEventListener("input", () => {
  const currentLength = textarea.value.length;
  total.textContent = currentLength;
  remaining.textContent = maxLength - currentLength;
});
