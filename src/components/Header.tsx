import PageMargin from "./PageMargin"
import Link from "./Link"
import ThemeImage from "./ThemeImage"

type HeaderProps = {
  inverted?: boolean
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <PageMargin>
        <div className="flex flex-row items-center">
          <Link href="/">
            <ThemeImage
              darkSrc={
                props.inverted
                  ? "https://cdn.semifinals.co/assets/logo-black-nobg.png"
                  : "https://cdn.semifinals.co/assets/logo-white-nobg.png"
              }
              lightSrc={
                props.inverted
                  ? "https://cdn.semifinals.co/assets/logo-white-nobg.png"
                  : "https://cdn.semifinals.co/assets/logo-black-nobg.png"
              }
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
