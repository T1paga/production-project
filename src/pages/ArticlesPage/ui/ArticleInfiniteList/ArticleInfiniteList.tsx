import { memo } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ArticleList } from 'entities/Article'
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { getArticles } from '../../model/slices/articlesPageSlice'
import { Text } from 'shared/ui/Text/Text'

interface ArticleInfiniteListProps {
	className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps): JSX.Element => {
	const { className } = props
	const dispatch = useAppDispatch()

	const articles = useSelector(getArticles.selectAll)
	const isLoading = useSelector(getArticlesPageIsLoading)
	const view = useSelector(getArticlesPageView)
	const error = useSelector(getArticlesPageError)

	if (error) {
		return <Text text='Произошла ошибка при подгрузке данных' />
	}

	return (
		<ArticleList
			className={className}
			isLoading={isLoading}
			view={view}
			articles={articles}
		/>
	)
}
)
