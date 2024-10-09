document.addEventListener("DOMContentLoaded", function () {
    const getUserForm = document.getElementById('get-user-form');
    const tokenInput = document.getElementById('user-token');
    const userNameSpan = document.getElementById('user-name');
    const userEmailSpan = document.getElementById('user-email');
    const userDataDiv = document.getElementById('user-data');
    const postsContainer = document.getElementById('posts-container');

    // Fetch all posts on page load
    fetchPosts(); 

    getUserForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const token = tokenInput.value;
        if (!token) {
            alert('Please enter a token.');
            return;
        }

        // Fetch user data
        fetch('http://127.0.0.1:8000/api/user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            return response.json();
        })
        .then(data => {
            userNameSpan.textContent = data.name;
            userEmailSpan.textContent = data.email;
            userDataDiv.style.display = 'block';
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
    });

    function fetchPosts() {
        fetch('http://127.0.0.1:8000/api/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            return response.json();
        })
        .then(posts => {
            // Clear existing posts
            postsContainer.innerHTML = '';

            // Display each post
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <p><strong>Author:</strong> ${post.user.name}</p>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
    }

    const createPostForm = document.getElementById('create-post-form');
    const postTitleInput = document.getElementById('post-title');
    const postBodyInput = document.getElementById('post-body');

    createPostForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const postTitle = postTitleInput.value;
        const postBody = postBodyInput.value;

        if (!postTitle || !postBody) {
            alert('Please fill in both fields.');
            return;
        }

        const token = tokenInput.value;

        // Send POST request to create a post
        fetch('http://127.0.0.1:8000/api/posts', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: postTitle,
                body: postBody,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create post');
            }
            return response.json();
        })
        .then(data => {
            alert('Post created successfully!');
            postTitleInput.value = '';  // Clear input
            postBodyInput.value = '';   // Clear input
            fetchPosts(); // Refresh posts
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
    });
});
