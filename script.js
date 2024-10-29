document.addEventListener("DOMContentLoaded", function() {
    fetch('posts.json')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById('posts');
            data.posts.forEach(post => {
                // Create article element
                const article = document.createElement('article');
                
                // Add title
                const title = document.createElement('h2');
                title.textContent = post.title;
                article.appendChild(title);
                
                // Add body
                const body = document.createElement('p');
                body.textContent = post.body;
                article.appendChild(body);
                
                // Create comments section
                const commentsSection = document.createElement('section');
                commentsSection.classList.add('comments');
                const commentsHeader = document.createElement('h3');
                commentsHeader.textContent = 'Comments:';
                commentsSection.appendChild(commentsHeader);
                
                post.comments.forEach(comment => {
                    const commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment');
                    commentDiv.textContent = `${comment.username}: ${comment.comment}`;
                    commentsSection.appendChild(commentDiv);
                });
                
                article.appendChild(commentsSection);
                postsContainer.appendChild(article);
            });
        })
        .catch(error => console.error('Error loading posts:', error));
});