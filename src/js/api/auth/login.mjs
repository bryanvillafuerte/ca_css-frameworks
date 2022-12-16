import * as storage from "../../storage/localstorage.mjs"

const method = "post";

export async function login(url, profile) {
    const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
    });

    const {accessToken, ...user} = await response.json();

    // localStorage.setItem("token", result.accessToken);
    
    storage.save("token", accessToken)

    storage.save("profile", user)

    alert("You are now Logged in")
}
