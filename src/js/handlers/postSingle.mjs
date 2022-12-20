import { get_specificPost } from "../posts/index.mjs"
import { getUser } from "../storage/localstorage.mjs";

export async function runSinglePost () {
    const queryString = document.location.search;
    const param = new URLSearchParams(queryString);
    const id = param.get("id");

    async function getPost() {
        postID = await get_specificPost(id);
        buildPostsHTML(postID);
    }

    function buildPostsHTML (post) {
        const allPostsContainer = document.querySelector("#postContainer");
        const { author, title, body, media, tags } = post;

        allPostsContainer.innerHTML = "";

        let img = "";
        if (media !== "" && media != null) {
            img = `<img class="mb-4" src="${media}">`;
        }
        
        const signedInUser = getUser();
        if (signedInUser.name === author.name) {
            const singlePostBtn = document.querySelector("#btns");
            singlePostBtn.classList.remove("hidden");
        }

        allPostsContainer.innerHTML +=
        `<div class="row">
            <div class="col-lg-12 mt-3">
                <div class="card"> 
                    <div class="card-body mb-4">
                        <div class="justify-content  flex-start w-100">
                            <img class="rounded-circle shadow-1-strong me-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(29).webp" alt="avatar" width="60" height="60" />
                            <div>
                                <h6 class="fw-bold mb-1">${author.name}</h6>
                            </div>
                        </div>  

                        <h6 class="fw-bold mb-1">${title}</h6> 
                        p class="mt-3 mb-4 pb-2">${body}</p>
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
        </div>`;        
                
        const titleForm = document.querySelector("#title");
        const bodyForm = document.querySelector("#body");
        const mediaForm = document.querySelector("#media");
        const tagsForm = document.querySelector("#tags");

        titleForm.value = title;
        bodyForm.value = body;
        mediaForm.value = media,
        tagsForm.value = tags.join(",");
    }
    getPost();
}   
console.log(runSinglePost);






