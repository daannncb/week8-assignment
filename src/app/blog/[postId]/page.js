//! Single blog post
//! All blog posts

//! could use metadata as the preview text?

// export default async function Post() {
// async function getPost() {
//   const res = await fetch("serverGetRoute");
//   const data = await res.json();
//   const wrangledData = data.rows; //?
//   const posts = { wrangledData }; //? need to view data structure to know what I'll need. is it an object? array of objects?
// }
// async function getComments(){
//   const res = await fetch("get comments route")
//   const data = await res.json()
//   const comments = data.rows
// }
// return (
//   <div className="blog-post">
//     <h1>{post.title}</h1>
//     <p>{post.body}</p>
//   </div>
// );
// }

export default async function BlogPosts({ params }) {
  const id = await params;
}

// in the return for this page, need the "submit comment" function
