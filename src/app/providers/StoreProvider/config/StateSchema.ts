import type { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject, Dispatch } from '@reduxjs/toolkit'
import type { NavigateOptions, To } from 'react-router-dom'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type CounterSchema } from 'entities/Counter'
import { type ProfileSchema } from 'entities/Profile'
import { type UserSchema } from 'entities/User'
import { type AddCommentFormSchema } from 'features/AddCommentForm'
import { type LoginSchema } from 'features/AuthByUsername'
import { type ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage'

export interface StateSchema {
	counter: CounterSchema
	user: UserSchema

	// Асинхронные редюсеры
	loginForm?: LoginSchema
	profile?: ProfileSchema
	articleDetails?: ArticleDetailsSchema
	articleDetailsComments?: ArticleDetailsCommentSchema
	addCommentForm?: AddCommentFormSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkExtraArg {
	api: AxiosInstance
	navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArg
	dispatch?: Dispatch
	state: StateSchema
}