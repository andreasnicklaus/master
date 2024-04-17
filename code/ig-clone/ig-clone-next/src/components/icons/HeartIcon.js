import Image from "next/image";
import HeartIconSvg from "@/assets/heart.svg"

const HeartIcon = () => {
  return <Image className="transparent" id="hearticon" src={HeartIconSvg} alt="" width={29} />
}

export default HeartIcon