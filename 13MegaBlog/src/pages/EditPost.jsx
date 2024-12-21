import { Container, PostForm } from "../components";
import appwrireServices from "../appwrite/databaseService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwrireServices
        .getPost(slug)
        .then((post) => (post ? setPost(post) : null));
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8 ">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}
