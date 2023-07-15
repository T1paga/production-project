import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import type { Profile } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/updateProfileData',
	async (_: void, thunkApi) => {
		const { extra, rejectWithValue, getState } = thunkApi

		console.log('state', getState())

		const formData = getProfileForm(getState())

		try {
			const response = await extra.api.put<Profile>('/profile', formData)

			return response.data
		} catch (e) {
			console.log(e)
			return rejectWithValue('error')
		}
	}
)
