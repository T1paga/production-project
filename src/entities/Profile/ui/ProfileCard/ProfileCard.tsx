import { type Mods, classNames } from 'shared/lib/classNames/classNames'

import styles from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import type { Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { type Country } from 'shared/const/common'
import { CountrySelect } from 'entities/Country'

interface ProfileCardProps {
	className?: string
	data?: Profile
	error?: string
	isLoading?: boolean
	readonly?: boolean
	onChangeFirstname?: (value?: string) => void
	onChangeLastname?: (value?: string) => void
	onChangeAge?: (value?: string) => void
	onChangeCity?: (value?: string) => void
	onChangeUsername?: (value?: string) => void
	onChangeAvatar?: (value?: string) => void
	onChangeCurrency?: (currency: Currency) => void
	onChangeCountry?: (county: Country) => void
}

export const ProfileCard = (props: ProfileCardProps): JSX.Element => {
	const {
		className,
		data,
		isLoading,
		error,
		readonly,
		onChangeFirstname,
		onChangeLastname,
		onChangeAge,
		onChangeCity,
		onChangeUsername,
		onChangeAvatar,
		onChangeCurrency,
		onChangeCountry
	} = props

	const { t } = useTranslation('profile')

	if (isLoading) {
		return (
			<div className={classNames(styles.ProfileCard, {}, [className ?? '', styles.loading])}>
				<Loader />
			</div>
		)
	}

	if (error) {
		return (
			<div className={classNames(styles.ProfileCard, {}, [className ?? '', styles.error])}>
				<Text
					theme={TextTheme.ERROR}
					title={t('An error occurred while loading')}
					text={t('try refreshing the page')}
					align={TextAlign.CENTER}
				/>
			</div>
		)
	}

	const mods: Mods = {
		[styles.editing]: !readonly
	}

	return (
		<div className={classNames(styles.ProfileCard, mods, [className ?? ''])}>
			<div className={styles.data}>

				{data?.avatar &&
					<div className={styles.avatarWrapper}>
						<Avatar src={data.avatar} size={150} />
					</div>
				}

				<Input
					value={data?.first}
					placeholder={t('your name')}
					className={styles.input}
					onChange={onChangeFirstname}
					readonly={readonly}
				/>
				<Input
					value={data?.lastname}
					placeholder={t('your lastname')}
					className={styles.input}
					onChange={onChangeLastname}
					readonly={readonly}
				/>
				<Input
					value={String(data?.age)}
					placeholder={t('your age')}
					className={styles.input}
					onChange={onChangeAge}
					readonly={readonly}
				/>
				<Input
					value={String(data?.city)}
					placeholder={t('your city')}
					className={styles.input}
					onChange={onChangeCity}
					readonly={readonly}
				/>
				<Input
					value={String(data?.username)}
					placeholder={t('your username')}
					className={styles.input}
					onChange={onChangeUsername}
					readonly={readonly}
				/>
				<Input
					value={String(data?.avatar)}
					placeholder={t('your avatar')}
					className={styles.input}
					onChange={onChangeAvatar}
					readonly={readonly}
				/>
				<CurrencySelect
					className={styles.input}
					value={data?.currency}
					onChange={onChangeCurrency}
					readonly={readonly || false}
				/>
				<CountrySelect
					className={styles.input}
					value={data?.country}
					onChange={onChangeCountry}
					readonly={readonly || false}
				/>
			</div>
		</div>
	)
}
