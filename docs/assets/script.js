
let adminClickCount = 0;

function logoClicks() {
  adminClickCount++;
  if (adminClickCount >= 5) {
    alert("Admin access triggered.");
  }
}

function loadVideo(url) {
  document.getElementById("ytplayer").src = url;
}

// Encrypt function (basic hash)
function hash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function register() {
  const user = document.getElementById("register-username").value;
  const pass = document.getElementById("register-password").value;
  if (user && pass) {
    localStorage.setItem("user_" + user, hash(pass));
    alert("Registered successfully!");
    window.location.href = "index.html";
  } else {
    alert("Fill in all fields.");
  }
}

function login() {
  const user = document.getElementById("login-username").value;
  const pass = document.getElementById("login-password").value;
  if (user && pass) {
    const stored = localStorage.getItem("user_" + user);
    if (stored && stored == hash(pass)) {
      localStorage.setItem("loggedInUser", user);
      window.location.href = "site.html";
    } else {
      alert("Invalid credentials.");
    }
  } else {
    alert("Enter both fields.");
  }
}
