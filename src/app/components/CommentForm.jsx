import CommentFormStyles from "./CommentFormStyles.css";
import globals from "../globals.css";
import pg from "pg";
import { db } from "@/utils/dbConnection";
// import { redirect } from "next/navigation";
// import { revalidatePath } from "next/cache";

export default function CommentForm({ params }) {
  async function handleSubmit(formData) {
    "use server";
    const post_id = await params;
    const userName = formData.get("commentAuthor");
    const commentBody = formData.get("commentBody");
    await db.query(
      `INSERT INTO comments (author, body, post_id) VALUES ($1, $2, $3)`,
      [userName, commentBody, post_id]
    );
  }
  return (
    <div id="commentFormContainer">
      <form action={handleSubmit}>
        <fieldset id="fieldsetContainer">
          <legend>Add a comment:</legend>
          <label htmlFor="commentAuthor" aria-required id="commentAuthorText">
            Please enter your name:
          </label>
          <input type="text" name="commentAuthor" id="commentAuthorBox" />
          <label htmlFor="commentBody" id="commentBodyText">
            What would you like to say?
          </label>
          <input
            type="textArea"
            name="commentBody"
            aria-required
            id="commentBodyBox"
          />
          <button type="submit" className="button">
            Add Comment
          </button>
        </fieldset>
      </form>
    </div>
  );
}
