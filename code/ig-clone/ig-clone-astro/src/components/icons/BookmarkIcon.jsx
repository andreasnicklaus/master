import BookmarkIconSvg from "../../assets/bookmark.svg";

const BookmarkIcon = () => {
  return (
    <img
      className="transparent"
      id="bookmarkicon"
      src={BookmarkIconSvg.src}
      alt=""
      width={29}
    />
  );
};

export default BookmarkIcon;
