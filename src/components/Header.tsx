import PageMargin from "./PageMargin"
import Link from "./Link"
import ThemeImage from "./ThemeImage"

export default function Header() {
  return (
    <header>
      <PageMargin>
        <div className="flex flex-row items-center">
          <Link href="/">
            <ThemeImage
              darkSrc="https://cdn.semifinals.co/assets/logo-white-nobg.png"
              lightSrc="https://cdn.semifinals.co/assets/logo-black-nobg.png"
              height={100}
              width={100}
              alt="Semifinals logo"
            />
          </Link>
        </div>
      </PageMargin>
    </header>
  )
}
