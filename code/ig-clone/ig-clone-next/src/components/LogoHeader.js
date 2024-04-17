import "./LogoHeader.css"
import NotInstagramLogo from "./NotInstagramLogo"
import PlusIcon from "./icons/PlusIcon"
import HeartIcon from "./icons/HeartIcon"
import SendIcon from "./icons/SendIcon"
import Link from "next/link"

const LogoHeader = () => {
  return <header>
    <Link href="/">
      <NotInstagramLogo />
    </Link>
    <div id="actionLogos">
      <Link href="/create">
        <PlusIcon />
      </Link>
      <HeartIcon />
      <SendIcon />
    </div>
  </header >
}

export default LogoHeader;