import { load } from "../storage/localstorage.mjs";
import { BASE_URL } from "../api/auth/constants.mjs";

const updateUrl = `/social/posts`;
const method = "put";

export async function updatePost(post) {
    const token = load("token");
    const updatePostUrl = `${BASE_URL}${updateUrl}/${post.id}`;

    const response = await fetch(updatePostUrl, {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(post),
    });
    const postResult = await response.json();
    return postResult
}