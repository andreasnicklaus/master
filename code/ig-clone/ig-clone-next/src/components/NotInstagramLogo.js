import { Kaushan_Script } from "next/font/google";
const kaushanScript = Kaushan_Script({ subsets: ["latin"], weight: "400" });

const NotInstagramLogo = () => {
  const style = {
    fontSize: "32px",
    margin: 0
  }
  return <h1 id="notinstagram" style={style} className={kaushanScript.className}>NotInstagram</h1>
}

export default NotInstagramLogo