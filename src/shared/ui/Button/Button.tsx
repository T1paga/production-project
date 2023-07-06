import { classNames } from 'shared/lib/classNames/classNames'
import { type ButtonHTMLAttributes, type FC } from 'react'
import cls from './Button.module.scss'
import { Theme } from 'app/providers/ThemeProvider'

export enum ThemeButton {
	CLEAR_INVERTED = 'clearInverted',
	CLEAR = 'clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
	square?: boolean
	size?: SizeButton
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		square,
		size,
		...otherProps
	} = props

	console.log('size', size)

	const mods: Record<string, boolean> = {
		[cls[theme ?? Theme.LIGHT]]: true,
		[cls.square]: square ?? false,
		[cls[size ?? '']]: Boolean(size)
	}

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [className ?? ''])
			}
			{...otherProps}
		>
			{children}
		</button >
	)
}
