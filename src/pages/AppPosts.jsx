import React, { useState, useEffect } from "react";
import PostsService from "../services/PostsService";

export default function Posts() {
  const [posts, setPosts] = useState();

  const handleGetPosts = async () => {
    const posts = await PostsService.getAll();
    setPosts(posts);
  };

  useEffect(() => {
    handleGetPosts();
  }, []);
  // const posts = PostsService.getAll();
  // console.log({ posts });
  return (
    <div>
      <ul>
        {posts && posts.map((post) => <li key={post.id}>{post.body}</li>)}
      </ul>
    </div>
  );
}
