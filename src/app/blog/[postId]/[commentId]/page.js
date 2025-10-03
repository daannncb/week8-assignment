import { db } from "@/utils/dbConnection";
import Image from "next/image";
import CommentForm from "@/app/components/CommentForm";
import DeleteComment from "@/app/components/DeleteComment";
import globals from "@/app/globals.css";

export default async function PostAndComment({ params }) {
  const post_id = (await params).postId;
  const comment_id = (await params).commentId;
  console.log("postId", post_id);
  console.log("commentID", comment_id);

  const res = await db.query(
    `SELECT title, body, image_src, image_alt, to_char(date, 'FMDay FMDDth Month YYYY') AS post_date FROM posts WHERE post_id = ${post_id}`
  );

  const cres = await db.query(
    `SELECT comment_id, author, body FROM comments WHERE comment_id = $1`,
    [comment_id]
  );
  const comments = cres.rows;

  const postData = res.rows[0];
  return (
    <div className="{}">
      <h1>
        {postData.title}
        {postData.post_date}
      </h1>
      <Image
        src={postData.image_src}
        alt={postData.image_alt}
        height={500}
        width={500}
      />
      <p>{postData.body}</p>
      <div className="commentContainer">
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <h1>{comment.author} says:</h1>
              <p>{comment.body}</p>
              <DeleteComment params={comment.comment_id} />
            </div>
          );
        })}
      </div>
      <CommentForm params={post_id} />
    </div>
  );
}

// this page is basically the same as /blog/{postId}, but the comment query is changed to WHERE comment_id

// i am convinced there would be a nicer way than just requerying the db for the data, and reusing the page instead; a state-based conditional render on the "View comment"? state=commentId etc
