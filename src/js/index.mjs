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
} else if (path === '/home.html' || path === '/profile.html'){
    handlerListener.runHome();
} else if (path === '/post.html' || path === '/post/edit/'){
    handlerListener.updateFormListener();
    handlerListener.runSinglePost();
} 
