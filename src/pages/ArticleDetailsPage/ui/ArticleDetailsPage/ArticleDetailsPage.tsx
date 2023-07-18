import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'

interface ArticlePageProps {
	className?: string
}

const ArticleDetailsPage = ({ className }: ArticlePageProps): JSX.Element => {
	const { t } = useTranslation('article')
	const { id } = useParams<{ id: string }>()

	if (!id) {
		return (
			<div className={classNames(styles.ArticleDetailsPage, {}, [className ?? ''])}>
				{t('Article not found')}
			</div>
		)
	}

	return (
		<div className={classNames(styles.ArticleDetailsPage, {}, [className ?? ''])}>
			<ArticleDetails id={id} />
		</div>
	)
}

export default memo(ArticleDetailsPage)
