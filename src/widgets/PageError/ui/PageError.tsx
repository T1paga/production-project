import { classNames } from '@/shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import styles from './PageError.module.scss'

interface PageErrorProps {
	className?: string
}

export const PageError = ({ className }: PageErrorProps): JSX.Element => {
	const { t } = useTranslation()

	const reloadPage = (): void => {
		location.reload()
	}

	return (
		<div className={classNames(styles.PageError, {}, [className])}>
			<p>{t('Произошла непредвиденная ошибка')}</p>
			<Button onClick={reloadPage} className="" theme={ButtonTheme.CLEAR}>{t('Обновить страницу')}</Button>
		</div>
	)
}
