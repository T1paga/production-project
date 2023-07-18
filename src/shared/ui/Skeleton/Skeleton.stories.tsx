import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Skeleton } from './Skeleton'

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

export const Pink = Template.bind({})
Pink.args = {
	width: '100%',
	height: 200
}
Pink.decorators = [ThemeDecorator(Theme.PINK)]

export const PinklCircle = Template.bind({})
PinklCircle.args = {
	border: '50%',
	width: 100,
	height: 100
}
PinklCircle.decorators = [ThemeDecorator(Theme.PINK)]
