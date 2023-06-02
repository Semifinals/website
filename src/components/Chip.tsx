type ChipProps = {
  children?: React.ReactNode
}

export default function Chip(props: ChipProps) {
  return (
    <span className="px-3 py-1 bg-[#ddd] dark:bg-[#222] inline-block rounded-full text-xs uppercase">
      {props.children}
    </span>
  )
}
