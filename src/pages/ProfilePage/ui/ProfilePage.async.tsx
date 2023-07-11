import { lazy } from 'react'

export const ProfilePageAsync = lazy(async () => {
	const module = await import('./ProfilePage')
	return { default: module.default }
})