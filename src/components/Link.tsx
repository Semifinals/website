import NextLink from "next/link"

type LinkProps = {
  children?: React.ReactNode
  href: string
  removeDefaultStyles?: boolean
  className?: string
}

export default function Link(props: LinkProps) {
  return (
    <NextLink
      href={props.href}
      className={
        props.className + " " + props.removeDefaultStyles
          ? ""
          : "text-[#3498db] font-bold hover:underline inline-flex flex-row items-center"
      }
    >
      {props.children}
    </NextLink>
  )
}
