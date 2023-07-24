import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ProfilePage.module.scss'
import { memo, useCallback } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
	ProfileCard, ValidateProfileError, fetchProfileData, getProfileError, getProfileForm,
	getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions, profileReducer
} from 'entities/Profile'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack'

const reducers: ReducersList = {
	profile: profileReducer
}

interface ProfilePageProps {
	className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps): JSX.Element => {
	const dispatch = useAppDispatch()
	const { t } = useTranslation('profile')

	const formData = useSelector(getProfileForm)
	const error = useSelector(getProfileError)
	const isLoading = useSelector(getProfileIsLoading)
	const readonly = useSelector(getProfileReadonly)
	const validateErrors = useSelector(getProfileValidateErrors)
	const { id } = useParams<{ id: string }>()

	const validateErrorTranslate = {
		[ValidateProfileError.INCORRECT_AGE]: t('incorrect_age'),
		[ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect_country'),
		[ValidateProfileError.INCORRECT_USER_DATA]: t('incorrect_user_data'),
		[ValidateProfileError.NO_DATA]: t('no_data'),
		[ValidateProfileError.SERVER_ERROR]: t('server_error')
	}

	useInitialEffect(() => {
		if (id) {
			dispatch(fetchProfileData(id))
		}
	})

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
			<Page className={classNames(styles.ProfilePage, {}, [className])}>
				<VStack gap='16' max>
					<ProfilePageHeader />
					{validateErrors?.length && validateErrors.map(error => {
						return <Text theme={TextTheme.ERROR} text={error} key={error} />
					})}
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
				</VStack>
			</Page>
		</DynamicModuleLoader>
	)
})

export default ProfilePage