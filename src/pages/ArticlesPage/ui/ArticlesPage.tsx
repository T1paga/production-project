import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleList, type ArticleView, ArticleViewSelector } from 'entities/Article'
import { Page } from 'widgets/Page/Page'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import styles from './ArticlesPage.module.scss'
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/articlesPageSlice'
import { getArticlesPageError, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPageView } from '../model/selectors/articlesPageSelectors'
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage'

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
		dispatch(initArticlesPage())
	})

	const onChangeView = useCallback((view: ArticleView) => {
		dispatch(articlesPageActions.setView(view))
	}, [dispatch])

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
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
