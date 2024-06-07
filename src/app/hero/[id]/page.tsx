import Image from "next/image"

const API_KEY = process.env.API_KEY
const HASH = process.env.HASH

interface IHeroProps {
  params: {
    id: number
  }
}
const Hero = async ({ params }: IHeroProps) => {

  const heroId = params.id

  const baseUrl = "https://gateway.marvel.com/v1/public/"
  const apiKey = `ts=1&apikey=${API_KEY}&hash=${HASH}`
  const url = `${baseUrl}characters/${heroId}?${apiKey}`

  const res = await fetch(url)
  const data = await res.json()
  const hero = data.data.results[0]

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={
            hero.thumbnail.path.includes('image_not_available') ? "/mheroes.jpeg" :
              `${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt="hero image"
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{hero.name}</h2>
          <p className="mb-3">
            {hero.description === "" ? "Too much mistery on this character, we can't reveal so easily" : hero.description}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Comics Appearances:{' '}</span>
            {hero.comics.available}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Series Appearances:{' '}</span>
            {hero.series.available}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
