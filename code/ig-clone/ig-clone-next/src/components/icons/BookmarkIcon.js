import Image from "next/image";
import BookmarkIconSvg from "@/assets/bookmark.svg"

const BookmarkIcon = () => {
  return <Image className="transparent" id="bookmarkicon" src={BookmarkIconSvg} alt="" width={29} />
}

export default BookmarkIcon