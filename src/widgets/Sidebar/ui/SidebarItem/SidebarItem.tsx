import { classNames } from 'shared/lib/classNames/classNames'
import styles from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type SidebarItemType } from '../../model/items'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

interface SidebarItemProps {
	className?: string
	item: SidebarItemType
	collapsed?: boolean
}

export const SidebarItem = memo(({ className, item, collapsed }: SidebarItemProps): JSX.Element => {
	const { t } = useTranslation()
	const isAuth = useSelector(getUserAuthData)

	if (item.authOnly && !isAuth) {
		return <></>
	}

	return (
		<AppLink
			theme={AppLinkTheme.SECONDARY}
			to={item.path}
			className={classNames(styles.item, { [styles.collapsed]: collapsed || false }, [className])}
		>
			<item.Icon className={styles.icon} />
			<span className={styles.link}>
				{t(item.text)}
			</span>
		</AppLink>
	)
})
