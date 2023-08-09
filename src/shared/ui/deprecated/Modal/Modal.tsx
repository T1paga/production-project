import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import { type ReactNode } from 'react'
import { useTheme } from '../../../lib/hooks/useTheme/useTheme'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { Overlay } from '../../redesigned/Overlay/Overlay'
import { Portal } from '../../redesigned/Portal/Portal'
import styles from './Modal.module.scss'

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen?: boolean
	onClose?: () => void
	lazy?: boolean
}

const ANIMATION_DELAY = 300

/**
 * @deprecated
 */
export const Modal = (props: ModalProps) => {
	const {
		className,
		children,
		isOpen,
		onClose,
		lazy
	} = props

	const {
		close,
		isClosing,
		isMounted
	} = useModal({
		animationDelay: ANIMATION_DELAY,
		onClose,
		isOpen
	})

	const { theme } = useTheme()

	const mods: Mods = {
		[styles.opened]: isOpen,
		[styles.isClosing]: isClosing
	}

	if (lazy && !isMounted) {
		return null
	}

	return (
		<Portal>
			<div className={classNames(styles.Modal, mods, [className, theme, 'app_modal'])}>
				<Overlay onClick={close} />
				<div
					className={styles.content}
				>
					{children}
				</div>
			</div>
		</Portal>
	)
}
