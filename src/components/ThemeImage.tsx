import Image, { ImageProps } from "next/image"

type ThemeImageProps = {
  lightSrc: string
  darkSrc: string
}

export default function ThemeImage(
  props: ThemeImageProps & Omit<ImageProps, "src">
) {
  const { darkSrc, lightSrc, ...imageProps } = props

  return (
    <picture>
      <source srcSet={darkSrc} media="(prefers-color-scheme: dark)" />
      <Image src={lightSrc} {...imageProps} />
    </picture>
  )
}
