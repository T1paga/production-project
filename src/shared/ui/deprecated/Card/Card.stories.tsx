import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from '../Text/Text'
import { Card } from './Card'
import { t } from 'i18next'

export default {
	title: 'shared/Card',
	component: Card,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Normal = Template.bind({})
Normal.args = {
	children: <Text title={t('Тестовый заголовок')} text={t('Тестовый текст')} />
}
