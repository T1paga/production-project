import { lazy } from 'react'

export const ArticleDetailsPageAsync = lazy(async () => {
	const module = await import('./ArticleDetailsPage')
	return { default: module.default }
})
