import { load } from "../storage/localstorage.mjs";
import { BASE_URL } from "../api/auth/constants.mjs";

/**
 * Edit/Update a post
 * @param {object} body
 * @returns
 */

const updateUrl = `/social/posts`;
const method = "put";

export async function updatePost(body, id) {
    const token = load("token");
    const updatePostUrl = `${BASE_URL}${updateUrl}/${id}`;

    const response = await fetch(updatePostUrl, {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body),
    });
    const postResult = await response.json();
    return postResult

}