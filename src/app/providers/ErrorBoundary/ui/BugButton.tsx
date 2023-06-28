import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface BugButtonProps {
    className?: string
}

export const BugButton = ({ className }: BugButtonProps): JSX.Element => {
    const [error, setError] = useState(false)
    const onThrow = (): void => { setError(prev => !prev) }
    const { t } = useTranslation()

    useEffect(() => {
        if (error) throw new Error()
    }, [error])

    return (
        <Button onClick={onThrow}>
            {t('Выбросить ошибку')}
        </Button>
    )
}
