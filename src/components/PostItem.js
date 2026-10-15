function PostItem(props) {
  return (
    <div className="post-item">
      <h3>{props.post.title}</h3>
      <p>{props.post.body}</p>
      <button className="delete-btn" onClick={() => props.removePost(props.post.id)}>Удалить</button>
    </div>
  );
}

export default PostItem;
