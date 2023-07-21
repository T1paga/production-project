import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { type Article, ArticleList, type ArticleView, ArticleViewSelector } from 'entities/Article'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import styles from './ArticlesPage.module.scss'
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList'
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/articlesPageSlice'
import { getArticlesPageError, getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum, getArticlesPageView } from '../model/selectors/articlesPageSelectors'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage'

interface ArticlesPageProps {
	className?: string
}

const reducers: ReducersList = {
	articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps): JSX.Element => {
	const { t } = useTranslation('article')
	const dispatch = useAppDispatch()
	const articles = useSelector(getArticles.selectAll)

	const isLoading = useSelector(getArticlesPageIsLoading)
	const error = useSelector(getArticlesPageError)
	const view = useSelector(getArticlesPageView)

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage())
	}, [dispatch])

	useInitialEffect(() => {
		dispatch(articlesPageActions.initState())
		dispatch(fetchArticlesList({
			page: 1
		}))
	})

	const onChangeView = useCallback((view: ArticleView) => {
		dispatch(articlesPageActions.setView(view))
	}, [dispatch])

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page onScrollEnd={onLoadNextPart} className={classNames(styles.ArticlesPage, {}, [className ?? ''])}>
				<ArticleViewSelector view={view} onViewClick={onChangeView} />
				<ArticleList
					isLoading={isLoading}
					view={view}
					articles={articles}
				/>
			</Page>
		</DynamicModuleLoader>
	)
}

export default memo(ArticlesPage)
