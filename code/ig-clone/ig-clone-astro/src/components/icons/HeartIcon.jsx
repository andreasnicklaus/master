import HeartIconSvg from "../../assets/heart.svg";

const HeartIcon = () => {
  return (
    <img
      className="transparent"
      id="hearticon"
      src={HeartIconSvg.src}
      alt=""
      width={29}
    />
  );
};

export default HeartIcon;
