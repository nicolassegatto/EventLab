import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { ContentVideo } from "../components/Player";
import { Sidebar } from "../components/Sidebar";

interface LinkParam {
  slug: string
}

interface NoLinkParam {
  lessons: [
    {
      slug: string
    }
  ]
}

const getSlug = gql`
  query getSlug {
  lessons(first: 1) {
    slug
  }
}
`

export function Evento() {
  const { slug } = useParams<LinkParam["slug"]>()

  if (!slug) {
    const { data } = useQuery<NoLinkParam[]>(getSlug)
    const LinkOffSlug = data
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
          {!LinkOffSlug ? <ContentVideo lessonSlug={LinkOffSlug.lessons[0].slug} /> : <div className="flex-1" />}
        </main>
      </div>
    )

  } else {

    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
          <ContentVideo lessonSlug={slug} />
        </main>
      </div>
    )

  }
}