
// import { API_POST_URL } from "../api/auth/constants.mjs";
import { createPost } from "../posts/index.mjs";

export function createFormListener() {
    const form = document.querySelector("#createPost");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const body = form.body.value;
        const tags = form.tags.value;
        const media = form.media.value;
        const post = {
            title: title,
            body: body,
            tags: tags,
            media: media,
        };
        post.tags = post.tags.split(",");
        // Send it to API
        createPost(post);
    });

}