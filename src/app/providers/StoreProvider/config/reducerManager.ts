/* eslint-disable @typescript-eslint/no-dynamic-delete */
import {
	type ReducersMapObject, combineReducers,
	type AnyAction, type Reducer, type CombinedState
} from "@reduxjs/toolkit"
import type { StateSchemaKey, StateSchema } from "./StateSchema"

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>) {
	const reducers = { ...initialReducers }

	let combinedReducer = combineReducers(reducers)

	let keysToRemove: StateSchemaKey[] = []

	return {
		getReducerMap: () => reducers,

		reduce: (state: StateSchema, action: AnyAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state }

				keysToRemove.forEach((key) => {
					delete state[key]
				})

				keysToRemove = []
			}

			return combinedReducer(state, action)
		},

		add: (key: StateSchemaKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return
			}

			reducers[key] = reducer
			combinedReducer = combineReducers(reducers)
		},

		remove: (key: StateSchemaKey) => {
			if (!key || !reducers[key]) {
				return
			}

			console.log('do', keysToRemove)

			delete reducers[key]

			keysToRemove.push(key)
			combinedReducer = combineReducers(reducers)

			console.log('posle', keysToRemove)
		}
	}
}