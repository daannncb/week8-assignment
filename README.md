## User Stories

🐿️ As a user, I want to view all posts with options to sort them in ascending or descending order so that I can easily find content based on my preferences.
🐿️ As a developer, I want to design a SQL schema that includes a posts table and a comments table, ensuring that comments are correctly associated with the corresponding post ID.
🐿️ As a user, I want to be able to delete posts using a delete button on each post’s page so that I can manage or remove my content from the database.
🐿️ As a user, I want to add comments on individual posts using a user-friendly form.
🐿️ As a user, I want to comment on posts directly on their dedicated pages so that my interactions are contextually tied to the content I view.
🐿️ As a user, I want to be automatically redirected to the posts page after creating a new post so I can immediately see my content in the context of all posts.
Requirements
🎯 Display all posts on the page, with an option to sort them in ascending or descending order.
🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
Please submit your database schema, as is mentioned in the submission instructions.
🎯 Create a delete button on posts that allows users to delete the post from the database.
🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).
🎯 Add a redirect when a user creates a post to redirect them to the posts page.

## Stretch User Stories

🐿️ As a user, I want to categorise my posts during creation so that I can organise my posts and browse other posts by category.
🐿️ As a user, I want to edit my posts on a dedicated route so that I can easily modify my posts.
🐿️ As a user, I want to edit my comments on a dedicated route so that I can revise my feedback.
Stretch Requirements
🏹 Implement a select input (or similar mechanism) that allows users to categorise posts during creation, storing them in their own table in the database. Ensure appropriate routing for categories, with endpoints such as /categories and /categories/:id to enable users to browse and interact with posts by category.
🏹 Create an edit functionality accessible via /posts/:id/edit, which pre-fills a form for post data. Create a working PUT route to update the post in the database.
🏹 Develop an edit comment feature accessible via /posts/:id/comments/:id/edit, which pre-fills a form for comment data. Create a working PUT route to update the comment in the database.
