import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from 'entities/Article'
import { getCanEditArticle } from '../../model/selectors/article'
import { HStack } from 'shared/ui/Stack'

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
		navigate(RoutePath.articles)
	}, [navigate])

	const onEditArticle = useCallback(() => {
		navigate(`${RoutePath.articles}/${article?.id || ''}/edit`)
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
