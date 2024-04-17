import Image from "next/image";
import SendIconSvg from "@/assets/send.svg"

const SendIcon = () => {
  return <Image className="transparent" id="sendicon" src={SendIconSvg} alt="" width={29} />
}

export default SendIcon