//! All blog posts

//! could use metadata as the preview text?

import pg from "pg";
import Image from "next/image";
import blogListStyles from "./blogposts.module.css";
import Link from "next/link";
import { db } from "@/utils/dbConnection.js";

//! I want to shorten post text to appear nicely in the post list [lorem......] view more kinda thing
export default async function BlogPosts() {
  const res = await db.query(
    `SELECT post_id, title, body, image_src, image_alt FROM posts`
  );
  // console.log(res); returns a lot of gubbins; my database is in "rows"
  const posts = res.rows;
  console.log(posts);

  //! how do i turn these post boxes into clickable links?
  return (
    <>
      {posts.map((post) => {
        return (
          <div
            key={post.post_id}
            className={blogListStyles.blogPostListContainer}
          >
            <h1 className={blogListStyles.blogListTitle}>
              {post.title}
              <Image
                key={post.post_id}
                src={post.image_src}
                alt={post.image_alt}
                width={250}
                height={100}
                className={blogListStyles.blogListImage}
              />
            </h1>
            <p maxLength="50" className={blogListStyles.blogListBody}>
              {post.body}
            </p>
          </div>
        );
      })}
    </>
  );
}
