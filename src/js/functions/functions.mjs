import { getUser } from "../storage/localstorage.mjs";

export function userAuthenticate() {
    const token = localStorage.getItem("accessToken");
    if (token != null) {
        window.location.replace("/home.html")
    };
};

export function userNotAuthenticate() {
    const token = localStorage.getItem("accessToken");
    if (token == null) {
        window.location.replace("/index.html")
        alert ("Please login with your user account")
    };
};

export function newProfileUser () {
    const user = getUser();
    const profilePage = document.querySelector("#profilePage");
    profilePage.href += `?name=${user.name}`;
};


export function tagElement (tags) {
    let tagtemplate = "";
    tags.forEach ((tag) => {
        tagtemplate +=
        `<div class="btn btn-primary-login mt-4 mb-3 ps-8 pe-8 shadow text-uppercase"> #${tag} </div>`;
    });
    return tagtemplate;
};