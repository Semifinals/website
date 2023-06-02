import PageMargin from "./PageMargin"
import Link from "./Link"
import ThemeImage from "./ThemeImage"

export default function Footer() {
  return (
    <footer>
      <PageMargin>
        <div className="flex flex-col items-center mb-10">
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
    </footer>
  )
}
