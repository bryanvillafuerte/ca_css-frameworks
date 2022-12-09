import { registerForm } from "./handlers/register.mjs";
import { loginUser } from "./handlers/login.mjs";

import * as handlerListener from "./handlers/index.mjs"
import * as templates from "./templates/index.mjs"
import * as postMethod from "./posts/index.mjs"


const path = window.location.pathname;

if (path === '/index.html') {
    handlerListener.loginUser();
} else if (path === '/registration.html'){
    handlerListener.registerForm();
} else if (path === '/post/create/'){
    handlerListener.createFormListener();
} else if (path === '/post/edit/'){
    handlerListener.updateFormListener();
}

// (fetching specific post)
// async function testTemplate(){
//     const posts = await postMethod.getPosts();
//     const post = posts[46] get a specific post
//     const post = posts.pop (get/fetch a ramdom post)
//     const container = document.querySelector("#post")
//     renderPostTemplate(post, container)
// }

// testTemplate ()


// (FETCHING LIST ITEMS)
async function testTemplate(){
    const posts = await postMethod.getPosts();
    const container = document.querySelector("#posts")
    templates.renderPostTemplates(posts, container)
}

testTemplate ()