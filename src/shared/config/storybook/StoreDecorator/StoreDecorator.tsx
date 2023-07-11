import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	// @ts-ignore
	loginForm: loginReducer,
	// @ts-ignore
	profile: profileReducer
}

export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => (
	<StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
		<StoryComponent />
	</StoreProvider>
)
