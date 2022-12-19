import { load } from "../storage/localstorage.mjs";
import { BASE_URL } from "../api/auth/constants.mjs";

const updateUrl = `/social/posts`;
const method = "get";

// fetching post list

/**
 * Get user posts by tag
 * @param {string} queryParam
 * @returns
 */

export async function getPostByTagElement(queryParam) {

    const token = load("token");

    const getPostUrl = `${BASE_URL}${updateUrl}?_author=true&reactions=true${queryParam}`;

    const response = await fetch(getPostUrl, {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    // const json = await response.json();
    const postResult = await response.json();
    return postResult
}