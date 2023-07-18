import { classNames } from 'shared/lib/classNames/classNames'
import { type CSSProperties, memo } from 'react'

import styles from './Skeleton.module.scss'

interface SkeletonProps {
	className?: string
	height?: string | number
	width?: string | number
	border?: string
}

export const Skeleton = memo((props: SkeletonProps): JSX.Element => {
	const {
		className,
		border,
		height,
		width
	} = props

	const cls: CSSProperties = {
		width,
		height,
		borderRadius: border
	}

	return (
		<div
			className={classNames(styles.Skeleton, {}, [className ?? ''])}
			style={cls}
		>

		</div>
	)
}
)
