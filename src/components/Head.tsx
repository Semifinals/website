import NextHead from "next/head"

type HeadProps = {
  title: string
  description: string
  url: string
}

export default function Head(props: HeadProps) {
  return (
    <NextHead>
      <title>{props.title} &middot; Semifinals</title>
      <link rel="icon" href="https://cdn.semifinals.co/assets/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={props.description} />
      <meta name="robots" content="index, follow" />
      <meta charSet="UTF-8" />
      <meta property="og:title" content={`${props.title} · Semifinals`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://semifinals.co/${props.url}`} />
      <meta
        property="og:image"
        content="https://cdn.semifinals.co/assets/background.png"
      />
      <meta property="og:site_name" content="Semifinals" />
      <meta name="twitter:image:alt" content="Semifinals background image" />
      <meta name="twitter:title" content={`${props.title} · Semifinals`} />
      <meta name="twitter:description" content={props.description} />
      <meta
        name="twitter:image"
        content="https://cdn.semifinals.co/assets/background.png"
      />
      <meta name="twitter:card" content="summary" />
    </NextHead>
  )
}
