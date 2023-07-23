import { lazy } from 'react'

export const ArticleEditPageAsync = lazy(async () => {
	const module = await import('./ArticleEditPage')
	return { default: module.default }
})