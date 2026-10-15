import "./App.css";
import { useState } from "react";
import PostList from "./components/PostList";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Мой первый пост", body: "Первый" },
    { id: 2, title: "Мой второй пост", body: "Думаю о высоком" },
    { id: 3, title: "Мой третий пост", body: "Хочу есть" },
  ]);

  function removePost(id){
    setPosts(posts.filter((item)=>item.id !== id))
  }

  return (
    <div className="App posts-container">
      <h1>Мои посты</h1>
      <PostList posts={posts} removePost={removePost}/>
    </div>
  );
}

export default App;
