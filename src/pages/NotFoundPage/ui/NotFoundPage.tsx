import { classNames } from 'shared/lib/classNames/classNames'

import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

// interface NotFoundPageProps {
//     className?: string
// }

export const NotFoundPage = (): JSX.Element => {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.NotFoundPage, {}, [])}>
            {t('Страница не найдена')}
        </div>
    )
}
