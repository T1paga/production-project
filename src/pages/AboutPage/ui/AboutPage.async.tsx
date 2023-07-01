import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => {
	const module = await import('./AboutPage')
	return { default: module.default }
})