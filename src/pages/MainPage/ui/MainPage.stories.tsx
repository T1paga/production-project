import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import MainPage from './MainPage'

export default {
	title: 'pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<any> = (args) => <MainPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(Theme.DARK)]
