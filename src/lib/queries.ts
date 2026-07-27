// GROQ queries shared across pages. `hasBody` / omitting `body` from the list
// query keeps the Work index payload light — full `body` portable text is
// only fetched on the project detail page.

export const PROJECT_CARD_FIELDS = /* groq */ `
  _id, title, "slug": slug.current, client, tagline, summary, coverImage,
  featured, visibility, "hasBody": defined(body) && length(body) > 0
`

export const PROJECTS_QUERY = /* groq */ `
  *[_type == "project"] | order(coalesce(order, 999) asc, year desc) {
    ${PROJECT_CARD_FIELDS}
  }
`

export const FEATURED_PROJECTS_QUERY = /* groq */ `
  *[_type == "project" && featured == true] | order(coalesce(order, 999) asc, year desc) {
    ${PROJECT_CARD_FIELDS}
  }
`

export const PROJECT_BY_SLUG_QUERY = /* groq */ `
  *[_type == "project" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, client, tagline, summary, role, disciplines,
    industry, year, liveUrl, featured, coverImage, gallery, stats, body, testimonial,
    visibility, password
  }
`

export const ABOUT_QUERY = /* groq */ `
  *[_type == "about"][0] {
    tagline, bio, photo, "resumeFile": resumeFile.asset->{url},
    experience[] {
      company, role, startDate, endDate, description,
      relatedProjects[]-> { ${PROJECT_CARD_FIELDS} }
    }
  }
`

export const HOME_QUERY = /* groq */ `
  *[_type == "home"][0] { heroHeading, heroSubheading, featuredSectionTitle }
`

export const POST_CARD_FIELDS = /* groq */ `
  _id, title, "slug": slug.current, coverImage, excerpt, tags, publishedAt
`

export const POSTS_QUERY = /* groq */ `
  *[_type == "post"] | order(publishedAt desc) { ${POST_CARD_FIELDS} }
`

export const POST_BY_SLUG_QUERY = /* groq */ `
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, coverImage, excerpt, tags, publishedAt, body
  }
`

export const SERVICES_QUERY = /* groq */ `
  *[_type == "services"][0] { intro, offerings, ctaLabel, ctaHref }
`
