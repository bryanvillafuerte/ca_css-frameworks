import { createPost } from "../posts/create.mjs";
import { getPosts } from "../posts/getPosts.mjs";
import { userNotAuthenticate, newProfileUser } from "../functions/functions.mjs";
import { SignOut } from "../storage/localstorage.mjs";


export async function runHome() {
        // userNotAuthenticate();
    // newProfileUser();

    let userPosts = [];

    // Get all post
    async function getAllPosts() {
        console.log('getAllPosts()');

        userPosts = await getPosts();

        buildPostsHTML(userPosts);
    }

    function buildPostsHTML(posts) {
        const allPostsContainer = document.querySelector("#postsContainer");
        allPostsContainer.innerHTML = "";
        
        let sortedTags;

        posts.forEach(function (post) {
            const { id, author, title, body, media, tags } = post;
            
            let img ="";
            if  (media !== "" && media != null) {
                img = `<img class="mb-4" src="${media}">`;
            }

            allPostsContainer.innerHTML +=
                ` <a href="single.html?id=${id}
                <div class="d-flex flex-start w-100">
                    <img class="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(29).webp" alt="avatar" width="60" height="60" />
                    <div>
                        <h6 class="fw-bold mb-1">${author.name}</h6>
                    </div>
                </div>

                <h6 class="fw-bold mb-1">${title}</h6> 
                <p class="mt-3 mb-4 pb-2">${body}</p>
                <p class="mt-3 mb-4 pb-2">${img}</p>

                <div class="small d-flex justify-content-start">${tags}      
                </div>

                <div class="small d-flex justify-content-start">
                    <a href="#!" class="d-flex align-items-center me-3">
                        <i class="far fa-thumbs-up me-2"></i>
                        <p class="mb-0">Like</p>
                    </a>
                </div>
            </a> `;

        });
    }

    getAllPosts();

    async function createFormListener() {

        const form = document.querySelector("#createPost");

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
            post.tags = post.tags.split(",");
            // Send it to API
            await createPost(post);
            form.reset();
            getAllPosts();
        }));
    }


    createFormListener();    

    // User log-out
    const SignOutBtn = document.querySelector("#signOut");
    SignOutBtn.onclick = SignOut;
}