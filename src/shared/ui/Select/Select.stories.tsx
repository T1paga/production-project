import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { Select } from './Select'

export default {
	title: 'shared/Select',
	component: Select,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
	label: 'Введите что-нибудь',
	options: [
		{ value: '1', content: 'Первый пункт' },
		{ value: '2', content: 'Второй пункт' },
		{ value: '3', content: 'Третий пункт' },
		{ value: '4', content: 'Четвертый пункт' }
	]
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
	label: 'Введите что-нибудь'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
