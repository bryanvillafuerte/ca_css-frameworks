import { load } from "../storage/localstorage.mjs";

// export function userAuthenticate() {
//     const token = localStorage.getItem("accessToken");
//     if (token != null) {
//         window.location.replace("/index.html")
//         alert ("Please login with your user account")
//     }
// }

export function userNotAuthenticate() {
    const token = localStorage.getItem("accessToken");
    if (token == null) {
        window.location.replace("/index.html")
        aler ("Please login with your user account")
    }
}

export function newProfileUser () {
    const user = load();
    const profilePage = document.querySelector("#profilePage");
    profilePage.href += `?name=${user.name}`;
}