import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

interface ForbiddenPageProps {
	className?: string
}

const ForbiddenPage = memo((props: ForbiddenPageProps): JSX.Element => {
	const { className } = props
	const { t } = useTranslation('article')

	return (
		<Page data-testid={'ForbiddenPage'} className={classNames('', {}, [className ?? ''])}>
			{t('Доступ запрещен')}
		</Page>
	)
}
)

export default ForbiddenPage
