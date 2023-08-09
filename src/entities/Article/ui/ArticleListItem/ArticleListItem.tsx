import { classNames } from '@/shared/lib/classNames/classNames'
import { type HTMLAttributeAnchorTarget, memo } from 'react'

import styles from './ArticleListItem.module.scss'
import { useTranslation } from 'react-i18next'
import { type Article, type ArticleTextBlock } from '../../model/types/article'
import { Text } from '@/shared/ui/deprecated/Text'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { Card } from '@/shared/ui/deprecated/Card'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleBlockType, ArticleView } from '../../model/const/const'
import { getRouteArticleDetails } from '@/shared/const/router'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'

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
			<div data-testid={'ArticleListItem'} className={classNames(styles.ArticleListItem, {}, [className ?? '', styles[view ?? '']])}>
				<Card className={styles.card}>
					<div className={styles.header}>
						<Avatar size={30} src={article.user.avatar} />
						<Text text={article.user.username} className={styles.username} />
						<Text text={article.createdAt} className={styles.date} />
					</div>
					<Text title={article.title} className={styles.title} />
					{types}
					<AppImage
						fallback={<Skeleton width={'100%'} height={250} />}
						src={article.img}
						alt={article.title}
						className={styles.img}
					/>
					{textBlock && (
						<ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
					)}
					<div className={styles.footer}>
						<AppLink
							to={getRouteArticleDetails(article.id)}
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
			data-testid={'ArticleListItem'}
			to={getRouteArticleDetails(article.id)}
			target={target}
			className={classNames(styles.ArticleListItem, {}, [className ?? '', styles[view ?? '']])}
		>
			<Card className={styles.card}>
				<div className={styles.imageWrapper}>
					<AppImage
						fallback={<Skeleton width={200} height={200} />}
						alt={article.title}
						src={article.img}
						className={styles.img}
					/>
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
