import { lazy } from 'react'

export const ArticlesPageAsync = lazy(async () => {
	const module = await import('./ArticlesPage')
	return { default: module.default }
})