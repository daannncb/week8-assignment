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

## Reflections

After a brief chat with Bertie, I was reminded to get functionality working before getting too bogged down in styling. I'd previously put a column in my `comments` table for the post id, to get the relevant comments to appear beneath each post. In previous assignments, passing data like this had been a bit of trial and error, lots of googling, and a bit of LLM assisstance. This time, without really consciously doing it, it worked.

I think I've covered all of the user stories, and the edit comment part of the stretch. I could redirect that and polish it some more, but I would like to relax now.
This assignment went much better than the last one. I think that's because I didn't decide to do some nonsense with my tables, so getting data to and from supabase was infinitely easier, plus I had the knowledge from last week.

I would like to style more, but by the time I've got the logic done, there's not always much energy in the timeframe to style. But also more of the site styling than you think is deliberate, which might just be my poor tastes.

Post-deployment note: the user story to redirect to the view comment page is really terrible usability with the way I've built it. It could really do with a note saying "go back to post" and some distinction that you're on the lone-comment view of the post.

## References

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text/Wrapping_breaking_text

"cheaty" way of allowing images from outside sources:
https://nextjs.org/docs/messages/next-image-unconfigured-host

sorting date query: this was a faff
https://www.postgresql.org/docs/current/functions-formatting.html

In the above, right at the bottom of the page, I noticed this:
`to_char(current_timestamp, 'FMDay, FMDD  HH12:MI:SS')`
I have no proper understanding of what this does, but I tried figuring it out and ended up staring down the barrel of hours of reading about SQL format models in the oracle documentation and decided it was great that it worked, and moved on with my life.

`https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/Format-Models.html#GUID-22F2B830-261E-4BF0-91FB-6A1DAFC6D0A3`

My current working theory is that without the "Fill mode" on my to_char date query:
`SELECT post_id, title, body, image_src, image_alt, to_char(date, 'FMDay FMDDth Month YYYY') AS post_date FROM posts`

there are some trailing blanks causing issues; without FMDay FMDDth, it was telling me the 5th of October 2025 was a Thursday.
Feels great to solve problems though.

Had some fun figuring out dynamic links:
https://nextjs.org/docs/pages/api-reference/components/link#examples

https://www.w3schools.com/sql/sql_min_max.asp
