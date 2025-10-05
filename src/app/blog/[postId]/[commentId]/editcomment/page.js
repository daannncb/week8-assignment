import EditComment from "@/app/components/EditComment";

export default async function EditCommentPage({ params }) {
  const post_id = (await params).postId;
  const comment_id = (await params).commentId;
  //   console.log("post id:", post_id);
  //   console.log("comment id:", comment_id);

  return <EditComment props={{ post_id, comment_id }} />;
}
