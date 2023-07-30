import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

import styles from './Icon.module.scss'

interface IconProps extends React.SVGProps<SVGSVGElement> {
	className?: string
	Svg: React.FC<React.SVGProps<SVGSVGElement>>
	inverted?: boolean
}

export const Icon = memo(({ className, Svg, inverted, ...otherProps }: IconProps): JSX.Element => {
	return (
		<Svg
			className={classNames(inverted ? styles.inverted : styles.Icon, {}, [className ?? ''])}
			{...otherProps}
		/>
	)
}
)
