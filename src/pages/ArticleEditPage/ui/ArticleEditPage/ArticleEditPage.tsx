import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

import styles from './ArticleEditPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { useParams } from 'react-router-dom'
import { EditableArticleCard } from '@/features/editableArticleCard'

interface ArticleEditPageProps {
	className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps): JSX.Element => {
	const { className } = props
	const { t } = useTranslation()
	const { id } = useParams<{ id: string }>()
	const isEdit = Boolean(id)

	return (
		<Page className={classNames(styles.ArticleEditPage, {}, [className ?? ''])}>
			{
				isEdit
					? `Редактирование статьи с id = ${id || ''}`
					: 'Создание новой статьи'
			}
			<EditableArticleCard articleId={id || ''} />
		</Page>
	)
}
)

export default ArticleEditPage
