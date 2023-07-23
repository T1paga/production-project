import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useDispatch, useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import styles from './ArticleDetailsPage.module.scss'
import { AddCommentForm } from 'features/AddCommentForm'
import { Page } from 'widgets/Page/Page'

import {
	fetchCommentsByArticleId
} from '../../../ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleComments } from '../../model/slices//articleDetailsCommentSlice'
import { getArticleCommentsIsloading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../../ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice'
import { getArticleRecommendationsIsloading } from '../../model/selectors/recommendations'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { articleDetailsPageReducer } from '../../model/slices'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

interface ArticleDetailsPageProps {
	className?: string
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props
	const { t } = useTranslation()
	const { id } = useParams<{ id: string }>()
	const dispatch = useDispatch()

	const comments = useSelector(getArticleComments.selectAll)
	const commentsIsLoading = useSelector(getArticleCommentsIsloading)
	const recommendations = useSelector(getArticleRecommendations.selectAll)
	const recommendationsIsLoading = useSelector(getArticleRecommendationsIsloading)

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text))
	}, [dispatch])

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id))
		dispatch(fetchArticleRecommendations())
	})

	if (!id) {
		return (
			<Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
				{t('Статья не найдена')}
			</Page>
		)
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
				<ArticleDetailsPageHeader />
				<ArticleDetails id={id} />
				<Text
					size={TextSize.L}
					className={styles.CommentTitle}
					title={t('Рекомендуем')}
				/>
				<ArticleList
					articles={recommendations}
					isLoading={recommendationsIsLoading}
					className={styles.recommendations}
					target='_blank'
				/>
				<Text
					size={TextSize.L}
					className={styles.CommentTitle}
					title={t('Комментарии')}
				/>
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
