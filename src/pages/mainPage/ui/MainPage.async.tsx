import { lazy } from 'react'

export const MainPageAsync = lazy(async () => {
	const module = await import('./MainPage')
	return { default: module.default }
})