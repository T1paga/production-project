import { classNames } from 'shared/lib/classNames/classNames'
import { BrowserView, MobileView } from 'react-device-detect'
import { memo, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { NotificationList } from 'entities/Notification'
import { Popover } from 'shared/ui/Popups'
import styles from './NotificationButton.module.scss'
import { Drawer } from 'shared/ui/Drawer/Drawer'

interface NotificationButtonProps {
	className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
	const { className } = props

	const [isOpen, setIsOpen] = useState(false)

	const onOpenDrawer = () => {
		setIsOpen(true)
	}

	const onCloseDrawer = () => {
		setIsOpen(false)
	}

	const trigger = (
		<Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
			<Icon Svg={NotificationIcon} inverted />
		</Button>
	)

	return (
		<div>
			<BrowserView>
				<Popover
					className={classNames(styles.NotificationButton, {}, [className])}
					direction="bottom left"
					trigger={trigger}
				>
					<NotificationList className={styles.notifications} />
				</Popover>
			</BrowserView>
			<MobileView>
				{trigger}
				<Drawer isOpen={isOpen} onClose={onCloseDrawer}>
					<NotificationList />
				</Drawer>
			</MobileView>
		</div>
	)
})
