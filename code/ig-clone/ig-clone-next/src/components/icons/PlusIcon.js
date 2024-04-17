import Image from "next/image";
import PlusIconSvg from "@/assets/plus.svg"

const PlusIcon = () => {
  return <Image className="transparent" id="plusicon" src={PlusIconSvg} alt="" width={29} />
}

export default PlusIcon