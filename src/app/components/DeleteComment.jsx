import Link from "next/link";
import { db } from "@/utils/dbConnection";
import globals from "../globals.css";

export default function DeleteComment({ params }) {
  async function deleteComment(formData) {
    "use server";
    const comment_id = await params;
    console.log("commentid:", comment_id);
    console.log("formData:", formData);
    await db.query(`DELETE FROM comments WHERE comment_id = $1`, [comment_id]);
  }
  return (
    <>
      <form action={deleteComment}>
        <button type="submit" className="bg-red-700 px-2 hover:bg-red-900">
          Delete Comment
        </button>
      </form>
    </>
  );
}

//! actually delete the comments, not set post_id null
// delete button goes to /blog/1/delete:commentid
//chatting with Manny, I decided to go with: delete button links to /delete comment route, route contains `DELETE * From comments WHERE comment_id = comment_id

// but can I not just set the button in a form with action{deleteComment?} like I have with the formData for adding comments? This seems much simpler
