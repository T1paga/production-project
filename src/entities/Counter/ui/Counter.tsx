import { Button } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { CounterActions } from '../model/slice/CounterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = (): JSX.Element => {
	const dispath = useDispatch()

	const counterValue = useSelector(getCounterValue)

	const inc = () => {
		dispath(CounterActions.increment())
	}
	const dec = () => {
		dispath(CounterActions.decrement())
	}

	return (
		<div>
			<h1 data-testid='value-title'>{counterValue}</h1>
			<Button data-testid='decrement-button' onClick={dec}>-</Button>
			<Button data-testid='increment-button' onClick={inc}>+</Button>
		</div>
	)
}
