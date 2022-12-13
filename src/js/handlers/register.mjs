
import { register } from "../api/auth/register.mjs";
import { API_SOCIAL_URL } from "../api/auth/constants.mjs";

/**
 * API call to register new user
 * and login user automatically
 * @param {string} url
 * @param {object} userData
 * ```js
 * registerForm(registerUrl, options);
 * ```
 */

export function registerForm() {
    const form = document.querySelector("#registrationForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const profile = {
            name: name,
            email: email,
            password: password,
        };
        // Send it to API
        console.log(profile);
        register(API_SOCIAL_URL, profile);
    });

}

// email: "enirose@noroff.no"
// name: "Eni123"
// password: "enirose123"
// id: 49