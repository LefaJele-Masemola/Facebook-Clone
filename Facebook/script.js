document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const postList = document.getElementById('post-list');
    const storyList = document.getElementById('story-list');
    const accountIcon = document.getElementById('account-icon');
    const loginFormContainer = document.getElementById('login-form-container');

// Feed page new post form
const newPostForm = document.getElementById('newPostForm');
if (newPostForm) {
    const postsContainer = document.getElementById('postsContainer');

    newPostForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const postContent = document.getElementById('postContent').value;
        if (postContent.trim() === '') {
            alert('Post content cannot be empty');
            return;
        }

        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
        <img src="Pictures/8c1d2730-a2bc-49a0-b5eb-1abcbda204b1.JPG" alt="Profile Picture">
            <h3>${signup-name}</h3>
            <p>${postContent}</p>
        `;

        postsContainer.prepend(postElement);
        document.getElementById('postContent').value = '';
    });
}




    const samplePosts = [
        {
            author: 'Mpho Jiyane',
            content: 'This is my first post!',
            profilePicture: "Pictures/user3.jpg"
        },
        {
            author: 'Jane Smith',
            content: 'Loving the new Facebook clone website.',
            profilePicture: "Pictures/user2.jpg" 

        },
        {
            author: 'Alice Johnson',
            content: 'Hello everyone!',
            profilePicture:"Pictures/user1.jpg" 
        }
    ];

    const sampleStories = [
        {
            author: 'Mpho Jiyane',
            Image: "Pictures/user2.jpg",
            content: 'This is my story!',
            profilePicture: "Pictures/user3.jpg"
        },
       
        {
            author: 'Puseletso Wonka',
            content: 'Check out my new post! ' ,
            Image: "Pictures/post1.jpg",
            profilePicture: "Pictures/user3.jpg"
        }
    ];

    

    function displayPosts(posts) {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';

            const postHeader = document.createElement('div');
            const profilePicture = document.createElement('img');
            profilePicture.src = post.profilePicture;
            const postAuthor = document.createElement('h3');
            postAuthor.textContent = post.author;

            postHeader.appendChild(profilePicture);
            postHeader.appendChild(postAuthor);

            const postContent = document.createElement('p');
            postContent.textContent = post.content;

            postElement.appendChild(postHeader);
            postElement.appendChild(postContent);

            postList.appendChild(postElement);
        });
    }
    

    function displayStories(stories) {
        stories.forEach(story => {
            const storyElement = document.createElement('div');
            storyElement.className = 'story';

            const profilePicture = document.createElement('img');
            profilePicture.src = story.profilePicture;
            const storyAuthor = document.createElement('h3');
            storyAuthor.textContent = story.author;

            const storyContent = document.createElement('p');
            storyContent.textContent = story.content;

            const storyImage = document.createElement('img');
           storyImage.src = story.Image;
           storyImage.className = 'storyImage'; //class for styling
           




            storyElement.appendChild(profilePicture);
            storyElement.appendChild(storyAuthor);
            storyElement.appendChild(storyContent);
            storyElement.appendChild(storyImage);


            //storyList.appendChild(storyElement);
            
        });
    }

    let currentStoryIndex = 0;
    function slideStories() {
        const stories = document.querySelectorAll('.story');
        if (stories.length > 0) {
            storyList.style.transition = 'transform 0.60s ease';
            storyList.style.transform = `translateX(-${currentStoryIndex * 160}px)`;
            currentStoryIndex = (currentStoryIndex + 1) % stories.length;
        }
    }

// Get the video element
const video = document.getElementById('myVideo');

// Function to stop the video after 30 seconds
function stopVideoAfter30Seconds() {
    // Set a timeout to pause the video after 30 seconds 
    setTimeout(() => {
        video.pause();
    }, 30000); // 30000 milliseconds = 30 seconds
}

// an event listener to start the function when the video starts playing
video.addEventListener('play', stopVideoAfter30Seconds);

    


    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            alert(`Signed up with Name: ${name}, Email: ${email}`);

            signupForm.reset();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            //const name =document.getElementById('login-name').value;
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            alert(`Logged in with Email: ${email}`);

            window.location.href = 'feed.html';
        });
    }

    if (postList) {
        displayPosts(samplePosts);
    }

    if (storyList) {
        displayStories(sampleStories);
        setInterval(slideStories, 3000);
    }
    
    accountIcon.addEventListener('click', () => {
        loginFormContainer.style.display = loginFormContainer.style.display === 'none' ? 'block' : 'none';
    });
});


// Function to toggle between sign up and login forms
function toggleLoginForm() {
    const signupFormContainer = document.getElementById('signup-form-container');
    const loginFormContainer = document.getElementById('login-form-container');

    if (signupFormContainer.style.display === 'block' || signupFormContainer.style.display === '') {
        signupFormContainer.style.display = 'none';
        loginFormContainer.style.display = 'block';
    } else {
        signupFormContainer.style.display = 'block';
        loginFormContainer.style.display = 'none';
    }
}

// Initially display the sign-up form and hide the login form
document.getElementById('signup-form-container').style.display = 'block';
document.getElementById('login-form-container').style.display = 'none';


// Function to handle sign up form submission
function handleSignUp(event) {
    event.preventDefault();

    // Add your sign up logic here, e.g., validating inputs, storing user data

    alert('Signed up successfully!');
    navigateToFeed(); // Redirect to feed page after sign up
}

// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault();

    // Add your login logic here, e.g., validating credentials

    alert('Logged in successfully!');
    navigateToFeed(); // Redirect to feed page after login
}

// Function to navigate to the feed page
function navigateToFeed() {
    window.location.href = 'feed.html';
}

// Example function to fetch user data (simulated for demonstration)
function getUserData() {
    return {
        name: 'Lefa Jele-Masemola',
        email: 'john.doe@example.com',
        profilePicture: 'Pictures/8c1d2730-a2bc-49a0-b5eb-1abcbda204b1.JPG ' // Replace with actual path
    };
}

// Function to update profile information on the page
function updateProfileInfo() {
    const userData = getUserData();
    document.getElementById('profile-name').textContent = userData.name;
    document.getElementById('profile-picture').src = userData.profilePicture;

    // Update profile information on profile.html if needed
    const profileNameElement = document.getElementById('profile-name-profile');
    if (profileNameElement) {
        profileNameElement.textContent = userData.name;
    }
}

// Call updateProfileInfo() to display profile information when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateProfileInfo();
});


    // Function to handle login
function login() {
    const username = document.getElementById('username').value;

    if (username) {
        // Save username in local storage
        localStorage.setItem('username', username);

        // Display user information
        displayUserInfo(username);
    } else {
        alert('Please enter a username');
    }
}




// Profile page new post form
const newProfilePostForm = document.getElementById('newProfilePostForm');
if (newProfilePostForm) {
    const profilePostsContainer = document.getElementById('profilePostsContainer');

    newProfilePostForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const postContent = document.getElementById('profilePostContent').value;
        if (postContent.trim() === '') {
            alert('Post content cannot be empty');
            return;
        }

        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h3>Lefa Jele-Masemola</h3>
            <p>${postContent}</p>
        `;

        profilePostsContainer.prepend(postElement);
        document.getElementById('profilePostContent').value = '';
    });
}

