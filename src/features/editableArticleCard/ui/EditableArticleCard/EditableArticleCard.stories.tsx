import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { EditableArticleCard } from './EditableArticleCard'

export default {
	title: 'features/EditableArticleCard',
	component: EditableArticleCard,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof EditableArticleCard>

const Template: ComponentStory<typeof EditableArticleCard> = (args) => <EditableArticleCard {...args} />

export const Normal = Template.bind({})
Normal.args = {

}