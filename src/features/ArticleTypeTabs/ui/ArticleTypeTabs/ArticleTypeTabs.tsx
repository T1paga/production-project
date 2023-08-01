import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useMemo } from 'react'

import { useTranslation } from 'react-i18next'
import { Tabs, type TabItem } from '@/shared/ui/Tabs'
import { ArticleType } from '@/entities/Article'

interface ArticleTypeTabsProps {
	className?: string
	value: ArticleType
	onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps): JSX.Element => {
	const { className, value, onChangeType } = props
	const { t } = useTranslation()

	const typeTabs = useMemo<TabItem[]>(() => [
		{
			value: ArticleType.IT,
			content: 'IT'
		},
		{
			value: ArticleType.ECONOMICS,
			content: 'Экономика'
		},
		{
			value: ArticleType.SCIENCE,
			content: 'Наука'
		},
		{
			value: ArticleType.ALL,
			content: 'Все статьи'
		}
	], [])

	const onTabClick = useCallback((tab: TabItem) => {
		onChangeType(tab.value as ArticleType)
	}, [onChangeType])

	return (
		<Tabs
			className={classNames('', {}, [className ?? ''])}
			onTabClick={onTabClick}
			value={value}
			tabs={typeTabs}
		/>
	)
}
)
