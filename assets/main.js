const button = document.querySelector("#button");
button.addEventListener("click", () => {
  const copy = document.querySelector("#copy").value;
  const coller = document.querySelector("#coller").value;

  if (copy === coller) {
    alert("test passing");
  } else {
    alert("incorect");
  }
});
