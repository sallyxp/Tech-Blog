async function newFormHandler(event) {
  event.preventDefault();

//   const title = document.querySelector('input[name="post-title"]').value;
//   const description = document.querySelector('textarea[name="post-desc"]').value;
//   console.log("inside add-post.js");
  
//   const response = await fetch(`/api/posts`, {
//     method: 'POST',
//     body: JSON.stringify({
//       title,
//       description,
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   if (response.ok) {
//     document.location.replace('/dashboard');
//   } else {
//     alert(response.statusText);
//   }
// }


const title = document.querySelector('input[name="post-title"]').value;
const description = document.querySelector('textarea[name="post-desc"]').value;

const response = await fetch(`/api/posts`, {
  method: 'POST',
  body: JSON.stringify({
    title,
    description
  }),
  headers: {
    'Content-Type': 'application/json'
  }
});

if (response.ok) {
  document.location.replace('/dashboard');
} else {
  alert(response.statusText);
}
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);