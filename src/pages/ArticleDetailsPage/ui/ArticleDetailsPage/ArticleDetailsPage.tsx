import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticlePageProps {
	className?: string
}

const ArticleDetailsPage = ({ className }: ArticlePageProps): JSX.Element => {
	const { t } = useTranslation('article')

	return (
		<div className={classNames(styles.ArticleDetailsPage, {}, [className ?? ''])}>
			ARTICLE DELAILS PAGE
		</div>
	)
}

export default memo(ArticleDetailsPage)
