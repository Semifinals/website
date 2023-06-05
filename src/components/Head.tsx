import NextHead from "next/head"

type HeadProps = {
  title: string
  description: string
  url: string
  image: string
}

export default function Head(props: HeadProps) {
  const title = `${props.title} · Semifinals`
  const url = `https://semifinals.co/${props.url}`

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="https://cdn.semifinals.co/assets/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={props.description} />
      <meta name="robots" content="index, follow" />
      <meta charSet="UTF-8" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={props.image} />
      <meta property="og:site_name" content="Semifinals" />
      <meta name="twitter:image:alt" content="Semifinals background image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.image} />
      <meta name="twitter:card" content="summary" />
    </NextHead>
  )
}
