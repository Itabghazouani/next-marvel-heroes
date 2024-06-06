import Heroes from "@/components/Heroes";

const API_KEY = process.env.API_KEY
const HASH = process.env.HASH

const Home = async () => {

  const baseUrl = "https://gateway.marvel.com/v1/public/";
  const apiKey = `ts=1&apikey=${API_KEY}&hash=${HASH}`;
  const url = `${baseUrl}characters?limit=10&${apiKey}`;
  const res = await fetch(url,
    { next: { revalidate: 10_000 } })
  const data = await res.json()

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = data.data.results
  console.log(results.find((item: any )=> item.id === 1010699 ))
  return (
    <div>
      <Heroes heroes={results}/>
    </div>
  );
}

export default Home
