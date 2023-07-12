import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
	className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps): JSX.Element => {
	const { t } = useTranslation('profile')

	const data = useSelector(getProfileData)
	const error = useSelector(getProfileError)
	const isLoading = useSelector(getProfileIsLoading)

	return (
		<div className={classNames(styles.ProfileCard, {}, [className ?? ''])}>
			<div className={styles.header}>
				<Text title={t('User profile')} />
				<Button theme={ButtonTheme.OUTLINE} className={styles.editBtn}>
					{t('edit')}
				</Button>
			</div>
			<div className={styles.data}>
				<Input value={data?.first} placeholder={t('your name')} className={styles.input} />
				<Input value={data?.lastname} placeholder={t('your lastname')} className={styles.input} />
			</div>
		</div>
	)
}
