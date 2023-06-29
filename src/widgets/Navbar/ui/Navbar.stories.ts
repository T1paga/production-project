import { Navbar } from './Navbar'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
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