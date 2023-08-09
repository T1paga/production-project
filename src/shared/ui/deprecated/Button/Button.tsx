import { type Mods, classNames } from '@/shared/lib/classNames/classNames'
import { memo, type ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

export enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	OUTLINE_RED = 'outlineRed',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
	square?: boolean
	size?: ButtonSize
	disabled?: boolean
	fullWidth?: boolean
}

/**
 * @deprecated
 */
export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		square,
		disabled,
		fullWidth,
		size = ButtonSize.M,
		...otherProps
	} = props

	const mods: Mods = {
		[styles[theme]]: true,
		[styles.square]: square,
		[styles[size]]: true,
		[styles.disabled]: disabled,
		[styles.fullWidth]: fullWidth
	}

	return (
		<button
			type="button"
			className={classNames(styles.Button, mods, [className])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	)
})
