import { lazy } from 'react'

export const SettingsPageAsync = lazy(async () => {
	const module = await import('./SettingsPage')
	return { default: module.default }
})