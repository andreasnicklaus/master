import Post from "./Post"

const PostList = ({ posts }) => {
  return <div id="postList">
    {posts.map((post, i) =>
      <Post
        key={i}
        userhandle={post.userhandle}
        caption={post.caption}
        mediaSource={post.mediaSource}
        likeCount={post.likeCount}
        createdAt={post.createdAt}
      />
    )}
  </div>
}

export default PostList