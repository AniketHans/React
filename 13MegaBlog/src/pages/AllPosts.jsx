import { useEffect, useState } from "react";
import appwriteServices from "../appwrite/databaseService";
import { Container, PostCard } from "../components";
export default function AllPosts() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    appwriteServices
      .getPosts()
      .then((posts) => (posts ? setPost(posts.documents) : undefined));
  });
  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard
                  $id={post.$id}
                  title={post.title}
                  featuredImage={post.featuredImage}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
