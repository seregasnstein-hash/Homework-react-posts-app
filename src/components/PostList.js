import PostItem from "./PostItem";

function PostList(props) {
  return (
    <div className="post-list">
      {props.posts.map((post) => {
        return <PostItem key={post.id} post={post} removePost={props.removePost}/>;
      })}
    </div>
  );
}

export default PostList;
