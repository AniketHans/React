import { useParams } from "react-router-dom";
export default function User() {
  const { userid } = useParams();
  return (
    <div className="text-center bg-gray-700 text-white text-3xl p-4">
      <h1>User : {userid}</h1>
    </div>
  );
}
