import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { memo } from 'react'

interface LangSwitcherProps {
	className?: string
	short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation()

	const toggle = async () => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button
			className={classNames('', {}, [className])}
			theme={ButtonTheme.CLEAR}
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onClick={toggle}
		>
			{t(short ? 'Короткий язык' : 'Язык')}
		</Button>
	)
})
