const btn = document.getElementById("toggle");
const pass = document.getElementById("password");







btn.addEventListener("click", () => {
  const show = pass.type === "password";
  pass.type = show ? "text" : "password";
  btn.textContent = show ? "hide" : "show";
});
