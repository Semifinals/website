type MainProps = {
  children?: React.ReactNode
}

export default function Main(props: MainProps) {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white min-h-[100vh]">
      {props.children}
    </main>
  )
}
