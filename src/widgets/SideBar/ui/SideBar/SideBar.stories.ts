import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { SideBar } from './SideBar'

const meta = {
    title: 'widget/Sidebar',
    component: SideBar,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof SideBar>

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