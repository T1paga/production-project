import { classNames } from 'shared/lib/classNames/classNames'

import styles from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
	className?: string
}

export const LoginForm = ({ className }: LoginFormProps): JSX.Element => {
	const { t } = useTranslation()

	return (
		<div className={classNames(styles.LoginForm, {}, [className ?? ''])}>
			<Input className={styles.input} placeholder={t('Input username')} autoFocus />
			<Input className={styles.input} placeholder={t('Input password')} />
			<Button className={styles.loginBtn}>
				{t('Login')}
			</Button>
		</div>
	)
}
