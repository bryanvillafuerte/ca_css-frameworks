
const method = "post";

export async function register(url, profile) {

    const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
    });

    const json = await response.json();
    console.log(json);

}