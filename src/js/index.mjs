import { registerForm } from "./handlers/register.mjs";
import { loginUser } from "./handlers/login.mjs";

const path = location.pathname;

if (path === '/index.html'){
    loginUser();
} else if (path === '/registration.html'){
    registerForm();
}