import globals from "../globals.css";
import pg from "pg";
import { db } from "@/utils/dbConnection";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function CommentForm({ params }) {
  async function handleSubmit(formData) {
    "use server";
    const post_id = await params;
    //!:::::::::::::::::::::::::::::
    //testing getting max_comment_id to pass highest value+1 to redirect path
    const commentIdQuery = await db.query(
      `SELECT MAX(comment_id) FROM comments WHERE post_id =${post_id}`
    );
    // console.log(await commentIdQuery); //had a bit of trouble here as I expected the output to be comment_id *maxValue*, but it was rows: [{max: *maxValue}]
    //const maxCommentId = await commentIdQuery.rows[0].comment_id;
    const maxCommentId = (await commentIdQuery.rows[0].max) + 1;
    console.log(maxCommentId);
    console.log("maxCommentId:", maxCommentId);
    //!:::::::::::::::::::::::::::::
    const userName = formData.get("commentAuthor");
    const commentBody = formData.get("commentBody");
    await db.query(
      `INSERT INTO comments (author, body, post_id) VALUES ($1, $2, $3)`,
      [userName, commentBody, post_id]
    );
    revalidatePath(`/blog/${post_id}/${maxCommentId}`);
    redirect(`/blog/${post_id}/${maxCommentId}`);
    //this is for the final part of the user stories. I have a route set up to view individual comments beneath the relevant post, and I think redirecting to that would go something like: pass comment_id with params into CommentForm in my [postId]>page.js, do some maths to figure out the largest comment_id value, pass that into the redirect link. Might try this if I have time, else I wanted to put this redirect in to hit the target, despite my app being more Manny's example site than the brief (users are to comment rather than post)
  }
  return (
    <div className="commentFormContainer">
      <form action={handleSubmit}>
        <fieldset className="fieldsetContainer">
          <legend className="legendText">Add a comment:</legend>
          <label
            htmlFor="commentAuthor"
            aria-required
            className="commentAuthorText"
          >
            Please enter your name:
          </label>
          <input
            type="text"
            name="commentAuthor"
            className="commentAuthorBox"
          />
          <label htmlFor="commentBody" className="commentBodyText">
            What would you like to say?
          </label>
          <input
            type="textArea"
            name="commentBody"
            aria-required
            className="commentBodyBox"
          />
          <button type="submit" className="button">
            Add Comment
          </button>
        </fieldset>
      </form>
    </div>
  );
}
