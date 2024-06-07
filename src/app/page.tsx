import Heroes from "@/components/Heroes"
import Pagination from "@/components/Pagination"

const API_KEY = process.env.API_KEY
const HASH = process.env.HASH

const LIMIT = 10

interface IHomeProps {
  searchParams: {
    page?: number
  }
}
const Home = async ({ searchParams }: IHomeProps) => {

  const baseUrl = "https://gateway.marvel.com/v1/public/"
  const apiKey = `ts=1&apikey=${API_KEY}&hash=${HASH}`

  const page = searchParams.page ? searchParams.page : 1
  const offset = page > 1 ? (page - 1) * LIMIT : 0

  const url = `${baseUrl}characters?limit=${LIMIT}&offset=${offset}&${apiKey}`
  const res = await fetch(url,
    { next: { revalidate: 10_000 } })
  const data = await res.json()

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  const results = data.data.results
  const total = data.data.total
  const totalPages = Math.ceil(total / LIMIT)
  console.log(data.data.results[0].events.items)
  return (
    <div className="mb-12">
      <Heroes heroes={results} />
      <Pagination page={page} totalPages={totalPages}/>
    </div>
  )
}

export default Home
