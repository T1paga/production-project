import { classNames } from '@/shared/lib/classNames/classNames'
import { type HTMLAttributeAnchorTarget, memo } from 'react'

import styles from './ArticleListItem.module.scss'
import { useTranslation } from 'react-i18next'
import { type Article, type ArticleTextBlock } from '../../model/types/article'
import { Text } from '@/shared/ui/Text/Text'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Card } from '@/shared/ui/Card/Card'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleBlockType, ArticleView } from '../../model/const/const'
import { RoutePath } from '@/shared/const/router'

interface ArticleListItemProps {
	className?: string
	article: Article
	view?: ArticleView
	target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps): JSX.Element => {
	const {
		className,
		article,
		view,
		target
	} = props

	const { t } = useTranslation()

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
						<AppLink
							to={RoutePath.article_details + article.id}
							target={target}
						>
							<Button theme={ButtonTheme.OUTLINE}>
								Читать далее....
							</Button>
						</AppLink>
						{views}
					</div>
				</Card>
			</div>
		)
	}

	return (
		<AppLink
			to={RoutePath.article_details + article.id}
			target={target}
			className={classNames(styles.ArticleListItem, {}, [className ?? '', styles[view ?? '']])}
		>
			<Card className={styles.card}>
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
		</AppLink>
	)
}
)
