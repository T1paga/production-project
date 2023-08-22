import { Text } from '@/shared/ui/redesigned/Text'
import { memo } from 'react'

import { useTranslation } from 'react-i18next'

interface checkValidateProps {
	field: string
}

export const СheckValidate = memo((props: checkValidateProps): JSX.Element => {
	const { field } = props
	const { t } = useTranslation()

	return (
		<p>
			{!field && <Text variant='error' text={t('Заполните это поле (Или удалите блок)')} />}
		</p>
	)
}
)
