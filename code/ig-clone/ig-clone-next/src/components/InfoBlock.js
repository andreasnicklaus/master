import styles from "./InfoBlock.module.css"

import { Kaushan_Script } from "next/font/google";
const kaushanScript = Kaushan_Script({ subsets: ["latin"], weight: "400" });


const InfoBlock = ({ title, children }) => {

  return <>
    <h1 className={[styles.title, kaushanScript.className].join(" ")}>{title}</h1>
    <p className={styles.info}>
      {children}
    </p>
  </>
}

export default InfoBlock