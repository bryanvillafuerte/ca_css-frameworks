// import { API_POST_URL } from "../api/auth/constants.mjs";
import { get_specificPost, updatePost } from "../posts/index.mjs";

export async function updateFormListener() {
    const form = document.querySelector("#updatePost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const button = form.querySelector("button");
        button.disabled = true;

        const post = await get_specificPost(id);

        form.title.value = post.title;
        form.body.value = post.body;
        form.tags.value = post.tags;
        form.media.value = post.media;

        button.disabled = false;

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

            post.id = id;
            post.tags = post.tags.split(",");
        


            // Send it to API
            updatePost(post);
        });
    }
    

}