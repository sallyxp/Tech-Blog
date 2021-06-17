async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="edit-post-title"]').value;
  const post_content = document.querySelector('input[name="edit-post-body"]').value;
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

  const response = await fetch(`/dashboard/edit/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
          title,
          description
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert('Failed to update post');
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);