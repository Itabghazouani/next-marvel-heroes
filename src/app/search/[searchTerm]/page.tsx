import Heroes from "@/components/Heroes"

const API_KEY = process.env.API_KEY
const HASH = process.env.HASH

interface ISearchPageProps {
  params: {
    searchTerm: string
  }
}
const SearchPage = async ({ params }: ISearchPageProps) => {

  const searchTerm = params.searchTerm

  const baseUrl = "https://gateway.marvel.com/v1/public/";
  const apiKey = `ts=1&apikey=${API_KEY}&hash=${HASH}`;
  const url = `${baseUrl}characters?nameStartsWith=${searchTerm}&${apiKey}`;

  const res = await fetch(url)
  const data = await res.json()

  const results = data.data.results

  return (
    <div>
      {
        results &&
          results.length ===
          <h1 className="text-center pt-6">No results found </h1>
      }
      {results && <Heroes heroes={results} />}
    </div>
  )
}

export default SearchPage
