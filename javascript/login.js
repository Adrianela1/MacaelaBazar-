const loginForm = document.querySelector("#login_form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
// const login = document.querySelector("#login");

const AUTH_END_POINT = "https://fakestoreapi.com/auth/login";

const getInputValue = (id) => document.querySelector(`#${id}`).value;

const authenticateUser = async (loginData) => {
    const response = await fetch(AUTH_END_POINT, {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return await response.json();
};

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userCredentials = {
        username: getInputValue("email"),
        password: getInputValue("password"),
    };

    await authenticateUser(userCredentials)
        .then((data) => {
            const token = data.token;
            localStorage.setItem("token", token);

            window.location.href = "/pages/cart.html";
        })
        .catch((error) => console.error("Error: ", error));
});
