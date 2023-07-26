import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import styles from './Navbar.module.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/Avatar/Avatar'

interface NavbarProps {
	className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)
	const authData = useSelector(getUserAuthData)
	const dispatch = useDispatch()

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const onLogout = useCallback(() => {
		dispatch(userActions.logout())
	}, [dispatch])

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
				<Dropdown
					direction='bottom left'
					className={styles.dropDown}
					trigger={<Avatar size={30} src={authData.avatar} />}
					items={[
						{
							content: 'Профиль',
							href: RoutePath.profile + authData.id
						},
						{
							content: 'Выйти',
							onClick: onLogout
						}
					]}
				/>
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