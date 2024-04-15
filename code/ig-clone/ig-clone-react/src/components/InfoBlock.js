import styles from "./InfoBlock.module.css"

const InfoBlock = ({ title, children }) => {

  return <>
    <h1 className={styles.title}>{title}</h1>
    <p>
      {children}
    </p>
  </>
}

export default InfoBlock