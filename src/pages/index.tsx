import Head from "next/head"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
  return (
    <>
      <Head>
        <title>Semifinals - Coming Soon</title>
        <meta
          name="description"
          content="The new way to develop online tournament experiences. Semifinals is a publicly accessible web API for use developing online tournament services. We take care of the complicated system design of bleeding edge tournament systems so you can easily work on what really matters through our simple and intuitive HTTP API."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn.semifinals.co/assets/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Libre+Baskerville&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div className="flex flex-col h-[100vh]">
          <div className="relative h-full w-full">
            <div className="absolute bg-center brightness-50 w-full h-full bg-cover bg-[url(https://cdn.semifinals.co/assets/goblet.jpg)] shadow-[0_0_10rem_5rem_inset_black]"></div>

            <div className="w-full h-full relative flex flex-col items-center justify-center">
              <p className="md:text-9xl sm:text-7xl text-6xl font-sans text-white font-semibold">
                Semifinals
              </p>

              <p className="md:text-3xl sm:text-2xl text-xl text-slate-900 mt-5 font-serif text-center">
                The new way to develop tournament experiences
              </p>

              <a
                href="https://github.com/Semifinals"
                className="inline-flex items-center justify-center mt-10 py-3 px-5 rounded-xl bg-gradient-to-r from-black to-slate-100 border border-slate-300 hover:from-slate-300 hover:to-slate-500 hover:border-slate-700 cursor-pointer transition-colors transition-border"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-[3rem] text-white mr-3"
                />
                <span className="text-white uppercase text-xl font-bold">
                  Github
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
