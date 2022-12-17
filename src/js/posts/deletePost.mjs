import { load } from "../storage/localstorage.mjs";
import { BASE_URL } from "../api/auth/constants.mjs";

/**
 * Deleting a post
 * @param {string} id
 */

const updateUrl = `/social/posts`;
const method = "delete";

export async function removePost(id) {
    const token = load("token");
    const removePostUrl = `${BASE_URL}${updateUrl}/${id}`;

    const response = await fetch(removePostUrl, {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const postResult = await response.json();
    return postResult
}