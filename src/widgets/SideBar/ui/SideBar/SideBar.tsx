import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import cls from './SideBar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
    className?: string
}

export const SideBar = ({ className }: SidebarProps): JSX.Element => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = (): void => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher className='' />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}
