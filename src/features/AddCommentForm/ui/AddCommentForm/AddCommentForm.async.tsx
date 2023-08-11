import { lazy } from 'react'

export const AddCommentFormAsync = lazy(async () => {
	const module = await import('./AddCommentForm')
	return { default: module.default }
})
