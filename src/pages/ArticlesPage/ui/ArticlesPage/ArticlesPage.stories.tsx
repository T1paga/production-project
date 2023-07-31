import type { ComponentStory, ComponentMeta } from '@storybook/react'

import ArticlesPage from './ArticlesPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
	title: 'pages/ArticlesPage/ArticlesPage',
	component: ArticlesPage,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
	mockData: [
		{
			url: __API__ + '/articles?_limit=3',
			method: 'GET',
			status: 200,
			response: []
		}
	]
}