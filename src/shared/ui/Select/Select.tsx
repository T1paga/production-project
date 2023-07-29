import { type Mods, classNames } from '@/shared/lib/classNames/classNames'

import styles from './Select.module.scss'
import { type ChangeEvent, memo, useMemo } from 'react'

export interface SelectOptions<T extends string> {
	value: T
	content: string
}

interface SelectProps<T extends string> {
	className?: string
	label?: string
	options?: Array<SelectOptions<T>>
	value?: T
	onChange?: (value: T) => void
	readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>): JSX.Element => {
	const {
		className,
		label,
		options,
		value,
		onChange,
		readonly
	} = props

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value as T)
	}

	const optionList = useMemo(() => {
		return options?.map((option) => (
			<option
				key={option.value}
				className={styles.option}
				value={option.value}
			>
				{option.content}
			</option>
		))
	}, [options])

	const mods: Mods = {
	}

	return (
		<div className={classNames(styles.Wrapper, mods, [className ?? ''])}>
			{label &&
				<span className={styles.label}>
					{` ${label} > `}
				</span>
			}
			<select
				className={styles.select}
				value={value}
				disabled={readonly}
				onChange={onChangeHandler}
			>
				{optionList}
			</select>
		</div>
	)
}
