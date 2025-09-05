import { useEffect, useState } from "react";
function Content() {
  // useEffect(callback,[dependency])
  // update Dom
  // TH1 . UseEffect(callback) gọi callback mỗi khi component re-render ít dùng
  // gọi callback sau khi component thêm element vào DOM
  //TH2 .useEffect(callback,[])
  // chỉ gọi callback một lần sau khi component mounted
  //TH3 .useEffect(callback,[deps])
  // Trong 3 TH callback được gọi sau khi component mounted
  const [title, setTitle] = useState("");
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {post.map((posts) => (
          <li key={posts.id}>{posts.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
