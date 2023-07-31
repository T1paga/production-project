import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useSearchParams } from 'react-router-dom'
import { Page } from '@/widgets/Page'
import styles from './ArticlesPage.module.scss'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageReducer } from '../../model/slices/articlesPageSlice'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'

interface ArticlesPageProps {
	className?: string
}

const reducers: ReducersList = {
	articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps): JSX.Element => {
	const { t } = useTranslation('article')
	const dispatch = useAppDispatch()
	const [searchParams] = useSearchParams()

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage())
	}, [dispatch])

	useInitialEffect(() => {
		dispatch(initArticlesPage(searchParams))
	})

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			<Page onScrollEnd={onLoadNextPart} className={classNames(styles.ArticlesPage, {}, [className ?? ''])}>
				<ArticlesPageFilters />
				<ArticleInfiniteList className={styles.list} />
			</Page>
		</DynamicModuleLoader>
	)
}

export default memo(ArticlesPage)
