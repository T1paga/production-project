/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev)
	}, [])

	return (
		<div className={classNames(cls.Navbar, {}, [className ?? ''])}>
			<Button
				theme={ThemeButton.CLEAR_INVERTED}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t('Login')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Dicta eum, commodi doloremque expedita aut molestias vitae nesciunt aperiam magni, autem ab deleniti inventore ipsa,
				facilis accusamus laboriosam ullam! Voluptatem, labore.
			</Modal>
		</div>
	)
}
