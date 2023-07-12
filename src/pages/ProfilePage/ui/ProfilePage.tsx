import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useEffect } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import { useDispatch } from 'react-redux'

const reducers: ReducersList = {
	profile: profileReducer
}

interface ProfilePageProps {
	className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps): JSX.Element => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(styles.ProfilePage, {}, [className])}>
				<ProfileCard />
			</div>
		</DynamicModuleLoader>
	)
})

export default ProfilePage