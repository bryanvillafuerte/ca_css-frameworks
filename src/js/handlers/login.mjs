
import { login } from "../api/auth/login.mjs";
import { API_LOGIN_URL } from "../api/auth/constants.mjs";

export function loginUser() {

    const form = document.querySelector("#loginForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const profile = {
            email: email,
            password: password,
        };
        // Send it to API
        login(API_LOGIN_URL, profile);
    });

}


// email: "enirose@noroff.no"
// name: "Eni123"
// password: "enirose123"
// id: 49
// accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksIm5hbWUiOiJFbmkxMjMiLCJlbWFpbCI6ImVua
