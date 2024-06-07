"use client"
import Card from "./Card"

export type THero = {
  id: number,
  name: string,
  description: string,
  modified: Date,
  resourceURI: string,
  urls: [
    {
      type: string,
      url: string
    }
  ],
  thumbnail: {
    path: string,
    extension: string
  },
  comics: {
    available: number,
    returned: number,
    collectionURI: string,
    items: [
      {
        resourceURI: string,
        name: string
      }
    ]
  },
  stories: {
    available: number,
    returned: number,
    collectionURI: string,
    items: [
      {
        resourceURI: string,
        name: string,
        type: string
      }
    ]
  },
  events: {
    available: number,
    returned: number,
    collectionURI: string,
    items: [
      {
        resourceURI: string,
        name: string
      }
    ]
  },
  series: {
    available: number,
    returned: number,
    collectionURI: string,
    items: [
      {
        resourceURI: string,
        name: string
      }
    ]
  }
}

interface IHeroesProps {
  heroes: THero[]
}

const Heroes = ({ heroes }: IHeroesProps,) => {

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {heroes.map(hero => (
        <Card key={hero.id} hero={hero}/>
      ))}
    </div>
  )
}

export default Heroes
