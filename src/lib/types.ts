import type { PortableTextBlock } from '@portabletext/react'

export interface SanityImage {
  asset: { _ref: string; _type: 'reference' }
  alt?: string
  caption?: string
  hotspot?: { x: number; y: number }
}

export interface ProjectStat {
  value: string
  label: string
}

export interface ProjectTestimonial {
  quote: string
  name: string
  roleAndCompany: string
}

export type ProjectVisibility = 'public' | 'protected' | 'onRequest'

export interface Project {
  _id: string
  _type: 'project'
  title: string
  slug: string
  client?: string
  tagline?: string
  summary: string
  role?: string[]
  disciplines?: string[]
  industry?: string
  year?: string
  liveUrl?: string
  featured: boolean
  order?: number
  coverImage: SanityImage
  gallery?: SanityImage[]
  stats?: ProjectStat[]
  body?: PortableTextBlock[]
  testimonial?: ProjectTestimonial
  visibility: ProjectVisibility
  password?: string
}

/** Projects listed by the Work index / referenced from About — no `body` or `password` payload. */
export type ProjectCard = Pick<
  Project,
  | '_id'
  | 'title'
  | 'slug'
  | 'client'
  | 'tagline'
  | 'summary'
  | 'coverImage'
  | 'featured'
  | 'visibility'
> & { hasBody: boolean }

export interface ExperienceEntry {
  company: string
  role: string
  startDate: string
  endDate?: string
  description?: string
  relatedProjects?: ProjectCard[]
}

export interface About {
  tagline: string
  bio?: string
  photo?: SanityImage
  resumeFile?: { url: string }
  experience?: ExperienceEntry[]
}

/** True once a project has enough content to be a linked case study, per README teaser logic. */
export function isLinkable(project: Pick<Project, 'body' | 'visibility'>): boolean {
  return Boolean(project.body && project.body.length > 0) && project.visibility !== 'onRequest'
}

export function isProtected(project: Pick<Project, 'body' | 'visibility'>): boolean {
  return isLinkable(project) && project.visibility === 'protected'
}
