import { classNames } from 'shared/lib/classNames/classNames'
import { type HTMLAttributeAnchorTarget, memo } from 'react'

import styles from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleView, type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text/Text'

interface ArticleListProps {
	className?: string
	articles: Article[]
	isLoading?: boolean
	view?: ArticleView
	target?: HTMLAttributeAnchorTarget
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
		view = ArticleView.SMALL,
		target
	} = props

	const { t } = useTranslation()

	const renderArticle = (article: Article) => {
		return <ArticleListItem
			key={article.id}
			article={article}
			view={view}
			className={styles.card}
			target={target}
		/>
	}

	if (!isLoading && !articles.length) {
		return (
			<div className={classNames(styles.ArticleList, {}, [className ?? '', styles[view ?? '']])}>
				<Text size={TextSize.L} title='Статьи не найдены' />
			</div>
		)
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
