import Image from "next/image";
import CommentIconSvg from "@/assets/comment.svg"

const CommentIcon = () => {
  return <Image className="transparent" id="commenticon" src={CommentIconSvg} alt="" width={29} />
}

export default CommentIcon