import { classNames } from 'shared/lib/classNames/classNames'

import styles from './SideBar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SideBarProps {
    className: string
}

export const SideBar = ({ className }: SideBarProps): JSX.Element => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = (): void => {
        setCollapsed((prevstate) => !prevstate)
    }

    const { t } = useTranslation()

    return (
        <div data-testid='sidebar' className={classNames(styles.SideBar, { [styles.collapsed]: collapsed }, [className])}>
            <button data-testid='sidebar-toggle' onClick={onToggle}>{t('переключить')}</button>
            <div className={styles.switchers}>
                <ThemeSwitcher className='' />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    )
}
