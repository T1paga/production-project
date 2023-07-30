import { classNames } from '@/shared/lib/classNames/classNames'
import { Popover as HPopover } from '@headlessui/react'
import { type DropdownDirection } from '@/shared/types/ui'
import { type ReactNode } from 'react'
import { mapDirectionClass } from '../../styles/const'
import styles from './Popover.module.scss'
import popupStyles from '../../styles/popup.module.scss'

interface PopoverProps {
	className?: string
	direction?: DropdownDirection
	trigger: ReactNode
	children: ReactNode
}

export function Popover(props: PopoverProps) {
	const {
		className, trigger, direction = 'bottom right', children
	} = props

	const menuClasses = [mapDirectionClass[direction]]

	return (
		<HPopover
			className={classNames(styles.Popover, {}, [className, popupStyles.popup])}
		>
			<HPopover.Button as={'div'} className={popupStyles.trigger}>
				{trigger}
			</HPopover.Button>

			<HPopover.Panel
				className={classNames(styles.panel, {}, menuClasses)}
			>
				{children}
			</HPopover.Panel>
		</HPopover>
	)
}
