// export function postTemplateA(postData) {
//     return `<div class="post">${postData.title}</div>`
// }

// // export function postTemplateB(postData) {
// //     const post = document.createElement("div");
// //     post.classList.add("post");
// //     post.innerText = postData.title;

// //     if(postData.media) {
// //         const img = document.createElement('img');
// //         img.src = postData.media;
// //         img.alt = `Image from ${postData.title}`;
// //         post.append(img)
// //     }
// //     return post;
// // }
// export function postTemplatePosts(postData) {
//     const post = document.createElement("div");
//     post.classList.add("mainpost", "container-fluid");
//     post.innerHTML = `<a href="post.html?id=${postData.id}"><h2>${postData.title}</h2></a>`;
//     const body = document.createElement("p");
//     body.innerHTML = `<u>Body:</u> ${postData.body}`;
//     post.append(body);
    
//     if(postData.media) {
//         const img = document.createElement('img');
//         img.src = postData.media;
//         img.alt = `Image from ${postData.title}`;
//         post.append(img)
//     }

//     return post;
// }

// export function renderPostTemplate(postData, parent) {
//     // parent.innerHTML = postTemplateA(postData)
//     parent.append(postTemplatePosts(postData));
// }

// export function renderPostTemplates(postDataList, parent) {
//      const postHTMLElements = postDataList.map(postTemplatePosts);
//     parent.append(...postHTMLElements);
// }

