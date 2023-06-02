import {
  GetStaticPropsResult,
  GetStaticPathsResult,
  InferGetStaticPropsType,
  GetStaticPropsContext
} from "next"
import { Github } from "@semifinals/discussions"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import useLocale from "@/hooks/useLocale"
import PageMargin from "@/components/PageMargin"
import styles from "@/styles/blog.module.scss"
import Chip from "@/components/Chip"
import Main from "@/components/Main"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "@/components/Link"
import useMetaDescription from "@/hooks/useMetaDescription"
import Head from "@/components/Head"

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  // TODO: Get slugs for all existing news articles and send them in paths

  return {
    paths: [],
    fallback: "blocking"
  }
}

export async function getStaticProps({
  params
}: GetStaticPropsContext): Promise<
  GetStaticPropsResult<{ discussion: Github.Discussion; slug: string }>
> {
  const slug =
    (params && Array.isArray(params.news)
      ? params.news[0]
      : (params?.news as string)) ?? ""

  // TODO: Fetch the discussion based on the slug (replace below as well)

  if (slug !== "welcome-to-semifinals")
    return { notFound: true, revalidate: 10 }

  return {
    props: { discussion, slug },
    revalidate: 10
  }
}

export default function News({
  discussion,
  slug
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { getLocallyFormattedTime } = useLocale()
  const { description } = useMetaDescription(discussion.bodyText)

  return (
    <>
      <Head
        title={discussion.title}
        description={description}
        url={`/news/${slug}`}
      />
      <Main>
        <Header />
        <PageMargin>
          <div className="flex flex-col gap-3 pb-10">
            {/* Image */}
            <div className="relative aspect-video max-h-[250px] overflow-hidden rounded-xl">
              <Image
                src="https://cdn.semifinals.co/assets/background.png"
                alt="Background image"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Category */}
            <div>
              <Chip>{discussion.category.name}</Chip>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold font-sans">{discussion.title}</h1>

            {/* Author */}
            <div className="flex flex-row items-center gap-3 mb-5">
              <div className="rounded-full overflow-hidden inline-block">
                <Image
                  src={discussion.author.avatarUrl}
                  height={50}
                  width={50}
                  alt="Author avatar"
                />
              </div>
              <div>
                <div className="font-bold">{discussion.author.login}</div>
                <div className="text-sm">
                  <span
                    title={
                      discussion.lastEditedAt
                        ? `Last edited ${getLocallyFormattedTime(
                            discussion.createdAt
                          )}`
                        : undefined
                    }
                  >
                    Posted {getLocallyFormattedTime(discussion.createdAt)}
                    {discussion.lastEditedAt && "*"} &middot;{" "}
                    <div className="w-max inline-block">
                      <Link href={discussion.url}>View Original</Link>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className={styles.discussion}
              dangerouslySetInnerHTML={{ __html: discussion.bodyHTML }}
            />

            {/* Follow link */}
            <div className="mt-5 bg-[#ddd] dark:bg-[#222] rounded-xl p-5">
              <span>Follow us on</span>{" "}
              <Link href="https://github.com/Semifinals">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-[1rem] text-black dark:text-white mr-1 absolute"
                />
                <span className="ml-[1.2rem]">Github</span>
              </Link>{" "}
              <span>to stay up to date with Semifinals.</span>
            </div>
          </div>
        </PageMargin>
        <Footer />
      </Main>
    </>
  )
}

// TODO: Implement blog API and delete below

const discussion: Github.Discussion = {
  author: {
    avatarUrl:
      "https://avatars.githubusercontent.com/u/37388618?u=fb438e724466681b661d7e6afbf6eb98fc47a7da&v=4",
    login: "FinOCE",
    url: "https://github.com/FinOCE"
  },
  authorAssociation: "MEMBER",
  bodyHTML:
    '<p dir="auto">Hello, and welcome!</p>\n<p dir="auto">Semifinals is a brand-new system we\'re starting to build with the goal of making the best service to build online competitive systems with. Whether it be a tournament website, in-game ranked system, or any other potential future goal of the project, we want to do it right and in a way that ensures it\'s as easy to work with as possible. A great developer experience is at the core of our objectives, as well as keeping the systems affordable so they can be used by any size of creator.</p>\n<p dir="auto">As of writing this, it is just me working on the project and I\'m laying the groundwork to build the upcoming features on. It\'ll be a long haul before a complete system is production-ready, but the journey has to start somewhere! If anyone has suggestions for features that I should implement, please don\'t hesitate to <a href="https://github.com/orgs/Semifinals/discussions/new?category=ideas">suggest here</a> so I can build the best and most useful product for you.</p>\n<p dir="auto">I\'m aiming to keep Semifinals centralised in Github, which is why I\'ve created this discussions board. At some point I may look at branching out to a Discord server since one thing I\'d love to create is a Discord tournament bot, but that won\'t be possible until the core API itself is functional.</p>\n<p dir="auto"><a href="https://github.com/Semifinals">Follow us</a> to keep up-to-date with Semifinal\'s development.</p>',
  bodyText:
    "Hello, and welcome!\nSemifinals is a brand-new system we're starting to build with the goal of making the best service to build online competitive systems with. Whether it be a tournament website, in-game ranked system, or any other potential future goal of the project, we want to do it right and in a way that ensures it's as easy to work with as possible. A great developer experience is at the core of our objectives, as well as keeping the systems affordable so they can be used by any size of creator.\nAs of writing this, it is just me working on the project and I'm laying the groundwork to build the upcoming features on. It'll be a long haul before a complete system is production-ready, but the journey has to start somewhere! If anyone has suggestions for features that I should implement, please don't hesitate to suggest here so I can build the best and most useful product for you.\nI'm aiming to keep Semifinals centralised in Github, which is why I've created this discussions board. At some point I may look at branching out to a Discord server since one thing I'd love to create is a Discord tournament bot, but that won't be possible until the core API itself is functional.\nFollow us to keep up-to-date with Semifinal's development.",
  category: {
    emoji: ":mega:",
    isAnswerable: false,
    name: "Announcements",
    slug: "announcements"
  },
  createdAt: "2023-03-22T10:57:13Z",
  labels: {
    nodes: [],
    totalCount: 0,
    pageInfo: {
      endCursor: null,
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: null
    }
  },
  lastEditedAt: null,
  locked: false,
  number: 1,
  reactionGroups: [
    {
      content: "THUMBS_UP",
      reactors: {
        totalCount: 0
      }
    },
    {
      content: "THUMBS_DOWN",
      reactors: {
        totalCount: 0
      }
    },
    {
      content: "LAUGH",
      reactors: {
        totalCount: 0
      }
    },
    {
      content: "HOORAY",
      reactors: {
        totalCount: 0
      }
    },
    {
      content: "CONFUSED",
      reactors: {
        totalCount: 0
      }
    },
    {
      content: "HEART",
      reactors: {
        totalCount: 0
      }
    },
    {
      content: "ROCKET",
      reactors: {
        totalCount: 0
      }
    },
    {
      content: "EYES",
      reactors: {
        totalCount: 0
      }
    }
  ],
  title: "Welcome to Semifinals!",
  upvoteCount: 1,
  url: "https://github.com/orgs/Semifinals/discussions/1"
}
