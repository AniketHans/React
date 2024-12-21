import { useEffect, useState } from "react";
import appwriteServices from "../appwrite/databaseService";
import { Container } from "../components";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteServices.getPosts().then((posts) => setPosts(posts.documents));
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
