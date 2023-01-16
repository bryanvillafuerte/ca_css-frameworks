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

    const json = await response.json();
    const {accessToken, ...user} = json;

    if (response.status == 200) {
        storage.save("token", accessToken);
        storage.save("profile", user);
        storage.save("accessToken",accessToken);
        storage.save("user", user);

             
        window.location.replace("/home.html")   
        return response;   
    } else {
        return false;
    }
    
}
