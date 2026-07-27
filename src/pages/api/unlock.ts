import type { APIRoute } from 'astro'
import { sanityClient } from '@/lib/sanity'

export const prerender = false

const COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 days

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData()
  const slug = String(formData.get('slug') ?? '')
  const password = String(formData.get('password') ?? '')
  const returnTo = `/work/${slug}`

  if (!slug) return redirect('/work')

  const project = await sanityClient.fetch<{ password?: string } | null>(
    `*[_type == "project" && slug.current == $slug][0]{ password }`,
    { slug },
  )

  if (!project) return redirect('/work')

  const expected = project.password || import.meta.env.PORTFOLIO_PASSWORD
  const cookieName = project.password ? `project_access_${slug}` : 'portfolio_access'

  if (expected && password === expected) {
    cookies.set(cookieName, '1', {
      path: '/',
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'lax',
      maxAge: COOKIE_MAX_AGE,
    })
    return redirect(returnTo)
  }

  return redirect(`${returnTo}?error=1`)
}
