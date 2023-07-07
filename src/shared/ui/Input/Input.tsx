import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Input.module.scss'
import { memo, type InputHTMLAttributes, useState, useEffect, useRef } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
	className?: string
	autoFocus?: boolean
	value?: string
	onChange?: (value: string) => void
}

export const Input = memo((props: InputProps): JSX.Element => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		autoFocus,
		...otherProps
	} = props

	const ref = useRef<HTMLInputElement>(null)

	const [isFocused, setIsFocused] = useState(false)
	const [caretPosition, setCaretPosition] = useState(0)

	useEffect(() => {
		if (autoFocus) {
			setIsFocused(true)
			ref?.current?.focus()
		}
	}, [autoFocus])

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
		setCaretPosition(e.target.value.length)
	}

	const onBlur = () => {
		setIsFocused(false)
	}

	const onFocus = () => {
		setIsFocused(true)
	}

	const onSelect = (e: any) => {
		setCaretPosition(e?.target?.selectionStart || 0)
	}

	return (
		<div className={classNames(styles.InputWrapper, {}, [className ?? ''])}>
			{placeholder &&
				<div className={styles.placeholder}>
					{`${placeholder}>`}
				</div>
			}

			<div className={styles.caretWrapper}>
				<input
					ref={ref}
					className={styles.input}
					type={type}
					value={value}
					onChange={onChangeHandler}
					onFocus={onFocus}
					onBlur={onBlur}
					onSelect={onSelect}
					{...otherProps}
				/>
				{isFocused &&
					<span
						className={styles.caret}
						style={{ left: `${caretPosition * 9}px` }}
					/>}

			</div>

		</div>
	)
})
