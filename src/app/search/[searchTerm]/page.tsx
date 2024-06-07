import Heroes from "@/components/Heroes"
import Pagination from "@/components/Pagination"
import SearchBar from "@/components/SearchBar"

const API_KEY = process.env.API_KEY
const HASH = process.env.HASH

const LIMIT = 10

interface ISearchPageProps {
  params: {
    searchTerm: string
  },
  searchParams: {
    page?: number
  }
}
const SearchPage = async ({ params, searchParams }: ISearchPageProps) => {

  const searchTerm = params.searchTerm

  const baseUrl = "https://gateway.marvel.com/v1/public/"
  const apiKey = `ts=1&apikey=${API_KEY}&hash=${HASH}`

  const page = searchParams.page ? searchParams.page : 1
  const offset = page > 1 ? (page - 1) * LIMIT : 0

  const url = `${baseUrl}characters?nameStartsWith=${searchTerm}&limit=${LIMIT}&offset=${offset}&${apiKey}`

  const res = await fetch(url)
  const data = await res.json()

  const results = data.data.results
  const total = data.data.total
  console.log(total)
  const totalPages = Math.ceil(total / LIMIT)

  return (
    <>
      <SearchBar />
      <div className="mb-12">
        {results && results.length === 0 ? (
          <h1 className="text-center pt-6">No results found </h1>
        ) : (
          <Heroes heroes={results} />
        )}
        {results && results.length > 0 && (
          <Pagination page={page} totalPages={totalPages} />
        )}
      </div>
    </>
  )
}

export default SearchPage
