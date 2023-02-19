export type breadCrumbsItemType = {
  id: number
  link: string
  text: string
}

type featureType = {
  text: string
  value: number
}

export interface MachineryType {
  _id: string
  id: number
  name: string
  imgSrc: string
  thumbs: string[]
  features: {
    liftingCapacity: featureType
    arrowLength: featureType
    mainArrowLength: featureType
    maxHeight: featureType
    maxRadius: featureType
    speed: featureType
    extension: featureType
    price: featureType
  }
}

export type ConstructionType = {
  _id: string
  id: number
  title: string
  text: string
  images: string[]
  preview: string
  location: string
  anotherConstructions: number[]
}

type ArticleSectionType = {
  text: string
  isListItem: boolean
}

export type ArticleType = {
  _id: string
  id: number
  title: string
  subtitle: string
  preview: string
  subtitles: string[]
  sections: ArticleSectionType[][]
  images: string[]
}

export interface RequestType {
  name: string
  phone: string
  email?: string
  message?: string
}

export interface OrderType extends RequestType {
  id: string
}
