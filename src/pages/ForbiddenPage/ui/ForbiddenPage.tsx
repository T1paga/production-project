import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'

interface ForbiddenPageProps {
	className?: string
}

const ForbiddenPage = memo((props: ForbiddenPageProps): JSX.Element => {
	const { className } = props
	const { t } = useTranslation()

	return (
		<Page className={classNames('', {}, [className ?? ''])}>
			Пошел нахуй отсюда
		</Page>
	)
}
)

export default ForbiddenPage
