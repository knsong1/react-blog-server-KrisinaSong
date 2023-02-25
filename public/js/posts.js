// document.addEventListener("DOMContentLoaded", getPosts)

// async function getPosts() {
//     const response = await fetch('/list-posts')
//     const post  = await response.json();
//     const postInfo = post
//     console.log(postInfo, "posts listed")

//     const htmlString = '';

//     for(i = 0; i < post.length; i++) {
//         htmlString += `
        
//         <label for="userName">${post[i].title}</label><br>
//        <p> ${post[i].post} </p>
//         <input type="submit" value="Delete" id="delete-post">
//         ` 
//     }

//     document.getElementById('newPosts').innerHTML = htmlString;

// }

// function stringifyPostData(fd) {
//     const data = {
//         post: fd.get('post'), 
//         favorites: fd.get('favorites'),
//         title: fd.get('title')

//     };
//     return JSON.stringify(data);
// }


// const handlePost = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     const stringified = stringifyFormData(data);
//     const response = await fetch('/posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: stringified,
//     })
//         window.location.href="/userspage"
// };

// const newPost = document.getElementById('add-postBtn');
// newPost.addEventListener("submit", handlePost)


// const handleDelete = async (e) => {
//     console.log("I made it here")
//     e.preventDefault();
//         console.log(e.target.id);
//         const response = await fetch(`/delete-posts/${e.target.id}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ id: e.target.id }),//only listens to this certain id for the click
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log('Success:', data);
//                 setTimeout(function(){window.location.reload();},10)
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
// };


// const deletedPost = document.getElementById('delete-post');
// deletedPost.addEventListener("submit", handleDelete)

