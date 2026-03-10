const toggleMode = document.getElementById("toggleMode");
const modeTitle = document.getElementById("modeTitle");
const primaryBtn = document.getElementById("primaryBtn");
const rightTitle = document.getElementById("rightTitle");
const rightText = document.getElementById("rightText");
const statusMsg = document.getElementById("statusMsg");

let isSignUp = false;

function setMode() {
  if (isSignUp) {
    modeTitle.innerText = "Sign Up";
    primaryBtn.innerText = "CREATE ACCOUNT";
    rightTitle.innerText = "Welcome Back!";
    rightText.innerText = "Switch back to Sign In to simulate another UI state.";
    toggleMode.innerText = "SIGN IN";
    statusMsg.innerText = "Mode: Sign Up (UI only) ✅";
  } else {
    modeTitle.innerText = "Sign In";
    primaryBtn.innerText = "SIGN IN";
    rightTitle.innerText = "Hello, Friend!";
    rightText.innerText = "Toggle the mode to simulate a simple UI interaction using JavaScript.";
    toggleMode.innerText = "SIGN UP";
    statusMsg.innerText = "Mode: Sign In (UI only) ✅";
  }
}

toggleMode.addEventListener("click", () => {
  isSignUp = !isSignUp;
  setMode();
});

primaryBtn.addEventListener("click", () => {
  statusMsg.innerText = "Clicked! (No backend — static demo) ⚙️";
});

setMode();

// Theme toggle (dark/light) + remember choice
const themeBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") document.body.classList.add("light");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
  });
}

// Footer year
const y = document.getElementById("year");
if (y) y.innerText = new Date().getFullYear();
