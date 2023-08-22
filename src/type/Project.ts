export type FeaturedProject = {
  imgSrc: string
  title: string
  content: string
  link: string
  techs: string[]
}

export type Project = {
  year: string
  name: string
  company: string
  techs: string[]
  linkObj?: {
    display?: string
    url?: string
  }
}