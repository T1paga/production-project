import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { CounterReducer } from 'entities/Counter'
import { userReducer } from 'entities/user'

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		counter: CounterReducer,
		user: userReducer
	}

	return configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState
	})
}
