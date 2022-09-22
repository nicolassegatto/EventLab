import { gql, useQuery } from '@apollo/client'
import { Cards } from '../Cards'

const getLessons = gql`
  query {
    lessons(orderBy: avaliableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      avaliableAt
      title
      slug
    }
  }
`
interface LessonsResponse {
  lessons: {
    id: string,
    lessonType: 'live' | 'class',
    avaliableAt: Date,
    title: string,
    slug: string,
  }[]
}

export function Sidebar(){
  const { data } = useQuery<LessonsResponse>(getLessons)

  return(
    <>
      <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
        <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
          Cronograma de aulas
        </span>

        <div className='flex flex-col gap-8'>
          {data?.lessons.map(OBJ => {
            return(
              <Cards 
              key={OBJ.id} 
              title={OBJ.title} 
              slug={OBJ.slug} 
              type={OBJ.lessonType} 
              avaliableAt={new Date(OBJ.avaliableAt)} 
            />
            )
          })}
        </div>

      </aside>
    </>
  )
}