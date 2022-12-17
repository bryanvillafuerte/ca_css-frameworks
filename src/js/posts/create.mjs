import { load } from "../storage/localstorage.mjs";
import { BASE_URL } from "../api/auth/constants.mjs";

/**
 * Create a new post
 * @param {object} body
 * @returns
 */

const createPostUrl = `${BASE_URL}/social/posts`;
const method = "post";

export async function createPost(body) {
    const token = load("token");

    const response = await fetch(createPostUrl, {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body),
    });
    const postResult = await response.json();
    console.log(postResult);
    return postResult
}