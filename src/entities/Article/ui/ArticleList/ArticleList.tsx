import { useTranslation } from 'react-i18next'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui/Text/Text'
import { ArticleView } from '../../model/const/const'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import styles from './ArticleList.module.scss'
import { type Article } from '../../model/types/article'

interface ArticleListProps {
	className?: string
	articles: Article[]
	isLoading?: boolean
	target?: HTMLAttributeAnchorTarget
	view?: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
	.fill(0)
	.map((item, index) => (
		<ArticleListItemSkeleton className={styles.card} key={index} view={view} />
	))

export const ArticleList = memo((props: ArticleListProps) => {
	const {
		className,
		articles,
		view = ArticleView.SMALL,
		isLoading,
		target
	} = props
	const { t } = useTranslation()

	if (!isLoading && !articles.length) {
		return (
			<div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
				<Text size={TextSize.L} title={t('Статьи не найдены')} />
			</div>
		)
	}

	return (
		<div
			className={classNames(styles.ArticleList, {}, [className, styles[view]])}
		>
			{articles.map((item) => (
				<ArticleListItem
					article={item}
					view={view}
					target={target}
					key={item.id}
					className={styles.card}
				/>
			))}
			{isLoading && getSkeletons(view)}
		</div>

	)
})
