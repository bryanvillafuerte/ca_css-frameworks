
const method = "post";

export async function login(url, profile) {

    const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
    });

    const result = await response.json();
    console.log(result);

    localStorage.setItem("token", result.accessToken);
}