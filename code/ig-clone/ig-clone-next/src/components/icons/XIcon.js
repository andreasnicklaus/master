import Image from "next/image";
import PlusIconSvg from "@/assets/plus.svg"

const XIcon = () => {
  const style = {
    WebkitTransform: "rotate(45deg)",
    MozTransform: "rotate(45deg)",
    Otransform: "rotate(45deg)",
    msTransform: "rotate(45deg)",
    transform: " rotate(45deg)",
  }
  return <Image className="transparent" id="plusicon" src={PlusIconSvg} alt="" width={29} style={style} />
}

export default XIcon