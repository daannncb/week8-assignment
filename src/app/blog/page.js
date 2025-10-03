//! All blog posts

//! could use metadata as the preview text?

import pg from "pg";
import Image from "next/image";
import blogListStyles from "./blogposts.module.css";
import Link from "next/link";
import { db } from "@/utils/dbConnection";

//! I want to shorten post text to appear nicely in the post list [lorem......] view more kinda thing
export default async function BlogPosts() {
  const res = await db.query(
    `SELECT post_id, title, body, image_src, image_alt, to_char(date, 'FMDay FMDDth Month YYYY') AS post_date FROM posts`
  );

  //to_char(date, 'Day Dth Month YYYY')
  // console.log(res); returns a lot of gubbins; my database is in "rows"
  const posts = res.rows;

  console.log(posts);

  return (
    <div className={blogListStyles.blogPostListContainer}>
      {posts.map((post) => {
        return (
          <>
            <Link href="/">
              <div
                key={post.post_id}
                className={blogListStyles.blogPostListItem}
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
                  <p className={blogListStyles.blogPostDate}>
                    {post.post_date}
                  </p>
                </h1>
                <p maxLength="50" className={blogListStyles.blogListBody}>
                  {post.body}
                </p>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}
