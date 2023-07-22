/* eslint-disable @typescript-eslint/no-dynamic-delete */
import {
	type ReducersMapObject, combineReducers,
	type AnyAction, type Reducer
} from "@reduxjs/toolkit"
import type { StateSchemaKey, StateSchema, MountedReducers, ReducerManager } from "./StateSchema"

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
	const reducers = { ...initialReducers }

	let combinedReducer = combineReducers(reducers)

	let keysToRemove: StateSchemaKey[] = []
	const mountedReducers: MountedReducers = {}

	return {
		getReducerMap: () => reducers,

		getMountedReducers: () => mountedReducers,

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
			mountedReducers[key] = true
			combinedReducer = combineReducers(reducers)
		},

		remove: (key: StateSchemaKey) => {
			if (!key || !reducers[key]) {
				return
			}

			delete reducers[key]

			keysToRemove.push(key)
			mountedReducers[key] = false
			combinedReducer = combineReducers(reducers)
		}
	}
}