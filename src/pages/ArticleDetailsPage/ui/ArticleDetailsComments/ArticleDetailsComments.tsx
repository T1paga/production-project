import { classNames } from '@/shared/lib/classNames/classNames'
import { Suspense, memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { Text, TextSize } from '@/shared/ui/Text/Text'
import { AddCommentForm } from '@/features/AddCommentForm'
import { CommentList } from '@/entities/Comment'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { getArticleComments } from '../../model/slices/articleDetailsCommentSlice'
import { getArticleCommentsIsloading } from '../../model/selectors/comments'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { VStack } from '@/shared/ui/Stack'

interface ArticleDetailsCommentsProps {
	className?: string
	id?: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps): JSX.Element => {
	const { className, id } = props
	const { t } = useTranslation()

	const dispatch = useAppDispatch()

	const comments = useSelector(getArticleComments.selectAll)
	const commentsIsLoading = useSelector(getArticleCommentsIsloading)

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id))
	})

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text))
	}, [dispatch])

	return (
		<VStack gap='16' max className={classNames('', {}, [className ?? ''])}>
			<Text
				size={TextSize.L}
				title={t('Комментарии')}
			/>
			<AddCommentForm onSendComment={onSendComment} />
			<CommentList
				isLoading={commentsIsLoading}
				comments={comments}
			/>
		</VStack>
	)
}
)
