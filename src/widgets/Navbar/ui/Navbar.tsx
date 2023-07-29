import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { LoginModal } from '@/features/AuthByUsername'
import { getUserAuthData } from '@/entities/User'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { HStack } from '@/shared/ui/Stack'
import { NotificationButton } from '@/features/notificationButton'
import { AvatarDropdown } from '@/features/avatarDropdown'
import styles from './Navbar.module.scss'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { NotificationList } from '@/entities/Notification'

interface NavbarProps {
	className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)
	const authData = useSelector(getUserAuthData)

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	if (authData) {
		return (
			<div className={classNames(styles.Navbar, {}, [className])}>
				<Text
					className={styles.appName}
					title={'T1paga App'}
					theme={TextTheme.INVERTED}
				/>
				<AppLink
					className={styles.createBtn}
					to={RoutePath.article_create}
					theme={AppLinkTheme.SECONDARY}
				>
					Создать статью
				</AppLink>
				<HStack gap='16' className={styles.actions}>
					<NotificationButton />
					<AvatarDropdown />
				</HStack>
			</div>
		)
	}

	return (
		<header className={classNames(styles.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={styles.links}
				onClick={onShowModal}
			>
				{t('Войти')}
			</Button>
			{isAuthModal && <LoginModal
				isOpen={isAuthModal}
				onClose={onCloseModal}
			/>}
		</header>
	)
})