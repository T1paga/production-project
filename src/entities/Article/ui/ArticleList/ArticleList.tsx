import { classNames } from 'shared/lib/classNames/classNames'
import { type HTMLAttributeAnchorTarget, memo } from 'react'

import styles from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleView, type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { AutoSizer, List, type ListRowProps, WindowScroller } from 'react-virtualized'
import { PAGE_ID } from 'widgets/Page/Page'

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

	const isBig = view === ArticleView.BIG

	const itemsPerRow = isBig ? 1 : 3 // ref.cirrentWidth / item_width
	const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow)

	const renderArticle = (article: Article) => {
		return <ArticleListItem
			key={article.id}
			article={article}
			view={view}
			className={styles.card}
			target={target}
		/>
	}

	const rowRenderer = ({
		index, isScrolling, isVisible, key, style
	}: ListRowProps) => {
		const items = []
		const fromIndex = index * itemsPerRow
		const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)

		for (let i = fromIndex; i < toIndex; i++) {
			// @ts-ignore
			items.push(renderArticle(articles[i]))
		}

		return (
			<div
				key={key}
				className={styles.row}
				style={style}
			>
				{items}
			</div>
		)
	}

	if (!isLoading && !articles.length) {
		return (
			<div className={classNames(styles.ArticleList, {}, [className ?? '', styles[view ?? '']])}>
				<Text size={TextSize.L} title='Статьи не найдены' />
			</div>
		)
	}

	return (
		<WindowScroller
			scrollElement={document.getElementById(PAGE_ID) as Element}
		>
			{({
				width,
				height,
				registerChild,
				onChildScroll,
				isScrolling,
				scrollTop
			}) => (
				<div
					ref={registerChild}
					className={classNames(styles.ArticleList, {}, [className ?? '', styles[view ?? '']])}
				>
					<List
						height={height ?? 700}
						rowCount={rowCount}
						rowHeight={isBig ? 700 : 330}
						rowRenderer={rowRenderer}
						width={width ? width - 80 : 700}
						autoHeight
						onScroll={onChildScroll}
						isScrolling={isScrolling}
						scrollTop={scrollTop}
					/>
					{isLoading && getSkeletons(view)}
				</div>
			)}

		</WindowScroller>
		// <div className={classNames(styles.ArticleList, {}, [className ?? '', styles[view ?? '']])}>
		// 	{articles?.length > 0
		// 		? articles.map(renderArticle)
		// 		: <></>
		// 	}
		// 	{isLoading && getSkeletons(view)}
		// </div>
	)
}
)
