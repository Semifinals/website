import Footer from "@/components/Footer"
import Head from "@/components/Head"
import Header from "@/components/Header"
import Main from "@/components/Main"
import PageMargin from "@/components/PageMargin"
import { useEffect, useState } from "react"

export default function Authorize() {
  const [clientId, setClientId] = useState<string | null>(null)
  const [redirectUri, setRedirectUri] = useState<string | null>(null)
  const [responseType, setResponseType] = useState<string | null>(null)
  const [scope, setScope] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    setClientId(params.get("client_id"))
    setRedirectUri(params.get("redirect_uri"))
    setResponseType(params.get("response_type"))
    setScope(params.get("scope"))
  }, [])

  // if statements for the following scenarios:
  // - no client ID
  // - client ID is not valid (application doesn't exist)
  // - bad redirect uri
  // - no scopes provided

  return (
    <>
      <Head
        title={"Login with Semifinals"}
        description={"Login to an application using Semifinals."}
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
