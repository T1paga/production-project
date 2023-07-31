import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

import { type Comment } from '../../model/types/comment'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui/Text'
import { CommentCard } from '../CommentCard/CommentCard'
import { VStack } from '@/shared/ui/Stack'

interface CommentListProps {
	className?: string
	comments?: Comment[]
	isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps): JSX.Element => {
	const { className, comments, isLoading } = props
	const { t } = useTranslation()

	if (isLoading) {
		return (
			<VStack gap='16' max className={classNames('styles.CommentList', {}, [className ?? ''])}>
				<CommentCard isLoading />
				<CommentCard isLoading />
				<CommentCard isLoading />
			</VStack>
		)
	}

	if (!comments) {
		return <></>
	}

	return (
		<VStack gap='16' max className={classNames('', {}, [className ?? ''])}>
			{comments?.length
				? comments.map((comment) => (
					<CommentCard
						key={comment.id}
						comment={comment}
						isLoading={isLoading}
					/>
				))
				: <Text text={t('No comments')} />
			}
		</VStack>
	)
}
)
