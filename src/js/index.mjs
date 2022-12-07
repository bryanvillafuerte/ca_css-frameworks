import { registerForm } from "./handlers/register.mjs";
import { loginUser } from "./handlers/login.mjs";
import * as post from "./posts/index.mjs"
import { getPosts } from "./posts/index.mjs";

const path = window.location.pathname;

if (path === '/index.html'){
    loginUser();
} else if (path === '/registration.html'){
    registerForm();
}

// post.createPost()
// post.updatePost()
// post.removePost()
// post.getPosts().then(console.log)
// post.get_specificPost()

post.get_specificPost(614).then(console.log)