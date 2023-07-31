import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { NotificationItem } from './NotificationItem'

export default {
	title: 'entities/notification/NotificationItem',
	component: NotificationItem,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />

export const Normal = Template.bind({})
Normal.args = {
	item: {
		id: '1',
		title: 'title',
		description: 'description description description'
	}
}
