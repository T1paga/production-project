import { Menu } from '@headlessui/react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Fragment, type ReactNode } from 'react'
import { type DropdownDirection } from '@/shared/types/ui'
import { AppLink } from '../../../AppLink/AppLink'
import styles from './Dropdown.module.scss'
import popupStyles from '../../styles/popup.module.scss'
import { mapDirectionClass } from '../../styles/const'

export interface DropdownItem {
	disabled?: boolean
	content?: ReactNode
	onClick?: () => void
	href?: string
}

interface DropdownProps {
	className?: string
	items: DropdownItem[]
	direction?: DropdownDirection
	trigger: ReactNode
}

/**
 * @deprecated
 */
export function Dropdown(props: DropdownProps) {
	const {
		className, trigger, items, direction = 'bottom right'
	} = props

	const menuClasses = [mapDirectionClass[direction]]

	return (
		<Menu as="div" className={classNames(styles.Dropdown, {}, [className, popupStyles.popup])}>
			<Menu.Button className={popupStyles.trigger}>
				{trigger}
			</Menu.Button>
			<Menu.Items className={classNames(styles.menu, {}, menuClasses)}>
				{items.map((item, index) => {
					const content = ({ active }: { active: boolean }) => (
						<button
							type="button"
							disabled={item.disabled}
							onClick={item.onClick}
							className={classNames(styles.item, { [popupStyles.active]: active })}
						>
							{item.content}
						</button>
					)

					if (item.href) {
						return (
							<Menu.Item
								as={AppLink}
								to={item.href}
								disabled={item.disabled}
								key={`dropdown-key ${index}`}
							>
								{content}
							</Menu.Item>
						)
					}

					return (
						<Menu.Item
							as={Fragment}
							disabled={item.disabled}
							key={`dropdown-key ${index}`}
						>
							{content}
						</Menu.Item>
					)
				})}

			</Menu.Items>
		</Menu>
	)
}
