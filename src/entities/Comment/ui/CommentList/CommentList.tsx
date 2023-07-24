import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'

import styles from './CommentList.module.scss'
import { type Comment } from '../../model/types/comment'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { CommentCard } from '../CommentCard/CommentCard'

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
			<div className={classNames(styles.CommentList, {}, [className ?? '', styles.loading])}>
				<CommentCard isLoading />
				<CommentCard isLoading />
				<CommentCard isLoading />
			</div>
		)
	}

	if (!comments) {
		return <></>
	}

	return (
		<div className={classNames(styles.CommentList, {}, [className ?? ''])}>
			{comments?.length
				? comments.map((comment) => (
					<CommentCard
						className={styles.comments}
						key={comment.id}
						comment={comment}
						isLoading={isLoading}
					/>
				))
				: <Text text={t('No comments')} />
			}
		</div>
	)
}
)
