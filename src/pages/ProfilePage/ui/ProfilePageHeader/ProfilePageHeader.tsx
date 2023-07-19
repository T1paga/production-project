import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from 'entities/User'

interface ProfilePageHeaderProps {
	className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps): JSX.Element => {
	const { t } = useTranslation('profile')

	const authData = useSelector(getUserAuthData)
	const profileData = useSelector(getProfileData)

	const canEdit = authData?.id === profileData?.id

	const readonly = useSelector(getProfileReadonly)
	const dispatch = useAppDispatch()

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false))
	}, [dispatch])

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit())
	}, [dispatch])

	const onSave = useCallback(() => {
		void dispatch(updateProfileData())
	}, [dispatch])

	return (
		<div className={classNames(styles.ProfilePageHeader, {}, [className ?? ''])}>
			<Text title={t('User profile')} />
			{canEdit && (
				<div className={styles.btnsWrapper}>
					{readonly
						? <>
							<Button
								theme={ButtonTheme.OUTLINE}
								className={styles.editBtn}
								onClick={onEdit}
							>
								{t('edit')}
							</Button>
						</>
						: <>
							<Button
								theme={ButtonTheme.OUTLINE_RED}
								className={styles.editBtn}
								onClick={onCancelEdit}
							>
								{t('cancel')}
							</Button>
							<Button
								theme={ButtonTheme.OUTLINE}
								className={styles.saveBtn}
								onClick={onSave}
							>
								{t('save')}
							</Button>
						</>
					}
				</div>
			)}
		</div>
	)
}
