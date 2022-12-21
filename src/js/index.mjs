// import { registerForm } from "./handlers/register.mjs";
// import { loginUser } from "./handlers/login.mjs";
// import { homePage } from "./handlers/homePage.mjs";

import * as handlerListener from "./handlers/index.mjs"

window.handlerListener = handlerListener;

const path = window.location.pathname;

if (path === '/index.html' || path === '/') {
    handlerListener.loginUser();
} else if (path === '/registration.html'){
    handlerListener.registerForm();
} else if (path === '/home.html'){
    handlerListener.runHome();
    // handlerListener.createFormListener();
} else if (path === '/post.html'){
    // handlerListener.updateFormListener();
    handlerListener.runSinglePost();
} else if (path === '/profile.html'){
    handlerListener.runProfilePage();
}
