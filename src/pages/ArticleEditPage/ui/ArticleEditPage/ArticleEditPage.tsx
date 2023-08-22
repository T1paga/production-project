import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

import styles from './ArticleEditPage.module.scss'
import { Page } from '@/widgets/Page'
import { useParams } from 'react-router-dom'
import { EditableArticleCard, AddNewArticle } from '@/features/editableArticleCard'

interface ArticleEditPageProps {
	className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps): JSX.Element => {
	const { className } = props
	const { id } = useParams<{ id: string }>()
	const isEdit = Boolean(id)

	return (
		<Page className={classNames(styles.ArticleEditPage, {}, [className ?? ''])}>
			{isEdit
				? <EditableArticleCard articleId={id || ''} />
				: <AddNewArticle />
			}
		</Page>
	)
}
)

export default ArticleEditPage
