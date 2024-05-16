import useSWR from "swr";
import { Link } from "react-router-dom";

export const ThreadList = () => {
  const fetcher = async (key) => {
    return fetch(key).then((res) => res.json());
  };
  const { data, isLoading } = useSWR(
    "https://railway.bulletinboard.techtrain.dev/threads",
    fetcher
  );
  console.log(data);
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div className="Container">
      <h2>スレッド一覧</h2>
      <Link to="/thread/new">
        <button className="CreateThread">新規スレッド作成</button>
      </Link>
      {data.map((thread) => (
        <div key={thread.id} className="Threads">
          <Link to={`/thread/${thread.id}`}>{thread.title}</Link>
        </div>
      ))}
    </div>
  );
};
