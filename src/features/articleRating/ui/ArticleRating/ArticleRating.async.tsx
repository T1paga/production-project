import { FC, lazy, Suspense } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { type ArticleRatingProps } from './ArticleRating'

const ArticleRatingLazy = lazy(async () => {
	const module = await import('./ArticleRating')
	return { default: module.default }
})

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
	return (
		<Suspense fallback={<Skeleton width="100%" height={140} />}>
			<ArticleRatingLazy {...props} />
		</Suspense>
	)
}
