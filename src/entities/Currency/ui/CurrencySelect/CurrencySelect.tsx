import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Currency } from '../../modal/types/currency'
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox'

interface CurrencySelectProps {
	className?: string
	value?: Currency
	onChange?: (value: Currency) => void
	readonly: boolean
}

const options = [
	{ value: Currency.RUB, content: Currency.RUB },
	{ value: Currency.EUR, content: Currency.EUR },
	{ value: Currency.USD, content: Currency.USD }
]

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps): JSX.Element => {
	const { t } = useTranslation()

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Currency)
	}, [onChange])

	return (
		<ListBox
			className={className}
			value={value}
			defaultValue={'Укажите валюту'}
			label={'Укажите валюту'}
			onChange={onChangeHandler}
			items={options}
			readonly={readonly}
			direction='top right'
		/>
	)
})
