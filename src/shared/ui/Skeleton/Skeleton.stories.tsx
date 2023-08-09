import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Skeleton } from './Skeleton'
import { Theme } from '@/shared/const/theme'

export default {
	title: 'shared/Skeleton',
	component: Skeleton,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Normal = Template.bind({})
Normal.args = {
	width: '100%',
	height: 200
}

export const NormalCircle = Template.bind({})
NormalCircle.args = {
	border: '50%',
	width: 100,
	height: 100
}

export const Dark = Template.bind({})
Dark.args = {
	width: '100%',
	height: 200
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const DarklCircle = Template.bind({})
DarklCircle.args = {
	border: '50%',
	width: 100,
	height: 100
}
DarklCircle.decorators = [ThemeDecorator(Theme.DARK)]

export const orange = Template.bind({})
orange.args = {
	width: '100%',
	height: 200
}
orange.decorators = [ThemeDecorator(Theme.ORANGE)]

export const orangelCircle = Template.bind({})
orangelCircle.args = {
	border: '50%',
	width: 100,
	height: 100
}
orangelCircle.decorators = [ThemeDecorator(Theme.ORANGE)]
