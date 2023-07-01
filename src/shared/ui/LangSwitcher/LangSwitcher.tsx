import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
	className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation()

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const toggle = async () => {
		void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button
			className={classNames('', {}, [className ?? ''])}
			theme={ThemeButton.CLEAR}
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onClick={toggle}
		>
			{t('Язык')}
		</Button>
	)
}
