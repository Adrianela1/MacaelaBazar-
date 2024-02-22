const login = document.querySelector("#login");
const logout = document.querySelector("#logout");
const store = document.querySelector("#store");
const dropdown = document.querySelector(".dropstart");

// Cuando no ha iniciado sesión

if (localStorage.getItem("token")) {
    login.classList.add("d-none");
} else {
    dropdown.classList.add("d-none");
    store.classList.add("d-none");
    logout.classList.add("d-none");
}

logout.addEventListener("click", () => {
    localStorage.removeItem("token");
    // localStorage.clear();
});
