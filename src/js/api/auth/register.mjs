/**
 * Register user 
 * @param {string} url
 * @param {object} profile
 * @returns
 */

const method = "post";

export async function register(url, profile) {

    const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
    });

    const result = await response.json();
    alert("You are now registered")
    return result

}