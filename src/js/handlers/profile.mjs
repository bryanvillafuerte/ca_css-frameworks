import { getUserPosts } from "../posts/getUserPosts.mjs";
import { getProfile } from "../posts/getProfile.mjs";
import { SignOut } from "../storage/localstorage.mjs";
import { newProfileUser, tagElement } from "../functions/functions.mjs";

export async function runProfilePage()  {
    const  queryString = document.location.search;
    const param = new URLSearchParams(queryString);
    let name = param.get("name");

    newProfileUser();

    //fetching user profile
    async function getPostProfile() {
        const postData = await getProfile(name);
        userProfilePage(postData)
    }
    getPostProfile();

    // user info
    async function userProfilePage(userInfoData) {
        const { name, email } = userInfoData;
        const userProfileName = document.querySelector("#user-Name");
        const userProfileEmail = document.querySelector("#user-Email");

        userProfileName.innerHTML = name;

        userProfileEmail.innerHTML = email;
    }

    // Getting/Fetching user's post by name
    async function  buildUserProfileHTML () {
        const postInfo = await getUserPosts(name);

        // users posts data into profile page

        const singleUserPosts = document.querySelector("#profilePostContainer");
        singleUserPosts.innerHTML= "";

        postInfo.forEach (function (post) {
            const { id, title, body, media, tags } = post;

            let img = "";
            if (media != "" && media != null) {
                img = `<img class="mb-4" src="${media}">`;
            }
        

            singleUserPosts.innerHTML +=
            `<a href="post.html?id=${id}">
                <div class="row">
                    <div class="col-lg-12 mt-3">
                        <div class="card"> 
                            <div class="card-body mb-4">
                                <div class="justify-content  flex-start w-100">
                                    <img class="rounded-circle shadow-1-strong me-3"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(29).webp" alt="avatar" width="60" height="60" />
                                </div>  
                                <h6 class="fw-bold mb-1">${title}</h6> 
                                <p class="mt-3 mb-4 pb-2">${body}</p>
                                <p class="mt-3 mb-4 pb-2">${img}</p>

                                <div class="small d-flex justify-content-start">${tagElement(tags)}      
                                </div>

                                <div class="small d-flex justify-content-start">
                                    <a href="#!" class="d-flex align-items-center me-3">
                                        <i class="far fa-thumbs-up me-2"></i>
                                        <p class="mb-0">Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>`;
        });       
    }
    buildUserProfileHTML();
    

    // User log-out
    const SignOutBtn = document.querySelector("#signOut");
    SignOutBtn.onclick = SignOut;
}   