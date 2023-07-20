import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'

import styles from './ArticleListItem.module.scss'
import { useTranslation } from 'react-i18next'
import { type Article, ArticleView, ArticleBlockType, type ArticleTextBlock } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleListItemProps {
	className?: string
	article: Article
	view?: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps): JSX.Element => {
	const {
		className,
		article,
		view
	} = props

	const { t } = useTranslation()
	const navigate = useNavigate()

	const onOpenArticle = useCallback(() => {
		navigate(RoutePath.article_details + article.id)
	}, [article.id, navigate])

	const types = <Text text={article.type.join(', ')} className={styles.types} />
	const views = <Text text={String(article.views)} className={styles.views} />

	if (view === ArticleView.BIG) {
		const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock

		return (
			<div className={classNames(styles.ArticleListItem, {}, [className ?? '', styles[view ?? '']])}>
				<Card className={styles.card}>
					<div className={styles.header}>
						<Avatar size={30} src={article.user.avatar} />
						<Text text={article.user.username} className={styles.username} />
						<Text text={article.createdAt} className={styles.date} />
					</div>
					<Text title={article.title} className={styles.title} />
					{types}
					<img src={article.img} alt={article.title} className={styles.img} />
					{textBlock && (
						<ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
					)}
					<div className={styles.footer}>
						<Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
							Читать далее....
						</Button>
						{views}
					</div>
				</Card>
			</div>
		)
	}

	return (
		<div className={classNames(styles.ArticleListItem, {}, [className ?? '', styles[view ?? '']])}>
			<Card className={styles.card} onClick={onOpenArticle}>
				<div className={styles.imageWrapper}>
					<img alt={article.title} src={article.img} className={styles.img} />
					<Text text={article.createdAt} className={styles.date} />
				</div>
				<div className={styles.infoWrapper}>
					{types}
					{views}
					<Icon Svg={EyeIcon} />
				</div>
				<Text text={article.title} className={styles.title} />
			</Card>
		</div>
	)
}
)
