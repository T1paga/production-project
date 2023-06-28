import { classNames } from 'shared/lib/classNames/classNames'

import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps): JSX.Element => {
    const { t } = useTranslation()

    const reloadPage = (): void => {
        location.reload()
    }

    return (
        <div className={classNames(styles.PageError, {}, [className ?? ''])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage} className='' theme={ThemeButton.CLEAR}>{t('Обновить страницу')}</Button>
        </div>
    )
}
