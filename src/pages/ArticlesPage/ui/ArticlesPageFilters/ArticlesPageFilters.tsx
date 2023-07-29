import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useMemo } from 'react'

import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { type ArticleView, ArticleViewSelector, type ArticleSortField, type ArticleType, ArticleTypeTabs } from '@/entities/Article'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { Card } from '@/shared/ui/Card/Card'
import { Input } from '@/shared/ui/Input/Input'
import { ArticleSortSelector } from '@/entities/Article/ui/ArticleSortSelector/ArticleSortSelector'
import styles from './ArticlesPageFilters.module.scss'
import { type sortOrder } from '@/shared/types'
import { articlesPageActions } from '../../model/slices/articlesPageSlice'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { type TabItem, Tabs } from '@/shared/ui/Tabs/Tabs'
import {
	getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort,
	getArticlesPageType, getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'

interface ArticlesPageFiltersProps {
	className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps): JSX.Element => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const view = useSelector(getArticlesPageView)
	const sort = useSelector(getArticlesPageSort)
	const order = useSelector(getArticlesPageOrder)
	const search = useSelector(getArticlesPageSearch)
	const type = useSelector(getArticlesPageType)

	const fetchData = useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }))
	}, [dispatch])

	const debouncedFetchData = useDebounce(fetchData, 1000)

	const onChangeView = useCallback((view: ArticleView) => {
		dispatch(articlesPageActions.setView(view))
		dispatch(articlesPageActions.setPage(1))
		fetchData()
	}, [dispatch, fetchData])

	const onChangeSort = useCallback((newSort: ArticleSortField) => {
		dispatch(articlesPageActions.setSort(newSort))
		dispatch(articlesPageActions.setPage(1))
		debouncedFetchData()
	}, [dispatch, debouncedFetchData])

	const onChangeOrder = useCallback((newOrder: sortOrder) => {
		dispatch(articlesPageActions.setOrder(newOrder))
		dispatch(articlesPageActions.setPage(1))
		debouncedFetchData()
	}, [dispatch, debouncedFetchData])

	const onChangeSearch = useCallback((search: string) => {
		dispatch(articlesPageActions.setSearch(search))
		dispatch(articlesPageActions.setPage(1))
		debouncedFetchData()
	}, [dispatch, debouncedFetchData])

	const onChangeType = useCallback((value: ArticleType) => {
		dispatch(articlesPageActions.setType(value))
		dispatch(articlesPageActions.setPage(1))
		fetchData()
	}, [dispatch, fetchData])

	return (
		<div className={classNames(styles.ArticlesPageFilters, {}, [className ?? ''])}>
			<div className={styles.sortWrapper}>
				<ArticleSortSelector
					order={order}
					onChangeOrder={onChangeOrder}
					sort={sort}
					onChangeSort={onChangeSort}
				/>
				<ArticleViewSelector view={view} onViewClick={onChangeView} />
			</div>
			<Card className={styles.search}>
				<Input
					value={search}
					onChange={onChangeSearch}
					placeholder={'Поиск'}
				/>
			</Card>
			<ArticleTypeTabs
				className={styles.tabs}
				value={type}
				onChangeType={onChangeType}
			/>
		</div>
	)
}
)
