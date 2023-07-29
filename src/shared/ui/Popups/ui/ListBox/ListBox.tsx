import { Fragment, type ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '../../../Stack'
import { Button } from '../../../Button/Button'
import styles from './ListBox.module.scss'
import { type DropdownDirection } from '@/shared/types/ui'
import popupStyles from '../../styles/popup.module.scss'
import { mapDirectionClass } from '../../styles/const'

export interface ListBoxItem {
	value: string
	content: ReactNode
	disabled?: boolean
}

interface ListBoxProps {
	items?: ListBoxItem[]
	className?: string
	value?: string
	defaultValue?: string
	onChange: (value: string) => void
	readonly?: boolean
	direction?: DropdownDirection
	label?: string
}

export function ListBox(props: ListBoxProps) {
	const {
		className,
		items,
		value,
		defaultValue,
		onChange,
		readonly,
		direction = 'bottom',
		label
	} = props

	const optionsClasses = [mapDirectionClass[direction]]

	return (
		<HStack gap="4">
			{label && <span>{`${label}>`}</span>}
			<HListBox
				disabled={readonly}
				as="div"
				className={classNames(styles.ListBox, {}, [className, popupStyles.popup])}
				value={value}
				onChange={onChange}
			>
				<HListBox.Button className={styles.trigger}>
					<Button disabled={readonly}>
						{value ?? defaultValue}
					</Button>
				</HListBox.Button>
				<HListBox.Options className={classNames(styles.options, {}, optionsClasses)}>
					{items?.map((item) => (
						<HListBox.Option
							key={item.value}
							value={item.value}
							disabled={item.disabled}
							as={Fragment}
						>
							{({ active, selected }) => (
								<li
									className={classNames(
										styles.item,
										{
											[popupStyles.active]: active,
											[popupStyles.disabled]: item.disabled
										}
									)}
								>
									{selected && '!!!'}
									{item.content}
								</li>
							)}
						</HListBox.Option>
					))}
				</HListBox.Options>
			</HListBox>
		</HStack>
	)
}
