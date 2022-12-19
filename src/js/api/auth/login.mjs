import * as storage from "../../storage/localstorage.mjs"

const method = "post";

export async function login(url, profile) {
    console.log('logging in...');
    
    const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
    });

    const {accessToken, ...user} = await response.json();

    if (response.status == 200) {
        storage.save("token", accessToken);
        storage.save("profile", user);
        window.location.replace("/home.html")
        return true;     
    }else {
        console.error("Failed to login!");
    }

    // localStorage.setItem("token", result.accessToken);
    return false;

}
