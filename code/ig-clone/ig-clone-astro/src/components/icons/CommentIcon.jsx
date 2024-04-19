import CommentIconSvg from "../..//assets/comment.svg";

const CommentIcon = () => {
  return (
    <img
      className="transparent"
      id="commenticon"
      src={CommentIconSvg.src}
      alt=""
      width={29}
    />
  );
};

export default CommentIcon;
