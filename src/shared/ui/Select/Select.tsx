import { type Mods, classNames } from 'shared/lib/classNames/classNames'

import styles from './Select.module.scss'
import { type ChangeEvent, memo, useMemo } from 'react'

interface SelectOptions {
	value: string
	content: string
}

interface SelectProps {
	className?: string
	label?: string
	options: SelectOptions[]
	value?: string
	onChange?: (value: string) => void
	readonly?: boolean
}

export const Select = memo((props: SelectProps): JSX.Element => {
	const {
		className,
		label,
		options,
		value,
		onChange,
		readonly
	} = props

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value)
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
)