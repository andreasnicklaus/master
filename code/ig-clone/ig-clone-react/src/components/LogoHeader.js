import { Link } from "react-router-dom"
import "./LogoHeader.css"
import NotInstagramLogo from "./NotInstagramLogo"
import PlusIcon from "./icons/PlusIcon"
import HeartIcon from "./icons/HeartIcon"
import SendIcon from "./icons/SendIcon"

const LogoHeader = () => {
  return <header>
    <Link to="/">
      <NotInstagramLogo />
    </Link>
    <div id="actionLogos">
      <Link to="/create">
        <PlusIcon />
      </Link>
      <HeartIcon />
      <SendIcon />
    </div>
  </header >
}

export default LogoHeader;