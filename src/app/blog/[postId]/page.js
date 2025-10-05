//! Single blog post
import pg from "pg";
import { db } from "@/utils/dbConnection";
import CommentForm from "@/app/components/CommentForm";
import Image from "next/image";
import DeleteComment from "@/app/components/DeleteComment";
import Link from "next/link";
import globals from "@/app/globals.css";

export default async function BlogPosts({ params }) {
  const post_id = (await params).postId;
  const res = await db.query(
    `SELECT title, body, image_src, image_alt, to_char(date, 'FMDay FMDDth Month YYYY') AS post_date FROM posts WHERE post_id = ${post_id}`
  );

  const postData = res.rows[0];

  const cres = await db.query(
    `SELECT comment_id, author, body FROM comments WHERE post_id = $1`,
    [post_id]
  );
  const comments = cres.rows;

  return (
    <div className="{}">
      <div className="postBody">
        <div className="postHeader">
          <h1>{postData.title}</h1>
          <h1>{postData.post_date}</h1>
        </div>
        <div className="imageBodyContainer">
          <Image
            src={postData.image_src}
            alt={postData.image_alt}
            height={500}
            width={500}
            className="postImage"
          />
          <p className="postBody">{postData.body}</p>
        </div>
      </div>
      <div className="allCommentContainer">
        <h1 className="heading">Comments</h1>

        {comments.map((comment) => {
          return (
            <div key={comment.comment_id} className="commentContainer">
              <h1 className="commentAuthor">
                {comment.author}
                <span className="font-normal">&nbsp;says:</span>
              </h1>
              <p className="commentBody">{comment.body}</p>
              <div className="commentButtons">
                <Link href={`/blog/${post_id}/${comment.comment_id}`}>
                  <p className="button">View Comment</p>
                </Link>
                <Link
                  href={`/blog/${post_id}/${comment.comment_id}/editcomment`}
                >
                  <p className="button">Edit Comment</p>
                </Link>
                <DeleteComment params={comment.comment_id} />
              </div>
            </div>
          );
        })}
      </div>
      <CommentForm params={post_id} />
    </div>
  );
}
