import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const reducers: ReducersList = {
	profile: profileReducer
}

interface ProfilePageProps {
	className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps): JSX.Element => {
	const { t } = useTranslation()

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(styles.ProfilePage, {}, [className ?? ''])}>
				{t('Profile page')}
			</div>
		</DynamicModuleLoader>
	)
})

export default ProfilePage