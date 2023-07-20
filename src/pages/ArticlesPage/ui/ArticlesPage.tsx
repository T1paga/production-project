import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { type Article, ArticleList, type ArticleView } from 'entities/Article'

interface ArticlesPageProps {
	className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps): JSX.Element => {
	const { t } = useTranslation('article')

	return (
		<div className={classNames(styles.ArticlesPage, {}, [className ?? ''])}>
			<ArticleList isLoading view={'BIG' as ArticleView} articles={[]} />
		</div>
	)
}

export default memo(ArticlesPage)
