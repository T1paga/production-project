import { lazy } from 'react'

export const AdminPanelPageAsync = lazy(async () => {
	const module = await import('./AdminPanelPage')
	return { default: module.default }
})