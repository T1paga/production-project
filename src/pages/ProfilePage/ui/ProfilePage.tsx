import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ProfilePage.module.scss'
import { memo, useCallback, useEffect } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
	ProfileCard, fetchProfileData, getProfileError, getProfileForm,
	getProfileIsLoading, getProfileReadonly, profileActions, profileReducer
} from 'entities/Profile'
import { useDispatch, useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'

const reducers: ReducersList = {
	profile: profileReducer
}

interface ProfilePageProps {
	className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps): JSX.Element => {
	const dispatch = useDispatch()

	const formData = useSelector(getProfileForm)
	const error = useSelector(getProfileError)
	const isLoading = useSelector(getProfileIsLoading)
	const readonly = useSelector(getProfileReadonly)

	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	const onChangeFirstname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ first: value || '' }))
	}, [dispatch])

	const onChangeLastname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ lastname: value || '' }))
	}, [dispatch])

	const onChangeAge = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ age: Number(value) || 0 }))
	}, [dispatch])

	const onChangeCity = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ city: value || '' }))
	}, [dispatch])

	const onChangeUsername = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ username: value || '' }))
	}, [dispatch])

	const onChangeAvatar = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ avatar: value || '' }))
	}, [dispatch])

	const onChangeCurrency = useCallback((currency: Currency) => {
		dispatch(profileActions.updateProfile({ currency }))
	}, [dispatch])

	const onChangeCountry = useCallback((country: Country) => {
		dispatch(profileActions.updateProfile({ country }))
	}, [dispatch])

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(styles.ProfilePage, {}, [className])}>
				<ProfilePageHeader />
				<ProfileCard
					data={formData}
					isLoading={isLoading}
					error={error}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeAge={onChangeAge}
					onChangeCity={onChangeCity}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
					onChangeCurrency={onChangeCurrency}
					onChangeCountry={onChangeCountry}
					readonly={readonly}
				/>
			</div>
		</DynamicModuleLoader>
	)
})

export default ProfilePage