import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ProfilePage.module.scss'

import { VStack } from '@/shared/ui/Stack'
import { EditableProfileCard } from '@/features/editableProfileCard'
import { Page } from '@/widgets/Page/Page'
import { useParams } from 'react-router-dom'
import { Text } from '@/shared/ui/Text/Text'

interface ProfilePageProps {
	className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps): JSX.Element => {
	const { id } = useParams<{ id: string }>()

	return (
		<Page className={classNames(styles.ProfilePage, {}, [className])}>
			<VStack gap='16' max>
				<EditableProfileCard id={id} />
			</VStack>
		</Page>
	)
})

export default ProfilePage