import { get_specificPost, removePost } from "../posts/index.mjs"
import { getUser } from "../storage/localstorage.mjs";
import { updatePost } from "../posts/index.mjs";
import { newProfileUser, tagElement } from "../functions/functions.mjs";
import { SignOut } from "../storage/localstorage.mjs";


export async function runSinglePost () {
    const queryString = document.location.search;
    const param = new URLSearchParams(queryString);
    let id = param.get("id");

    newProfileUser();


    async function getPost() {
        const postID = await get_specificPost(id);
        buildPostsHTML(postID);
    }

    function buildPostsHTML (post) {
        const allPostsContainer = document.querySelector("#postsContainer");
        const { author, title, body, media, tags } = post;

        allPostsContainer.innerHTML = "";

        // checking if user/s post has a media to display

        let img = "";
        if (media !== "" && media != null) {
            img = `<img class="mb-4" src="${media}">`;
        }
        
        const signedInUser = getUser();
        if (signedInUser.name === author.name) {
            const singlePostBtn = document.querySelector("#buttons");
            singlePostBtn.classList.remove("hidden");
        }

        allPostsContainer.innerHTML +=
        `<div class="row">
            <div class="col-lg-12 mt-3">
                <div class="card"> 
                    <div class="card-body mb-4">
                        <div class="justify-content  flex-start w-100">
                        <a href="profile.html?name=${author.name}">
                            <img class="rounded-circle shadow-1-strong me-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(29).webp" alt="avatar" width="60" height="60" />
                            <div>
                                <h6 class="fw-bold mb-1">${author.name}</h6>
                            </div>
                        </a>
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

    // updating/editing a post
    // const form = document.querySelector("#updatePost");
    // const editingBtn = document.querySelector("#editBtn");
    // const cancelBtn = document.querySelector("#cancel-Btn");

    // const url = new URL(location.href);
    // const id = url.searchParams.get("id");

    // editingBtn.onclick = function() {
    //     form.classList.remove("hidden");
    // };

    // cancelBtn.onclick = function(event) {
    //     event.preventDefault();
    //     form.classList.add("hidden");
    // };


    async function updateFormListener() {
        const form = document.querySelector("#updatePost");

        if (form) {
            const button = form.querySelector("button");
            button.disabled = true;

            const post = await get_specificPost(id);

            form.title.value = post.title;
            form.body.value = post.body;
            form.tags.value = post.tags;
            form.media.value = post.media;

            button.disabled = false;

            form.addEventListener("submit", (async function (event) {
                event.preventDefault();
                const form = event.target;
                const title = form.title.value;
                const body = form.body.value;
                const tags = form.tags.value;
                const media = form.media.value;
                const post = {
                    title: title,
                    body: body,
                    tags: tags,
                    media: media,
                };

                post.id = id;
                post.tags = post.tags.split(",");
            
                // Send it to API
                
                await updatePost(post, id);
                runSinglePost();
                // getPost();

            }));
            
        }
        // form.reset();

        
    }
    updateFormListener();
    
    
    

    // delete button to delete a post
    const deletePostBtn = document.querySelector("#deleteBtn");
    deletePostBtn.onclick = async function() {
        const postID = await removePost(id);
        if (postID === 204) {
            window.location.replace("/home.html");
        } else {
            console.log(error);
        }
    };



    
    // user sign-out
    const SignOutBtn = document.querySelector("#signOut");
    SignOutBtn.onclick = SignOut;
   
}   






