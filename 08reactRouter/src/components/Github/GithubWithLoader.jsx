import { useLoaderData } from "react-router-dom";

export default function GithubWithLoader() {
  const data = useLoaderData();
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Followers : {data?.followers}
      </div>
      <div className="flex justify-center">
        <img src={data?.avatar_url} alt="Git Avatar" />
      </div>
    </>
  );
}

export async function fetchGithubData() {
  const response = await fetch("https://api.github.com/users/anikethans");
  return response.json();
}
