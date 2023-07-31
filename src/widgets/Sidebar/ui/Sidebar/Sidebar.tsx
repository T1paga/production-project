import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useMemo, useState } from 'react'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { LangSwitcher } from '@/widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import styles from './Sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { VStack } from '@/shared/ui/Stack'

interface SidebarProps {
	className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)
	const sidebarItemsList = useSelector(getSidebarItems)

	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}

	const itemsList = useMemo(() => sidebarItemsList.map((item) => (
		<SidebarItem
			item={item}
			collapsed={collapsed}
			key={item.path}
		/>
	)), [collapsed, sidebarItemsList])

	return (
		<aside
			data-testid="sidebar"
			className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
		>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={styles.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
				square
			>
				{collapsed ? '>' : '<'}
			</Button>
			<VStack role='navigation' gap='8' className={styles.items}>
				{itemsList}
			</VStack>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher
					short={collapsed}
					className={styles.lang}
				/>
			</div>
		</aside>
	)
})
