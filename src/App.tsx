import { ApolloProvider } from '@apollo/client/react';
import { BrowserRouter } from 'react-router-dom';
import { client } from './lib/apollo';
import { Router } from './Router';

/** USANDO https://www.youtube.com/watch?v=0aNDPC2k4Q8&list=PLAF5G8rnMmBZ3-XaaXXQcCUYj6IJCdb2J */
/*
  const GetLessons = gql`
  query {
	  lessons{
      id
      title
      teacher {
        name
      }
    }
  }
  `
  usando useEffect para graphQL
  useEffect(() => {
    client.query({query: GetLessons}).then(res => console.log(res.data))
  }, [])

  usando useQuery do apollo
  const {data} = useQuery<{lessons: Lesson[]}>(GetLessons)
*/


//"@vime/core": "^5.3.3",
    //"@vime/react": "^5.3.3",
    
function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
