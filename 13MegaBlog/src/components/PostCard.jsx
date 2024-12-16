import appwriteService from "../appwrite/databaseService";
import { Link } from "react-router-dom";

export default function PostCard({ $id, title, featuredImage }) {
  //Here we have taken $id because this is an appwrite syntax. Appwrite returns the id in variable name $id
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-500 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          ></img>
        </div>
        <h2 className="font-bold text-xl">{title}</h2>
      </div>
    </Link>
  );
}
