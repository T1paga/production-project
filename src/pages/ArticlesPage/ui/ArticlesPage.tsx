import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticlesPageProps {
	className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps): JSX.Element => {
	const { t } = useTranslation('article')

	return (
		<div className={classNames(styles.ArticlesPage, {}, [className ?? ''])}>
			ARTICLES PAGE
		</div>
	)
}

export default memo(ArticlesPage)
