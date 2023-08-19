import { memo } from 'react'
import { useSelector } from 'react-redux'
import { ArticleList } from '@/entities/Article'
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { getArticles } from '../../model/slices/articlesPageSlice'
import { Text } from '@/shared/ui/deprecated/Text'
import { useTranslation } from 'react-i18next'

interface ArticleInfiniteListProps {
	className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps): JSX.Element => {
	const { className } = props
	const { t } = useTranslation('article')

	const articles = useSelector(getArticles.selectAll)
	const isLoading = useSelector(getArticlesPageIsLoading)
	const view = useSelector(getArticlesPageView)
	const error = useSelector(getArticlesPageError)

	if (error) {
		return <Text text={t('Произошла ошибка при подгрузке данных')} />
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
