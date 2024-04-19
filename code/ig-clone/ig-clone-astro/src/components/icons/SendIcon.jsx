import SendIconSvg from "../../assets/send.svg";

const SendIcon = () => {
  return (
    <img
      className="transparent"
      id="sendicon"
      src={SendIconSvg.src}
      alt=""
      width={29}
    />
  );
};

export default SendIcon;
