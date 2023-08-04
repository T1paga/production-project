import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { NotificationList } from './NotificationList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
	title: 'entities/notification/NotificationList',
	component: NotificationList,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
	StoreDecorator({})
]
Normal.parameters = {
	mockData: [
		{
			url: __API__ + '/notifications',
			method: 'GET',
			status: 200,
			response: [
				{
					id: '1',
					title: 'title',
					description: 'text text text text text text text text text text'
				},
				{
					id: '2',
					title: 'title 2',
					description: 'text text text text text text text text text text'
				},
				{
					id: '3',
					title: 'title 3',
					description: 'text text text text text text text text text text'
				}
			]
		}
	]
}
