import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'

import './styles/index.scss'
import { SideBar } from 'widgets/SideBar'
import { type FC, Suspense } from 'react'

const app: FC = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar className='' />
                <div className="content-page">
                    <SideBar className='' />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default app
