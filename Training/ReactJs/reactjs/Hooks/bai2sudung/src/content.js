import { useEffect, useState } from "react";
function Content() {
  // useEffect(callback,[dependency])
  // update Dom
  // TH1 . UseEffect(callback) gọi callback mỗi khi component re-render ít dùng
  // gọi callback sau khi component thêm element vào DOM
  //TH2 .useEffect(callback,[])
  // chỉ gọi callback một lần sau khi component mounted
  //TH3 .useEffect(callback,[deps])
  // callback sẽ được gọi là mỗi khi depends thay đỗi
  // Trong 3 TH callback được gọi sau khi component mounted
  // cleanup function luôn được gọi trc khi component unmounted
  // listen DOM events
  // - Scroll
  //- Resize
  const [title, setTitle] = useState("");
  const [post, setPost] = useState([]);
  const tabs = ['posts','comments','albums']
  const [type,setType] = useState('posts');
  const [showgoTop,setshowgoTop] = useState (false)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [type]);
  useEffect(()=>
  {
     const handleScroll = () =>
     {
      if(window.scrollY >= 200)
      {
         setshowgoTop(true)
      }else
      {
        setshowgoTop(false)
      }
     }

     window.addEventListener('scroll',handleScroll);
     console.log('addEventListen');
     // cleanup function
     return () =>
     {
     window.removeEventListener('scroll',handleScroll);
       console.log('removeEventlistener');
     }
  },[])
  return (
    <div>
      {tabs.map(tab => (
        <button 
        key={tab}
        style={type === tab ? {
          color : 'white',
          backgroundColor : 'red'
        } : {}}
        onClick={() => setType(tab)}
        >{tab}</button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {post.map((posts) => (
          <li key={posts.id}>{posts.title  || posts.name}</li>
        ))}
        {showgoTop && (
          <button style={{
            position : 'fixed',
            right : 20,
            bottom  :20
          }}>Go to Top</button>
        )}
      </ul>
    </div>
  );
}
export default Content;
