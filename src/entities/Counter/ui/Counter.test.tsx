import { screen } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'
import { Counter } from './Counter'
import { componentRender } from 'shared/config/test/componentRender/componentRender'

describe('Counter', () => {
	test('test render', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } }
		})
		expect(screen.getByTestId('value-title')).toHaveTextContent('10')
	})

	test('increment', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } }
		})
		userEvent.click(screen.getByTestId('increment-button'))
		expect(screen.getByTestId('value-title')).toHaveTextContent('11')
	})

	test('decrement', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } }
		})
		userEvent.click(screen.getByTestId('decrement-button'))
		expect(screen.getByTestId('value-title')).toHaveTextContent('9')
	})
})
