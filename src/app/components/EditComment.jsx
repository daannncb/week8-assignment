import { db } from "@/utils/dbConnection";
import { serverHooks } from "next/dist/server/app-render/entry-base";
import Alert from "react";

export default async function EditComment({ props }) {
  const comment_id = (await props).comment_id;
  //   const post_id = (await props).post_id;
  const commentQuery = await db.query(
    `SELECT author, body FROM comments WHERE comment_id = ${comment_id}`
  );
  //little note; I was initially selecting "(author, body)" and getting [{row: ('value1', 'value2')}], which I don't have the wherewithal to turn into variables with my knowledge. Turns out you have to state your columns without brackets to retain the fieldname!

  const currentBody = commentQuery.rows[0].body;
  //   const currentAuthor = commentQuery.rows[0].author;

  async function handleSubmit(formData) {
    "use server";
    const newBody = formData.get("newBody");
    console.log("new body", newBody);
    await db.query(
      `UPDATE comments SET body = $1 WHERE comment_id = ${comment_id}`,
      [newBody]
    );
    // <Alert severity="success">Edit was submitted!</Alert>; I wanted an alert to show on submit but I don't think Next likes browser alerts, and I was faffing a lot with this.
  }

  return (
    <form action={handleSubmit}>
      <fieldset className="fieldsetContainer">
        <legend className="legendText">Edit comment:</legend>
        <label htmlFor="newBody">Change your text:</label>
        <input
          type="textArea"
          name="newBody"
          className="commentTextArea"
          defaultValue={currentBody}
        />
        <button type="submit" className="button">
          Submit edit
        </button>
      </fieldset>
    </form>
  );
}
