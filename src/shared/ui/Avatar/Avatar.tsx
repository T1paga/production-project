import { type Mods, classNames } from '@/shared/lib/classNames/classNames'

import styles from './Avatar.module.scss'
import { type CSSProperties, useMemo } from 'react'

interface AvatarProps {
	className?: string
	src?: string
	size?: number
	alt?: string
}

export const Avatar = ({ className, src, size, alt }: AvatarProps): JSX.Element => {
	const mods: Mods = {}

	const cls = useMemo<CSSProperties>(() => {
		return {
			height: size,
			width: size
		}
	}, [size])

	return (
		<img
			alt={alt}
			src={src}
			style={cls}
			className={classNames(styles.Avatar, mods, [className ?? ''])}
		/>
	)
}
