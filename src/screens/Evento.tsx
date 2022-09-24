import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { ContentVideo } from "../components/Player";
import { Sidebar } from "../components/Sidebar";
import { useGetSlugWithoutLinkQuery } from "../graphql/generated";

interface LinkParam {
  slug: string
}

export function Evento() {
  const { slug } = useParams<LinkParam["slug"]>()
  const { data } = useGetSlugWithoutLinkQuery()
  console.log(data?.lessons[0].slug)
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
      {!slug ? (data?.lessons[0].slug ? <ContentVideo lessonSlug={data.lessons[0].slug} /> : <div className="flex-1" />) : (<ContentVideo lessonSlug={slug} />)}
        <Sidebar />
      </main>
    </div>
  )


}