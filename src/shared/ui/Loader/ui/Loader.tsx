import { classNames } from 'shared/lib/classNames/classNames'

import './Loader.scss'

interface LoaderProps {
	className?: string
}

export const Loader = ({ className }: LoaderProps): JSX.Element => (
	<div className={classNames('lds-roller', {}, [className ?? ''])}>
		<div>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	</div>
)
