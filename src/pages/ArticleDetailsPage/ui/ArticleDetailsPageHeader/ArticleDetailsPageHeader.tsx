import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from '@/entities/Article'
import { getCanEditArticle } from '../../model/selectors/article'
import { HStack } from '@/shared/ui/Stack'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router'

interface ArticleDetailsPageHeaderProps {
	className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps): JSX.Element => {
	const { className } = props
	const { t } = useTranslation()
	const navigate = useNavigate()
	const article = useSelector(getArticleDetailsData)

	const canEdit = useSelector(getCanEditArticle)

	const onBackToList = useCallback(() => {
		navigate(getRouteArticles())
	}, [navigate])

	const onEditArticle = useCallback(() => {
		navigate(getRouteArticleEdit(article?.id ?? ''))
	}, [navigate, article?.id])

	return (
		<HStack justify='between' max className={classNames('', {}, [className ?? ''])}>
			<Button
				theme={ButtonTheme.OUTLINE}
				onClick={onBackToList}
			>
				Назад к списку
			</Button>
			{canEdit && <Button
				theme={ButtonTheme.OUTLINE}
				onClick={onEditArticle}
			>
				Редактировать
			</Button>}
		</HStack>
	)
}
)
