import { classNames } from 'shared/lib/classNames/classNames'
import { type ReactNode, memo, useRef, type MutableRefObject } from 'react'

import styles from './Page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfinityScroll'

interface PageProps {
	className?: string
	children: ReactNode
	onScrollEnd?: () => void
}

export const Page = (props: PageProps): JSX.Element => {
	const { className, children, onScrollEnd } = props
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd
	})

	return (
		<div
			ref={wrapperRef}
			className={classNames(styles.Page, {}, [className ?? ''])}
		>
			{children}
			<div ref={triggerRef}></div>
		</div>
	)
}
