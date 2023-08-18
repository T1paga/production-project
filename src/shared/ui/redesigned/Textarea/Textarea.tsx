import { ChangeEvent, TextareaHTMLAttributes, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Textarea.module.scss'

type TextareaInputProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'readOnly'>

interface TextareaProps extends TextareaInputProps {
	className?: string
	onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
	value: string
}

export const Textarea = memo((props: TextareaProps): JSX.Element => {
	const { className, value, onChange, ...otherprops } = props
	const { t } = useTranslation()

	return (
		<textarea
			className={classNames(styles.Textarea, {}, [className ?? '', 'auto-expand'])}
			value={value}
			onChange={onChange}
			{...otherprops}
		/>
	)
})