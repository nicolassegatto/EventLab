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
  const {data} = useQuery<NoLinkParam>(getSlug)
  console.log(data?.lessons[0].slug)
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
          { slug ? (<ContentVideo lessonSlug={slug} />) : (data?.lessons[0].slug ? <ContentVideo lessonSlug={data.lessons[0].slug}/> : <div className="flex-1" />)}
          <Sidebar />
        </main>
      </div>
    )


}