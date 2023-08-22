import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from '@/shared/ui/redesigned/Card'
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo'
import { getArticleDetailsData } from '@/entities/Article'
import cls from './AdditionalInfoContainer.module.scss'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router'
import { useDeleteArticle } from '@/features/editableArticleCard'

export const AdditionalInfoContainer = memo(() => {
	const article = useSelector(getArticleDetailsData)
	const navigate = useNavigate()
	const [deleteArticleMutation] = useDeleteArticle()

	const onEditArticle = useCallback(() => {
		if (article) {
			navigate(getRouteArticleEdit(article.id))
		}
	}, [article, navigate])

	const onDelete = useCallback((id) => () => {
		if (article) {
			deleteArticleMutation(id)
			navigate(getRouteArticles())
			window.location.reload()
		}
	}, [article, deleteArticleMutation, navigate])

	if (!article) {
		return null
	}

	return (
		<Card padding="24" border="round" className={cls.card}>
			<ArticleAdditionalInfo
				onEdit={onEditArticle}
				onDelete={onDelete(article.id)}
				author={article.user}
				createdAt={article.createdAt}
				views={article.views}
			/>
		</Card>
	)
})
