import { load } from "../storage/localstorage.mjs";
import { BASE_URL } from "../api/auth/constants.mjs";

const updateUrl = `/social/posts`;
const method = "get";

// Fetching specific post using id
/**
 * 
 * @param {string} id 
 * @returns 
 */
export async function get_specificPost(id) {
    const token = load("token");
    const getPostUrl = `${BASE_URL}${updateUrl}/${id}?_author=true&_reactions=true`;
    
    const response = await fetch(getPostUrl, {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    // const json = await response.json();
    const postResult = await response.json();
    return postResult
    
}
