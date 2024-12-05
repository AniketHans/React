import { useState } from "react";
import { useEffect } from "react";

export default function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/anikethans")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
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
