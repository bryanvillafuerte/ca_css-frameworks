import { load } from "../storage/localstorage.mjs";
import { BASE_URL } from "../api/auth/constants.mjs";

const updateUrl = `/social/posts`;
const method = "get";

// fetching post list

/**
 * Get all posts from user
 * @returns
 */

export async function getPosts() {

    const token = load("token");

    const getPostUrl = `${BASE_URL}${updateUrl}?_author=true&_reactions=true`;

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