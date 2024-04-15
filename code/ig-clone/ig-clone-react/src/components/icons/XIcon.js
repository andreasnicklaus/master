import PlusIconSvg from "src/assets/plus.svg"

const XIcon = () => {
  const style = {
    WebkitTransform: "rotate(45deg)",
    MozTransform: "rotate(45deg)",
    Otransform: "rotate(45deg)",
    msTransform: "rotate(45deg)",
    transform: " rotate(45deg)",
  }
  return <img className="transparent" id="plusicon" src={PlusIconSvg} alt="" width={29} style={style} />
}

export default XIcon