import { type Mods, classNames } from '@/shared/lib/classNames/classNames'

import styles from './Avatar.module.scss'
import { type CSSProperties, useMemo } from 'react'
import { AppImage } from '../AppImage'
import userIcon from '@/shared/assets/icons/user-filled.svg'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'

interface AvatarProps {
	className?: string
	src?: string
	size?: number
	alt?: string
	fallbackInverted?: boolean
}

/**
 * @deprecated
 */
export const Avatar = ({ className, src, size = 100, alt, fallbackInverted }: AvatarProps): JSX.Element => {
	const mods: Mods = {}

	const cls = useMemo<CSSProperties>(() => {
		return {
			height: size,
			width: size
		}
	}, [size])

	const fallback = <Skeleton width={size} height={size} border={'50%'} />
	const errorFallback = <Icon inverted={fallbackInverted} Svg={userIcon} width={size} height={size} />

	return (
		<AppImage
			errorFallback={errorFallback}
			fallback={fallback}
			alt={alt}
			src={src}
			style={cls}
			className={classNames(styles.Avatar, mods, [className ?? ''])}
		/>
	)
}
