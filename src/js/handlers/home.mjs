import { createPost } from "../posts/create.mjs";
import { getPosts } from "../posts/getPosts.mjs";
import { SignOut } from "../storage/localstorage.mjs";
import { newProfileUser, tagElement } from "../functions/functions.mjs";
import { getPostByTagElement } from "../posts/getPostByTagElement.mjs";

export async function runHome() {
    let userPosts = [];
    let term = "";

    newProfileUser();

    // Get all post
    async function getAllPostsToHome() {
        userPosts = await getPosts();
        buildPostsHTML(userPosts);
    }
    

    function buildPostsHTML(posts) {
        const allPostsContainer = document.querySelector("#postsContainer");
        allPostsContainer.innerHTML = "";
        
        let sortedUserTags = [];

        posts.forEach(function (post) {
            const { id, author, title, body, media, tags } = post;
            
            // checking if post has image on their post
            let img ="";
            if  (media !== "" && media != null) {
                img = `<img class="mb-4 h-auto w-full" src="${media}">`;
            }

            // feching tags used by the user on their posts
            if (tags === false) {
                tags.map ((tag) => {
                    if (tag != "" && tag != null) {
                        const foundUserTag = sortedUserTags.find ((t) => {
                            return t.tag === tag;
                        });

                        if (foundUserTag != null) {
                            const value = object.keys(sortedUserTags).find((k) => {
                                return sortedUserTags[k].tag === tag;                                
                            });
                            sortedUserTags[value].total += 1;
                        } else {
                            sortedUserTags.push({tag: tag, total: 1 });
                        }
                    }
                });
            }

            allPostsContainer.innerHTML +=
            `<a href="post.html?id=${id}">
                <div class="row">
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

        if (tags === false) {
            sortedUserTags = sortedUserTags.sort((a, b) => {
                if (a.total > b.total) return -1;
                if (a.total > b.total) return 1;
                return 0;
            });
            const mainTags = sortedUserTags.slice(0, 3);
            const selectedTagElement = document.querySelector("#tagFilterBox");
            mainTags.forEach((tag) => {
                selectedTagElement.innerHTML += `<option value="${tag.tag}">${tag.tag}</option>`;
            });
        }
    }

    getAllPostsToHome();

    // Creating new post

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
            getAllPostsToHome();
        }));
    }

    createFormListener();

    // Filter option
    const filterTag = document.querySelector("#tagFilterBox");
    filterTag.onchange = function() {
        const selectedTagElement = filterTag.value;
        fetchPostByTagElement(selectedTagElement);
    };

    // Fetching posts by users tag
    async function fetchPostByTagElement(tag) {
        let queryParam ="";
        if (tag != 0) {
            queryParam = `&_tag=${tag}`;
        }

        const tagData = await getPostByTagElement(queryParam);
        userPosts = tagData;
        if (term != "") {
            const filteredSearchPosts = userPosts.filter((post) => { 
                const { title, author, body } = post;

                return (
                    title.toLowerCase().includes(term) ||
                    author.name.toLowerCase().includes(term) ||
                    (body != null && body.toLowerCase().includes(term))
                );
            });
            buildPostsHTML(filteredSearchPosts, true);
        } else {
            buildPostsHTML(userPosts, true);
        }
        
    }

    // Fetching posts or data from Search input
    const search = document.querySelector("#searchBar");
    search.oninput = function() {
        term = search.value.toLowerCase();
        if(term != "") {
            const filteredSearchPosts = userPosts.filter((post) => { 
                const { title, author, body } = post;

                return (
                    title.toLowerCase().includes(term)||
                    author.name.toLowerCase().includes(term)||
                    (body != null && body.toLowerCase().includes(term))
                );
            });
            buildPostsHTML(filteredSearchPosts, true);
        } else {
            buildPostsHTML(userPosts, true);
        }
    };

    // User log-out
    const SignOutBtn = document.querySelector("#signOut");
    SignOutBtn.onclick = SignOut;
}