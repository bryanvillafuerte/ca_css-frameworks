import { load } from "../storage/localstorage.mjs";
import { BASE_URL } from "../api/auth/constants.mjs";

const updateUrl = `/social/posts`;
const method = "get";

// fetching post list

export async function getPosts() {
    const token = load("token");
    const getPostUrl = `${BASE_URL}${updateUrl}`;

    const response = await fetch(getPostUrl, {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    return await response.json()
    // const postResult = await response.json();
    // return postResult
}

// Fetching specific post using id
export async function get_specificPost(id) {
    const token = load("token");
    const getPostUrl = `${BASE_URL}${updateUrl}/${id}`;

    const response = await fetch(getPostUrl, {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    return await response.json()
    // const postResult = await response.json();
    // return postResult
}