import Image from "next/image";
import InfoIconSvg from "@/assets/info.svg"

const InfoIcon = () => {
  return <Image className="transparent" id="infoicon" src={InfoIconSvg} alt="" width={29} />
}

export default InfoIcon