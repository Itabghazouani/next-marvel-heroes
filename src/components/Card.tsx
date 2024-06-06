import Link from "next/link"
import { THero } from "./Heroes"
import Image from "next/image"

interface ICardProps {
  hero: THero
}
const Card = ({ hero }: ICardProps) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/hero/${hero.id}`}>
        <Image
          src={
            hero.thumbnail.path.includes('image_not_available') ? "/mheroes.jpeg" :
              `${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt="hero image"
          width={500}
          height={500}
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{hero.description === "" ? "Too much mistery on this character, we can't reveal so easily" : hero.description}</p>
          <h2 className="text-lg font-bold truncate">{hero.name}</h2>
          <p className="font-medium">Comics Appearances:{' '}
            <span className="font-normal">
              {hero.comics.available}
            </span>
          </p>
          <p className="font-medium">Series Appearances:{' '}
            <span className="font-normal">
              {hero.series.available}
            </span>
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Card
