import { type Reducer } from '@reduxjs/toolkit'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { useEffect, type FC, type ReactNode } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
	children: ReactNode
	reducers: ReducersList
	removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props: DynamicModuleLoaderProps) => {
	const {
		children,
		reducers,
		removeAfterUnmount
	} = props
	const store = useStore() as ReduxStoreWithManager
	const dispatch = useDispatch()

	useEffect(() => {
		// @ts-ignore
		Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
			store.reducerManager.add(name, reducer)
			dispatch({ type: `@INIT ${name} reducer` })
		})

		return () => {
			if (removeAfterUnmount) {
				// @ts-ignore
				Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
					store.reducerManager.remove(name)
					dispatch({ type: `@DESTROY ${name} reducer` })
				})
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return <div>
		{children}
	</div>
}
