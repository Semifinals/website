import PageMargin from "@/components/PageMargin"
import Main from "@/components/Main"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Head from "@/components/Head"
import Link from "@/components/Link"
import Paths from "@/assets/Paths"
import styles from "@/styles/index.module.scss"

export default function News() {
  return (
    <>
      <Head
        title="Semifinals"
        description="Introducing Semifinals, a game-changer in the world of competitions and online events. Our platform revolutionizes the way events are conducted on a global scale. With exceptional scalability and fully open-source codebase, we provide event management as a service that caters to everyone from grassroots initiatives to industry leaders."
        url=""
        image={Paths.assets.background}
      />
      <Main>
        <Header />

        {/* Hero */}
        <div>
          <PageMargin>
            {/* <div
              style={{ "--background-url": `url(${Paths.assets.background})` }}
              className="bg-[image:var(--background-url)]"
            /> */}
            <div
              className={`bg-black rounded-3xl py-20 px-32 text-center ${styles.heroBox} bg-slate-100`}
            >
              <h1 className="text-6xl font-bold mb-8">
                This is what you've been waiting for
              </h1>
              <p className="text-2xl text-slate-800">
                Our platform revolutionizes the way events are conducted on a
                global scale. With exceptional scalability and fully open-source
                codebase, we provide event management as a service that caters
                to everyone from grassroots initiatives to industry leaders.
              </p>
              <div className="flex flex-row justify-center gap-3 mt-10">
                <Link href={Paths.docs.gettingStarted} removeDefaultStyles>
                  <div
                    className={`inline-block px-8 py-4 rounded-xl font-bold bg-slate-300 ${styles.shadowed} hover:bg-slate-500`}
                  >
                    Get Started
                  </div>
                </Link>

                <Link href={Paths.external.github} removeDefaultStyles>
                  <div
                    className={`inline-block px-8 py-4 rounded-xl font-bold ${styles.shadowed} hover:bg-slate-500`}
                  >
                    View Github
                  </div>
                </Link>
              </div>
            </div>
          </PageMargin>
        </div>
        <Footer />
      </Main>
    </>
  )
}
