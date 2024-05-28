import MovieListNavBar from "../Layouts/MovieListNavBar"
import { useQuery } from "@tanstack/react-query"

const MovieLists = () => { 
  const {data: movies, isLoading, error } = useQuery({
    queryFn: () => fetch("")
  })

  return (

    <main className="bg-[#233549] min-h-screen">
      <MovieListNavBar />
      <h1 className="text-white text-center font-extrabold text-2xl">Movie Lists</h1>
      
      
    </main>
  )
}

export default MovieLists