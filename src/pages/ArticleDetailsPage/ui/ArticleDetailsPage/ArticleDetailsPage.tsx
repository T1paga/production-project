import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useDispatch, useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import cls from './ArticleDetailsPage.module.scss'
import { AddCommentForm } from 'features/AddCommentForm'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import {
	fetchCommentsByArticleId
} from '../../../ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices//articleDetailsCommentSlice'
import { getArticleCommentsIsloading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../../ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'
import { Page } from 'widgets/Page/Page'

interface ArticleDetailsPageProps {
	className?: string
}

const reducers: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props
	const { t } = useTranslation()
	const { id } = useParams<{ id: string }>()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const comments = useSelector(getArticleComments.selectAll)
	const commentsIsLoading = useSelector(getArticleCommentsIsloading)

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles)
	}, [navigate])

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text))
	}, [dispatch])

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id))
	})

	if (!id) {
		return (
			<Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				{t('Статья не найдена')}
			</Page>
		)
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				<Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>Назад к списку</Button>
				<ArticleDetails id={id} />
				<Text className={cls.commentTitle} title={t('Комментарии')} />
				<AddCommentForm onSendComment={onSendComment} />
				<CommentList
					isLoading={commentsIsLoading}
					comments={comments}
				/>
			</Page>
		</DynamicModuleLoader>
	)
}

export default memo(ArticleDetailsPage)
