type PageMarginProps = {
  children?: React.ReactNode
}

export default function PageMargin(props: PageMarginProps) {
  return (
    <div className="flex flex-row justify-center min-w-[250px]">
      <div className="mx-5 w-full sm:w-[80vw] max-w-[1300px]">
        {props.children}
      </div>
    </div>
  )
}
