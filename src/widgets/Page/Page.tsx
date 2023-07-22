import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Page.module.scss'
import { type ReactNode, memo, type UIEvent, useRef, type MutableRefObject } from 'react'
import { useLocation } from 'react-router-dom'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfinityScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { uiActions } from 'features/UI'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { getUIscrollByPath } from 'features/UI/model/selectors/ui'
import { type StateSchema } from 'app/providers/StoreProvider'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'

interface PageProps {
	className?: string
	children: ReactNode
	onScrollEnd?: () => void
}

export const Page = (props: PageProps): JSX.Element => {
	const { className, children, onScrollEnd } = props
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
	const dispatch = useAppDispatch()
	const { pathname } = useLocation()
	const scrollPosition = useSelector((state: StateSchema) => getUIscrollByPath(state, pathname))

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd
	})

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition
	})

	const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		console.log('scroll')
		dispatch(uiActions.setScrollPosition({
			position: e.currentTarget.scrollTop,
			path: pathname
		}))
	}, 500)

	return (
		<section
			onScroll={onScroll}
			ref={wrapperRef}
			className={classNames(styles.Page, {}, [className ?? ''])}
		>
			{children}
			<div ref={triggerRef}></div>
		</section>
	)
}
