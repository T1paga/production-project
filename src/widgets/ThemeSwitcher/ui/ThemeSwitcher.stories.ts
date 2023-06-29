import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta = {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        className: ''
    }
}

export const Dark: Story = {
    args: {
        className: ''
    }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
