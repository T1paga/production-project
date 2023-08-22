import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleAdditionalInfo.module.scss'
import { User, getUserAuthData } from '@/entities/User'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Text } from '@/shared/ui/redesigned/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { useSelector } from 'react-redux'

interface ArticleAdditionalInfoProps {
	className?: string
	author: User
	createdAt: string
	views: number
	onEdit: () => void
	onDelete: () => void
}

export const ArticleAdditionalInfo = memo(
	(props: ArticleAdditionalInfoProps) => {
		const { className, author, createdAt, views, onEdit, onDelete } = props
		const { t } = useTranslation('article')
		const userData = useSelector(getUserAuthData)

		return (
			<VStack
				gap="32"
				className={classNames(cls.ArticleAdditionalInfo, {}, [
					className
				])}
			>
				<HStack gap="8">
					<Avatar src={author.avatar} size={32} />
					<Text text={author.username} bold />
					<Text text={createdAt} />
				</HStack>
				{userData?.id === author.id &&
					<VStack gap='8'>
						<Button onClick={onEdit}>{t('Редактировать')}</Button>
						<Button onClick={onDelete}>{t('Удалить')}</Button>
					</VStack>}
				<Text text={t('{{count}} просмотров', { count: views })} />
			</VStack>
		)
	}
)
