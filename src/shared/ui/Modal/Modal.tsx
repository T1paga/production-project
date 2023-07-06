import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Modal.module.scss'
import { useState, type ReactNode, useRef, FC, useEffect, useCallback } from 'react'
import { Portal } from '../Portal/Portal'

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen?: boolean
	onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps): any => {
	const { className, children, isOpen, onClose } = props

	const [isClosing, setIsClosing] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeHandler()
		}
	}, [closeHandler])

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown)
		}

		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [isOpen, onKeyDown])

	const mods: Record<string, boolean> = {
		[styles.opened]: isOpen ?? false,
		[styles.isClosing]: isClosing
	}

	return (
		<Portal>
			<div className={classNames(styles.Modal, mods, [className ?? ''])}>
				<div className={styles.overlay} onClick={closeHandler}>
					<div className={styles.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}
