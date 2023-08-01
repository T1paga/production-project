import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useMemo } from 'react'

import styles from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { Select, type SelectOptions } from '@/shared/ui/Select'
import { type sortOrder } from '@/shared/types'
import { ArticleSortField } from '@/entities/Article'

interface ArticleSortSelectorProps {
	className?: string
	sort: ArticleSortField
	onChangeSort: (newSort: ArticleSortField) => void
	order: sortOrder
	onChangeOrder: (newOrder: sortOrder) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps): JSX.Element => {
	const { className, sort, onChangeSort, order, onChangeOrder } = props
	const { t } = useTranslation()

	const orderOptions = useMemo<Array<SelectOptions<sortOrder>>>(() => [
		{
			value: 'asc',
			content: 'возрастанию'
		},
		{
			value: 'desc',
			content: 'убыванию'
		}
	], [])

	const sortFieldOptions = useMemo<Array<SelectOptions<ArticleSortField>>>(() => [
		{
			value: ArticleSortField.CREATED,
			content: 'дате создания'
		},
		{
			value: ArticleSortField.TITLE,
			content: 'названию'
		},
		{
			value: ArticleSortField.VIEWS,
			content: 'колличеству просмотров'
		}
	], [])

	return (
		<div className={classNames(styles.ArticleSortSelector, {}, [className ?? ''])}>
			<Select
				options={sortFieldOptions}
				label={'Сортировать ПО'}
				value={sort}
				onChange={onChangeSort}
			/>
			<Select
				className={styles.order}
				options={orderOptions}
				label={'по'}
				value={order}
				onChange={onChangeOrder}
			/>
		</div>
	)
}
)
