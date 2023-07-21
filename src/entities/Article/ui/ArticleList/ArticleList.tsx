import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'

import styles from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleView, type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
	className?: string
	articles: Article[]
	isLoading?: boolean
	view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
	return (
		new Array(view === ArticleView.SMALL ? 9 : 3)
			.fill(0)
			.map((item, index) => <ArticleListItemSkeleton key={index} view={view} className={styles.card} />)
	)
}

export const ArticleList = memo((props: ArticleListProps): JSX.Element => {
	const {
		className,
		articles = [],
		isLoading,
		view = ArticleView.SMALL
	} = props

	const { t } = useTranslation()

	// if (isLoading) {
	// 	return <div className={classNames(styles.ArticleList, {}, [className ?? '', styles[view ?? '']])}>
	// 		{getSkeletons(view)}
	// 	</div>
	// }

	const renderArticle = (article: Article) => {
		return <ArticleListItem
			key={article.id}
			article={article}
			view={view}
			className={styles.card}
		/>
	}

	return (
		<div className={classNames(styles.ArticleList, {}, [className ?? '', styles[view ?? '']])}>
			{articles?.length > 0
				? articles.map(renderArticle)
				: <></>
			}
			{isLoading && getSkeletons(view)}
		</div>
	)
}
)
