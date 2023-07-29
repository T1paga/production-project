import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

import styles from './Icon.module.scss'

interface IconProps {
	className?: string
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>
	inverted?: boolean
}

export const Icon = memo(({ className, Svg, inverted }: IconProps): JSX.Element => {
	return (
		<Svg className={classNames(inverted ? styles.inverted : styles.Icon, {}, [className ?? ''])
		} />
	)
}
)
