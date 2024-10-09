<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Laravel API Frontend</title>
</head>
<body>
    <div class="container">
        <h1 class="title">Laravel API Frontend</h1>
        
        <!-- Get User Form -->
        <form id="get-user-form" class="border">
            <h2>Get User</h2>
            <p class="min-text">Token</p>
            <input type="text" id="user-token" class="input-field" placeholder="Enter token" required>
            <button type="submit" class="green-button">Get User</button>
        </form>

<!-- Display user data -->
<div id="user-data" class="border" style="display: none;">
    <h2>User Details</h2>
    <p>Name: <span id="user-name"></span></p> <!-- Placeholder for user's name -->
    <p>Email: <span id="user-email"></span></p> <!-- Placeholder for user's email -->
</div>

<!-- Create Post Form -->
<form class="border" id="create-post-form">
    <h2>Create Post</h2>
    <p class="min-text">Title</p>
    <input type="text" id="post-title" class="input-field">

    <p class="min-text">Body</p>
    <textarea id="post-body" class="input-field" rows="4"></textarea>
    <button class="green-button" type="submit">Create</button>
</form>

<!-- Display Posts -->
<div id="posts-container" class="border" style="margin-top: 20px;">
    <h2>All Posts</h2>
    <!-- Posts will be dynamically inserted here -->
</div>

    <script src="js/app.js"></script>
</body>
</html>



