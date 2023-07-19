import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useDispatch, useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
	fetchCommentsByArticleId
} from '../../../ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import cls from './ArticleDetailsPage.module.scss'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices//articleDetailsCommentSlice'
import { getArticleCommentsIsloading } from 'pages/ArticleDetailsPage/model/selectors/comments'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../../ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'

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

	const comments = useSelector(getArticleComments.selectAll)
	const commentsIsLoading = useSelector(getArticleCommentsIsloading)

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text))
	}, [dispatch])

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id))
	})

	if (!id) {
		return (
			<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				{t('Статья не найдена')}
			</div>
		)
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				<ArticleDetails id={id} />
				<Text className={cls.commentTitle} title={t('Комментарии')} />
				<AddCommentForm onSendComment={onSendComment} />
				<CommentList
					isLoading={commentsIsLoading}
					comments={comments}
				/>
			</div>
		</DynamicModuleLoader>
	)
}

export default memo(ArticleDetailsPage)
