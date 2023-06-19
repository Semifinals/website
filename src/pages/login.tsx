import Footer from "@/components/Footer"
import Head from "@/components/Head"
import Header from "@/components/Header"
import Main from "@/components/Main"
import PageMargin from "@/components/PageMargin"
import { useEffect, useState } from "react"

export default function Login() {
  const [redirectTo, setRedirectTo] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setRedirectTo(params.get("redirect_to"))
  }, [])

  return (
    <>
      <Head
        title={"Login to Semifinals"}
        description={"Login to Semifinals."}
        url={`login`}
        image={"https://cdn.semifinals.co/assets/background.png"}
      />
      <Main>
        <Header />
        <PageMargin></PageMargin>
        <Footer />
      </Main>
    </>
  )
}
