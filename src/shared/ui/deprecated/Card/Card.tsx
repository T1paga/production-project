import { classNames } from '@/shared/lib/classNames/classNames'
import { type HTMLAttributes, memo, type ReactNode } from 'react'
import styles from './Card.module.scss'

export enum CardTheme {
	NORMAL = 'normal',
	OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	children: ReactNode
	theme?: CardTheme
	max?: boolean
}

/**
 * @deprecated
 */
export const Card = memo((props: CardProps) => {
	const { className, children, max, theme = CardTheme.NORMAL, ...otherProps } = props

	return (
		<div
			className={classNames(styles.Card, { [styles.max]: max }, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</div>
	)
})
