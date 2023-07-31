// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { type Theme } from '@/shared/const/theme'
import { type Story } from '@storybook/react'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
	<ThemeProvider initialTheme={theme}>
		<div className={`app ${theme}`}>
			<StoryComponent />
		</div>
	</ThemeProvider>
)
