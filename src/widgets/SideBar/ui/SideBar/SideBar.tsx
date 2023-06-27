import { classNames } from 'shared/lib/classNames'

import styles from './SideBar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SideBarProps {
  className: string
}

export const SideBar = ({ className }: SideBarProps): JSX.Element => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = (): void => {
        setCollapsed((prevstate) => !prevstate)
    }

    return (
        <div className={classNames(styles.SideBar, { [styles.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>Toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher className='' />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    )
}
