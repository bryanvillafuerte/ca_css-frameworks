import { load } from "../storage/localstorage.mjs";
import { BASE_URL } from "../api/auth/constants.mjs";

const createPostUrl = `${BASE_URL}/social/posts`;
const method = "post";

export async function createPost(postData) {
    const token = load("token");

    const response = await fetch(createPostUrl, {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(postData),
    });
    const postResult = await response.json();
    console.log(postResult);
    return postResult
}