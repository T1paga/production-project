import { classNames } from 'shared/lib/classNames/classNames'

import { Loader } from 'shared/ui/Loader'
import styles from './PageLoader.module.scss'

interface PageLoaderProps {
	className?: string
}

export const PageLoader = ({ className }: PageLoaderProps): JSX.Element => (
	<div className={classNames(styles.PageLoader, {}, [className ?? ''])}>
		<Loader />
	</div>
)
