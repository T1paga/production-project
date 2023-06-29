import { Loader } from './Loader'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
    }
}

export const Dark: Story = {
    args: {
    }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
